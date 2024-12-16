"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./nav.css";
import { Sling as Hamburger } from 'hamburger-react';

import {
  RiBehanceFill,
  RiGithubFill,
  // RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function LogoIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1000 1000'
      className='w-32 h-auto logo-nav-menu'
    >
      <defs>
        <style>
          {`.cls-1 { fill: #E8E2DB; }
            .cls-2 { fill: #fab95b; }`}
        </style>
      </defs>
      <g id='Layer_1'>
        <path
          className='cls-1'
          d='M541.48,874.31v-19.29c0-.37,4.7-2.91,5.98-4.29,1.35-1.46,4.28-6.82,4.28-8.57V54.72c10.82,3.07,17.66,10.43,18.86,21.82v769.08c-1.22,13.81-15.75,26.83-29.12,28.68Z'
        />
        <path
          className='cls-1'
          d='M457.58,874.31v-19.29c0-.37-4.7-2.91-5.98-4.29-1.35-1.46-4.28-6.82-4.28-8.57V54.72c-10.82,3.07-17.66,10.43-18.86,21.82v769.08c1.22,13.81,15.75,26.83,29.12,28.68Z'
        />
        <path
          className='cls-1'
          d='M498.51,306.09c4.66-.64,8.57,2.32,10.07,6.66v628.46c-3.5,9.32-15.14,8.4-18.05-.83-.47-209.07-.91-418.43.22-627.45.79-3.85,3.93-6.32,7.76-6.85Z'
        />
        <path
          className='cls-2'
          d='M516.24,227.47l-.27-69.65.31-45.2c-.02-13.81-.07-25.69-.1-34.83-.03-8.23-.06-14.18-.04-17.38,0-1.2.02-4.4-2.25-6.43h0c-2.3-2.07-6.9-2.58-10.07-.05-2.68,2.14-2.97,5.36-3,6.33l-.08,173.03c-1.3,12.55-6.8,15.77-15.11,20.63-1.6.94-3.26,1.91-5.02,3.01-.92.58-3.91,2.72-3.91,6.03,0,3.18,2.94,5.6,4.5,6.43,1.21.65,2.58.94,4.06.94,7.12,0,16.6-6.79,21.83-12.98,8.78-10.39,9.51-23.23,9.16-29.9Z'
        />
        <path
          className='cls-1'
          d='M664.66,692.56v-20.15c0-.62,7.7-5.42,7.7-9.43V227.04c11.4,3.09,18.71,11.62,19.71,23.54v411.57c-1.2,15.83-12.7,26.51-27.41,30.4Z'
        />
        <path
          className='cls-1'
          d='M335.34,692.56v-20.15c0-.62-7.7-5.42-7.7-9.43V227.04c-11.4,3.09-18.71,11.62-19.71,23.54v411.57c1.2,15.83,12.7,26.51,27.41,30.4Z'
        />
        <path
          className='cls-1'
          d='M396.06,783.44c-12.55-3.56-26.17-13.45-28.01-27.23-.98-7.35-.16-14.26-.15-21.21.3-190.46-2.12-381.25-.96-571.86.95-12.43,7.72-20.44,19.7-23.54,0,0-.55,370.68.04,505.34.13,30.25-1.15,60.95-.04,90.92.32,8.54-1.91,17.03,4.28,24,.97,1.09,5.13,3.79,5.13,4.29v19.29Z'
        />
        <path
          className='cls-1'
          d='M602.91,783.44c12.55-3.56,26.17-13.45,28.01-27.23.98-7.35.16-14.26.15-21.21-.3-190.46,2.12-381.25.96-571.86-.95-12.43-7.72-20.44-19.7-23.54,0,0,.55,370.68-.04,505.34-.13,30.25,1.15,60.95.04,90.92-.32,8.54,1.91,17.03-4.28,24-.97,1.09-5.13,3.79-5.13,4.29v19.29Z'
        />
      </g>
    </svg>
  );
}


export function Navbar() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 0.6,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-logo", {
          rotationY: 360,
          duration: 1,
          ease: "elastic.out(1.5,0.5)"
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <aside ref={container}>
      <div className='menu-logo'>
        <Link href={"https://danieljustiz.com/"}>
          <LogoIcon />
        </Link>
      </div>
      <div className='menu-container'>
        <div className='menu-bar w-screen sm:w-1/2 md:w-1/2 lg:w-1/4'>
          <div className='menu-open text-white hover:text-amber-300'>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              onClick={toggleMenu}
              size={48}
              rounded
              label='Show menu'
              className='hamburger-icon bg-white'
              duration={0.6}
            />
          </div>
        </div>

        <div className='menu-overlay w-screen sm:w-1/2 md:w-1/2 lg:w-1/4'>
          <div className='menu-overlay-bar absolute'>
            <div className='sidebar flex flex-col justify-between min-h-[80vh] mt-36'>
              <div className='sidebar--top-container'>
                <div className='top-container__social-list flex flex-col justify-start'>
                  <Link
                    href='https://www.linkedin.com/in/daniel-justiz-a76a3218a/'
                    target='_blank'
                  >
                    <div className='pb-4 menu-link-item-holder'>
                      <RiLinkedinBoxLine className='size-8 text-white hover:text-amber-300' />
                    </div>
                  </Link>
                  <Link href='https://github.com/danielJ305' target='_blank'>
                    <div className='pb-4 menu-link-item-holder'>
                      <RiGithubFill className='size-8 text-white hover:text-amber-300' />
                    </div>
                  </Link>
                  {/* <Link
                    href='https://www.instagram.com/danieljustfish/'
                    target='_blank'
                  >
                    <div className='pb-4 menu-link-item-holder'>
                      <RiInstagramLine className='size-8 text-white hover:text-amber-300' />
                    </div>
                  </Link> */}
                  <Link
                    href='https://www.behance.net/danieljustizMedia/'
                    target='_blank'
                  >
                    <div className='pb-4 menu-link-item-holder'>
                      <RiBehanceFill className='size-8 text-white hover:text-amber-300' />
                    </div>
                  </Link>
                </div>
              </div>
              <div className='sidebar--mid-container'>
                <div className='sidebar--mid-container'>
                  <div className='mid-container__navigation-list flex flex-col'>
                    <Link
                      scroll={true}
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='#about-me'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      About Me -
                    </Link>
                    <Link
                      scroll={true}
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='#work'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      My Work -
                    </Link>
                    <Link
                      scroll={true}
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='#contact'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      Contact Me -
                    </Link>
                  </div>
                </div>
              </div>

              <div className='sidebar--bottom-container flex flex-col'>
                {/* <div className="menu-link-item-holder">
                  <a target="_blank" className="bottom-container__resume hover:text-amber-300 cursor-pointer">
                    Resume
                  </a>
                </div> */}
                <div className='menu-link-item-holder'>
                  <Link
                    className='hover:text-amber-300'
                    href='mailto:danieljustiz9508@gmail.com'
                  >
                    danieljustiz9508@gmail.com
                  </Link>
                </div>
                <div className='menu-link-item-holder'>
                  <p>Tampa, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
