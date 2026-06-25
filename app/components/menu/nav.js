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

// Pixel-art flag/pennant that sits above the wordmark. Coordinates map to a
// 13x10 grid; each pair is a filled 1x1 cell.
const FLAG_PIXELS = [
  [7, 0], [8, 0],
  [6, 1], [8, 1], [11, 1], [12, 1],
  [5, 2], [8, 2], [9, 2], [10, 2], [12, 2],
  [4, 3], [5, 3], [8, 3], [9, 3], [11, 3], [12, 3],
  [4, 4], [9, 4], [10, 4],
  [3, 5], [9, 5], [10, 5],
  [2, 6], [10, 6], [11, 6],
  [1, 7], [10, 7], [11, 7], [12, 7],
  [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8],
  [0, 9], [1, 9], [2, 9], [3, 9],
];

function LogoIcon() {
  return (
    <span className='logo-wordmark'>
      <svg viewBox='0 0 13 10' className='logo-flag' aria-hidden='true'>
        <g fill='#ECBE48'>
          {FLAG_PIXELS.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width='1' height='1' />
          ))}
        </g>
      </svg>
      Daniel Justiz
    </span>
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
        <div className='menu-bar w-screen sm:w-1/2 md:w-8 lg:w-8'>
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
                    rel='noopener noreferrer'
                  >
                    <div className='pb-4 menu-link-item-holder'>
                      <RiLinkedinBoxLine className='size-8 text-white hover:text-amber-300' />
                    </div>
                  </Link>
                  <Link
                    href='https://github.com/danielJ305'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
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
                    rel='noopener noreferrer'
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
                      href='/#about-me'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      About Me -
                    </Link>
                    <Link
                      scroll={true}
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='/#work'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      My Work -
                    </Link>
                    <Link
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='/my-process'
                      className='menu-link-item-holder py-4 hover:text-amber-300'
                    >
                      My Process -
                    </Link>
                    <Link
                      scroll={true}
                      toggle={setIsMenuOpen}
                      onClick={toggleMenu}
                      href='/#contact'
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
