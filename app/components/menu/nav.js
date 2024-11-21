"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./nav.css";
import { Sling as Hamburger } from 'hamburger-react';

import {
  RiArrowDropLeftFill,
  RiBehanceFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 487.81 487.81"
      className="w-24 h-auto logo-nav-menu"
    >
      <defs>
        <style>
          {`.cls-1 {
        fill: none;
      }
      .cls-2 {
        fill: gold;
      }
      .cls-3 {
        fill: #fff;
      }
      .cls-4 {
        fill: #e5b900;
      }`}
        </style>
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        <path
          className="cls-1"
          d="M298.86,237.92c0,1.12.05,2.25.05,3.39,0,2.89-.1,5.74-.27,8.53a250.49,250.49,0,0,1,24.9,6.83V231.15A251.54,251.54,0,0,1,298.86,237.92Z"
        />
        <path
          className="cls-1"
          d="M237.92,243.83A253.33,253.33,0,0,1,166.78,232v23.89A253.62,253.62,0,0,1,237.91,244S237.92,243.88,237.92,243.83Z"
        />
        <path className="cls-2" d="M181.83,284.81h-5.38v58.06h.21v-58Z" />
        <path className="cls-3" d="M186,284.81h1.34c-1.69,0-3.53,0-5.48,0Z" />
        <path
          className="cls-2"
          d="M243.91,243.91q-3,0-6-.08s0,.1,0,.15C239.91,243.94,241.9,243.91,243.91,243.91Z"
        />
        <path
          className="cls-4"
          d="M298.86,237.92a254.47,254.47,0,0,1-55,6,255,255,0,0,1,54.73,5.93c.17-2.79.27-5.64.27-8.53C298.91,240.17,298.89,239,298.86,237.92Z"
        />
        <path
          className="cls-2"
          d="M237.91,244q-1.54,40.28-50.6,40.82h-5.48l-5.17.06v58h36q33.75-4.74,57-27.44a94.15,94.15,0,0,0,21.33-31.33,106.4,106.4,0,0,0,7.7-34.26,255,255,0,0,0-54.73-5.93C241.9,243.91,239.91,243.94,237.91,244Z"
        />
        <path
          className="cls-4"
          d="M166.78,232a252.44,252.44,0,0,1-59.48-27.91v79.71a253.23,253.23,0,0,1,59.48-27.91Z"
        />
        <path
          className="cls-2"
          d="M166.78,342.87v-87a253.23,253.23,0,0,0-59.48,27.91v59.11Z"
        />
        <path
          className="cls-2"
          d="M166.78,200.44h20.07q51.12,0,51.12,40.87c0,.85,0,1.69-.05,2.52q3,.07,6,.08a254.47,254.47,0,0,0,55-6q-1.19-45.06-34.23-71.76Q235.77,143,184.79,143H107.3v61A252.44,252.44,0,0,0,166.78,232Z"
        />
        <path
          className="cls-4"
          d="M323.54,256.67a252.44,252.44,0,0,1,58.72,28.24,96.94,96.94,0,0,0,.75-12.13V202.41a252.79,252.79,0,0,1-59.47,28.74Z"
        />
        <path
          className="cls-2"
          d="M323.54,265q0,13.65-6.11,17.44a10.62,10.62,0,0,1-5.61,1.46l-8.3.07a102.29,102.29,0,0,1-71.72,58.88H325a56.58,56.58,0,0,0,21.57-5.1,57.51,57.51,0,0,0,19.12-14.67q13.71-15.75,16.53-38.19a252.44,252.44,0,0,0-58.72-28.24Z"
        />
        <path
          className="cls-2"
          d="M323.54,143v88.13A252.79,252.79,0,0,0,383,202.41V143Z"
        />
        <path
          className="cls-1"
          d="M243.91,244A253.21,253.21,0,0,0,53.22,330.3v21.75A3.38,3.38,0,0,0,54.91,355L242.22,463.12a3.4,3.4,0,0,0,3.38,0L432.91,355a3.4,3.4,0,0,0,1.69-2.93V330.3A253.23,253.23,0,0,0,243.91,244Z"
        />
        <path
          className="cls-1"
          d="M243.91,243.91A253.21,253.21,0,0,1,53.22,157.59V330.3a253.79,253.79,0,0,1,381.38,0V157.59A253.23,253.23,0,0,1,243.91,243.91Z"
        />
        <path
          className="cls-4"
          d="M434.6,157.59V330.3a254.64,254.64,0,0,1,19.69,25.45,22.71,22.71,0,0,0,.31-3.7V135.76a23,23,0,0,0-.3-3.63A254.86,254.86,0,0,1,434.6,157.59Z"
        />
        <path
          className="cls-4"
          d="M53.22,157.59a252.48,252.48,0,0,1-19.71-25.47,23.21,23.21,0,0,0-.29,3.64V352.05a23.88,23.88,0,0,0,.3,3.7,254.74,254.74,0,0,1,19.7-25.45Z"
        />
        <path
          className="cls-2"
          d="M53.22,135.76a3.39,3.39,0,0,1,1.69-2.93L242.22,24.69a3.4,3.4,0,0,1,3.38,0L432.91,132.83a3.41,3.41,0,0,1,1.69,2.93v21.83a254.86,254.86,0,0,0,19.7-25.46,23.5,23.5,0,0,0-11.39-16.62L255.6,7.37a23.46,23.46,0,0,0-23.38,0L44.91,115.51a23.48,23.48,0,0,0-11.4,16.61,252.48,252.48,0,0,0,19.71,25.47Z"
        />
        |
        <path
          className="cls-2"
          d="M434.6,352.05a3.4,3.4,0,0,1-1.69,2.93L245.6,463.12a3.4,3.4,0,0,1-3.38,0L54.91,355a3.38,3.38,0,0,1-1.69-2.93V330.3a254.74,254.74,0,0,0-19.7,25.45A23.47,23.47,0,0,0,44.91,372.3L232.22,480.44a23.4,23.4,0,0,0,23.38,0L442.91,372.3a23.45,23.45,0,0,0,11.38-16.55A254.64,254.64,0,0,0,434.6,330.3Z"
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

      let body = document.querySelector('body')

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
      <div className="menu-logo">
            <Link href={"http://localhost:3000/"}>
              <LogoIcon />
            </Link>
          </div>
      <div className="menu-container">
        <div className="menu-bar w-screen sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="menu-open hover:text-amber-300" >
            <Hamburger 
              toggled={isMenuOpen}
              toggle={setIsMenuOpen} 
              onClick={toggleMenu}
              size={48}
              rounded
              label="Show menu"
              className="hamburger-icon"
              duration={0.6} />
          </div>
          
        </div>

        <div className="menu-overlay w-screen sm:w-1/2 md:w-1/2 lg:w-1/4">
          <div className="menu-overlay-bar absolute">
            {/* <div className="menu-close invisible" onClick={toggleMenu}>
              <p>Close</p>
            </div>
            <div className="menu-close-icon absolute" onClick={toggleMenu}>
              <p>&#x2715;</p>
            </div> */}
            <div className="sidebar flex flex-col justify-between min-h-[80vh] mt-36">
              <div className="sidebar--top-container">
                <div className="top-container__social-list flex flex-col justify-start">
                  <Link
                    href="https://www.linkedin.com/in/daniel-justiz-a76a3218a/"
                    target="_blank"
                  >
                    <div className="pb-4 menu-link-item-holder">
                    <RiLinkedinBoxLine className="size-8 hover:text-amber-300" />
                    </div>
                  </Link>
                  <Link href="https://github.com/danielJ305" target="_blank">
                    <div className="pb-4 menu-link-item-holder">
                    <RiGithubFill className="size-8 hover:text-amber-300"/>
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/danieljustfish/"
                    target="_blank"
                  >
                    <div className="pb-4 menu-link-item-holder">
                    <RiInstagramLine className="size-8 hover:text-amber-300"/>
                    </div>
                  </Link>
                  <Link
                    href="https://www.behance.net/danieljustizMedia/"
                    target="_blank"
                  >
                    <div className="pb-4 menu-link-item-holder">
                    <RiBehanceFill className="size-8 hover:text-amber-300"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="sidebar--mid-container">
                <div className="sidebar--mid-container">
                  <div className="mid-container__navigation-list flex flex-col">
                    <Link scroll={true} href="#about-me" className="menu-link-item-holder py-4 hover:text-amber-300">
                      About Me -
                    </Link>
                    <Link scroll={true} href="#work" className="menu-link-item-holder py-4 hover:text-amber-300">
                      My Work -
                    </Link>
                    <Link scroll={true} href="#contact" className="menu-link-item-holder py-4 hover:text-amber-300">
                      Contact Me -
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sidebar--bottom-container flex flex-col">
                <div className="menu-link-item-holder">
                  <a target="_blank" className="bottom-container__resume hover:text-amber-300 cursor-pointer">
                    Resume
                  </a>
                </div>
                <div className="menu-link-item-holder">
                <Link className="hover:text-amber-300" href="mailto:danieljustiz9508@gmail.com">
                  danieljustiz9508@gmail.com
                </Link>
                </div>
                <div className="menu-link-item-holder">
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
