'use client'

import React, { useRef } from "react";
import ContactForm from "./contactForm";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  RiBehanceFill,
  RiGithubFill,
  // RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";


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
         .to(".footer-message", {
           duration: 0.6,
           y: -20,
         });
     },
     { scope: containerRef }
   );

    return (
      <div ref={containerRef} className='flex flex-col z-10'>
        <div className='contact-container flex flex-col md:flex-row container w-full h-full m-4 md:m-8 lg:m-12 pt-32 md:pt-32 lg:pt-44 pb-36 md:pb-72'>
          <div className='basis-1/2 order-2 md:order-1 md:mt-0 mt-6'>
            <div>
              <p className='w-11/12 lg:w-4/5 text-lg'>
                Kindly leave a brief message detailing the type of service you
                need. I look forward to assisting you!
              </p>
            </div>

            <ContactForm />
          </div>
          <div className='flex flex-col basis-1/2 mt-6 md:mt-0 order-1 md:order-2'>
            <div className=''>
              <h2 className='text-lg'>Lets get to work!</h2>
              <h2 className='text-5xl md:text-6xl mb-4'>Contact Me</h2>
              <p className='w-11/12 lg:w-4/5 mt-8 text-lg'>
                My mission is to bring your vision to life by creating designs
                and strategies that resonate with your audience and amplify your
                brand's impact. From concept to execution, I’m committed to
                delivering exceptional experiences and results that align with
                your business objectives. Let’s work together to build something
                extraordinary!
              </p>
              <ul>
                <Link
                  href='mailto:danieljustiz9508@gmail.com'
                  className='flex items-center pt-4 '
                >
                  <MdOutlineEmail className='text-4xl text-white hover:text-amber-300' />
                  <span className='text-xl ml-4 '>
                    danieljustiz9508@gmail.com
                  </span>
                </Link>
              </ul>

              <div className='flex mt-8'>
                <Link
                  href='https://www.linkedin.com/in/daniel-justiz-a76a3218a/'
                  target='_blank'
                >
                  <div className='pr-8 menu-link-item-holder'>
                    <RiLinkedinBoxLine className='size-10 text-white hover:text-amber-300' />
                  </div>
                </Link>
                <Link href='https://github.com/danielJ305' target='_blank'>
                  <div className='pr-8 menu-link-item-holder'>
                    <RiGithubFill className='size-10 text-white hover:text-amber-300' />
                  </div>
                </Link>
                {/* <Link
                  href='https://www.instagram.com/danieljustfish/'
                  target='_blank'
                >
                  <div className='pr-8 menu-link-item-holder'>
                    <RiInstagramLine className='size-10 hover:text-amber-300' />
                  </div>
                </Link> */}
                <Link
                  href='https://www.behance.net/danieljustizMedia/'
                  target='_blank'
                >
                  <div className='menu-link-item-holder'>
                    <RiBehanceFill className='size-10 text-white hover:text-amber-300' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mb-4 px-6 footer-message'>
          <p className='translate-y-4 pb-4'>
            Copyright © 2024 Daniel Justiz. Built on Next.JS
          </p>
          <Link
            href='https://github.com/danielJ305/Daniel-Justiz-2024'
            target='_blank'
            className='translate-y-4 text-amber-300'
          >
            Github Repo
          </Link>
        </div>
      </div>
    );
}

export default Footer;