'use client'

import React, { useRef } from "react";
import ContactForm from "./contactForm";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function Footer() {
  const containerRef = useRef();
  const tl = useRef();

   useGSAP(
     () => {
       tl.current = gsap
         .timeline({
           scrollTrigger: {
             trigger: ".footer-message",
             start: "bottom bottom",
             delay: 2,
           },
         })
         .to(".footer-text", {
           duration: 0.6,
           y: -20,
         });
     },
     { scope: containerRef }
   );

    return (
      <div ref={containerRef} className='flex flex-col'>
        <div className='contact-container flex flex-col md:flex-row container w-full h-full m-6 pt-44 pb-72'>
          <div className='basis-1/2'>
            <div>
              <p className='w-4/5 text-lg'>
                Please leave me with a short message for the type of service you
                are requesting!
              </p>
            </div>

            <ContactForm />
          </div>
          <div className='flex flex-col basis-1/2'>
            <div className=''>
              <h2 className='text-lg'>Lets get to work!</h2>
              <h2 className='text-6xl lg:text-6xl mb-4'>Contact Me</h2>
              <p className='w-4/5 mt-8 text-lg'>
                Looking to bring your brand to life with a stunning website or
                captivating graphics? I’m a freelance website and graphic
                designer, here to create unique, user-friendly designs tailored
                to your vision. Whether you have a project in mind or just need
                help getting started, let’s chat about how I can help make your
                brand stand out. Reach out, and let’s create something
                exceptional together!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className='text-center mb-4 footer-message'>
          <p className='translate-y-4 footer-text'>
            Copyright © 2024 Daniel Justiz. Built on Next.JS
          </p>
          <Link href='' className='translate-y-4 footer-text'>Github Repo</Link>
        </div>
      </div>
    );
}

export default Footer;