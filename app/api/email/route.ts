import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { name, email, message, token } =
    await request.json();
  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

  const transport = nodemailer.createTransport({
    service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
          /* 
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err);
        }
      });
    });

     if (!token) {
       return new Response(JSON.stringify({ message: "Token not found" }), {
         status: 405,
       });
     }

  // Verify the reCAPTCHA token first, so a verification failure is
  // reported separately from an email-sending failure.
  let recaptcha;
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );
    recaptcha = response.data;
  } catch (err) {
    console.error("reCAPTCHA verification request failed:", err);
    return NextResponse.json(
      { message: "Could not reach reCAPTCHA verification" },
      { status: 502 }
    );
  }

  // reCAPTCHA v3 returns a score (0.0 - 1.0) and the action name.
  // Require a passing verification, a confident score, and the action
  // we set on the client.
  const { success, score, action } = recaptcha;
  const isHuman =
    success && score >= 0.5 && (action === "contact_form" || !action);

  if (!isHuman) {
    console.error("reCAPTCHA rejected submission:", recaptcha);
    return NextResponse.json(
      { message: "Failed reCAPTCHA verification", score },
      { status: 405 }
    );
  }

  // reCAPTCHA passed — now try to send the email.
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Sent" });
  } catch (err) {
    // Surface the real cause (e.g. Gmail auth failure) in the server logs.
    console.error("Email send failed:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Email could not be sent", detail },
      { status: 500 }
    );
  }
}
