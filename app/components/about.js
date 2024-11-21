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
    // window.onload = function() { 
    //     let frame1 = document.getElementById('portfolio_1');
        // console.log(frame1.contentWindow)
        // frame1.contentWindow.scrollTo(0, frame1.contentDocument.body.scrollHeight);
    // }
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
            
        });

        useEffect(() => {
            tl.current.play();

          });

    return (
        <div ref={container2} className='flex flex-row flex-wrap justify-center w-full sm:mb-12 md:m-8 lg:m-12 lg:mt-0 md lg:mt-0 mt-32'>
            <div className='md:basis-1/2 m-2 lg:m-4 p-4 bg-[#0B192C]/50 rounded-md rounded-md w-full lg:p-12 flex flex-col justify-between h-[28rem] sm:h-[36rem] md:h-[36rem] lg:h-[38rem] grow lg:grow-0'>
                <div>
                <h1 className='text-[3rem] lg:text-[6rem] md:text-[4.2rem] leading-tight'>Let's Build The Next Big Thing!</h1>
                </div>
                <div className='flex flex-row justify-between mt-6  w-full'>
                    <div>
                        <p className='text-2xl'>10Y Web Developer Experience</p>
                    </div>
                    <button className='ease-out duration-300 bg-[#1E3E62] hover:bg-[#FF6500] cursor-pointer px-8 py-2 rounded-full text-lg'>
                        Lets Talk
                    </button>
                </div>
            </div>
            <div className='md:basis-1/4 m-2 lg:m-4 flex flex-col rounded-md w-full h-[32rem] sm:h-[36rem] md:h-[36rem] lg:h-[38rem]'>
                <div className='w-auto h-full bg-[#222] overflow-hidden sm:min-w-[13rem] md:min-w-[15rem] ' >
                    <div className='h-screen graphic-design-frame'> 
                        <Iframe id='portfolio_1' url="https://danieljustiz.myportfolio.com/" 
                        title="Adobe Behance Graphic Design Portfolio" 
                        // allowFullScreen="{true}" 
                        height="100%" 
                        width="100%"
                        scrolling="no"></Iframe>
                    </div>
                </div>
                <div className='w-auto h-32 bg-[#222] sm:min-w-[13rem] md:min-w-[15rem] p-8'>
                    <Link href='#work'
                     scroll={true}
                     className='ease-out duration-300 float-right bg-[#0B192C] hover:bg-[#FF6500] cursor-pointer px-8 py-2 rounded-full text-lg'>See More</Link>
                </div>
            </div>
        </div>
        
     )
}

export default AboutIntro;