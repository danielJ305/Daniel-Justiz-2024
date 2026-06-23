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
          reject(err.message);
        }
      });
    });

     if (!token) {
       return new Response(JSON.stringify({ message: "Token not found" }), {
         status: 405,
       });
     }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    // reCAPTCHA v3 returns a score (0.0 - 1.0) and the action name.
    // Require a passing verification, a confident score, and the action
    // we set on the client.
    const { success, score, action } = response.data;
    const isHuman =
      success && score >= 0.5 && (action === "contact_form" || !action);

    if (isHuman) {
      await sendMailPromise();
      return NextResponse.json({ message: "Email Sent" });
    } else {
      return NextResponse.json(
        { message: "Failed reCAPTCHA verification", score },
        { status: 405 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }


}
