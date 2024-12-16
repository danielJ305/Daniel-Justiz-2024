'use client'

import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import Iframe from 'react-iframe';
import "../hero.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export function AboutIntro() {
    const container2 = useRef();
    const tl = useRef();
    const introTl = useRef(); 
    useGSAP(

        () => {
            tl.current = gsap.timeline({ repeat: 3 })
            .to('.graphic-design-frame', {
                duration: 60,
                y:-900
            })
            .to('.graphic-design-frame', {
                duration: 60,
                y:0
            })   
            
            introTl.current = gsap.timeline().to(".intro-text", 1.8, {
              y: -10,
              opacity: 1,
              ease: "power4.out",
              delay: 1,
              // skewY: 7,
              stagger: {
                amount: 0.6,
              },
            });
            
        });

        useEffect(() => {
            tl.current.play();

          });

    return (
      <div
        ref={container2}
        className='flex flex-row flex-wrap justify-center w-full mb-12 lg:mb-4 md:m-6 md:mb-0 lg:m-12 lg:mt-0 md mt-32'
      >
        <div className='md:basis-1/2 m-2 lg:m-4 p-4 bg-[#0B192C]/50 rounded-md rounded-md w-full lg:p-12 flex flex-col justify-between h-full md:h-[36rem] lg:h-[38rem] grow lg:grow-0 pt-6 md:pt-auto'>
          <div>
            <h1 className='text-[3rem] lg:text-[5.2rem] md:text-6xl leading-tight font-bold intro-text translate-y-[100px] opacity-0'>
              Designing Innovation, Building Your Vision.
            </h1>
            <p className='text-xl lg:w-11/12 mt-6 intro-text translate-y-[100px] opacity-0'>
              Hi, I'm Danniel Justiz, with over 6 of experience in graphic design and web
              development, I specialize in crafting compelling branding, custom
              websites, and tailored digital marketing solutions. Leveraging
              tools like Adobe Creative Suite and platforms like WordPress, I’m
              passionate about helping businesses elevate their online presence,
              engage their audiences, and achieve their goals in today’s digital
              landscape.
            </p>
          </div>
          <div className='flex flex-row justify-between mt-6  w-full'>
            <div>
              <p className='text-xl md:text-2xl text-amber-300 intro-text translate-y-[100px] opacity-0'>
                10 Years Graphic Design Experience
              </p>
            </div>
            <Link href='#contact'>
              <button className='ease-out duration-300 bg-[#1E3E62] hover:bg-[#FF6500] cursor-pointer px-8 py-2 rounded-full text-lg intro-text translate-y-[100px] opacity-0'>
                Lets Talk
              </button>
            </Link>
          </div>
        </div>
        <div className='md:basis-1/4 m-2 lg:m-4 flex flex-col rounded-md w-full h-[32rem] sm:h-[36rem] md:h-[36rem] lg:h-[38rem]'>
          <div className='w-auto h-full bg-[#222] overflow-hidden sm:min-w-[13rem] md:min-w-[15rem] '>
            <div className='h-screen graphic-design-frame'>
              <Iframe
                id='portfolio_1'
                url='https://danieljustiz.myportfolio.com/'
                title='Adobe Behance Graphic Design Portfolio'
                height='100%'
                width='100%'
                scrolling='no'
              ></Iframe>
            </div>
          </div>
          <div className='w-auto h-32 bg-[#222] sm:min-w-[13rem] md:min-w-[15rem] p-8'>
            <Link
              href='#work'
              scroll={true}
              className='ease-out duration-300 float-right bg-[#0B192C] hover:bg-[#FF6500] cursor-pointer px-8 py-2 rounded-full text-lg intro-text translate-y-[100px] opacity-0'
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    );
}

export default AboutIntro;