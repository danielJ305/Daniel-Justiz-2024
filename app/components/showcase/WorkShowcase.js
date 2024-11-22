"use client";

import React, { useState, useRef } from "react";
import WorkDeveloper from "./WorkDeveloper";
import WorkGraphic from "./WorkGraphic";
import "../../work.css";

import { FaRegHandPointLeft } from "react-icons/fa";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

export function WorkShowcase() {
  const [active, setActive] = useState(true);
  const togglerContainerRef = useRef();
  const { contextSafe } = useGSAP({ scope: togglerContainerRef });
  const tl = useRef();

  const workToggler = contextSafe(() => {
    setActive((active) => !active);
    doFlip();
    
         tl.current = gsap.to(".hand-point", {
           duration: 0.3,
           scale: 3,
           opacity: 0,
           onComplete: () => {
            document.querySelector('.hand-point').style.display = 'hidden';
            document.querySelector(".hand-point").style.zIndex = "-1";

           },
         });
  });

  function doFlip() {
    const state = Flip.getState(".circles");

    swap(document.querySelectorAll(".circles"));

    Flip.from(state, { duration: 0.3, ease: "power1.inOut" });
  }

  function swap(circles) {
    const [a, b] = circles;
    a.parentNode.children[0] === a
      ? a.parentNode.appendChild(a)
      : a.parentNode.appendChild(b);
  }

    useGSAP(
      () => {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".hand-point",
              start: "center center",
              delay: 4,
            },
          })
          .to(".hand-point", {
            duration: 0.8,
            x: -10,
            scale: 1.2,
            ease: "elastic",
            onComplete: () => {
              tl.current.reverse(); // Reverse the animation upon completion
            },
          });
      },
      { scope: togglerContainerRef }
    );



//   useEffect(() => {

//   });

  return (
    <div
      ref={togglerContainerRef}
      className='container w-full h-auto m-4 md:m-8 lg:m-12 pt-32 md:pt-[4rem]  lg:pt-40 flex flex-col z-10'
    >
      <div className='flex mb-10 items-center'>
        <div
          onClick={workToggler}
          className='work-toggler flex w-28 md:w-28 lg:w-28 h-6 justify-between bg-[#222]/75 rounded-full'
        >
          <div
            id='circle-tgl-1'
            className='circles bg-[#FF6500] w-12 h-6 rounded-full cursor-pointer'
          ></div>
          <div
            id='circle-tgl-2'
            className='circles bg-[#FF6500]/50 w-12 h-6 rounded-full cursor-pointer'
          ></div>
        </div>
        <div className='flex justify-between grow'>
          <p className='text-2xl lg:text-3xl ml-6 hand-point self-center'>
            <FaRegHandPointLeft />
          </p>
          <p className='text-4xl md:text-5xl ml-6 text-right'>
            {active ? "Websites" : "Graphic Design"}
          </p>
        </div>
      </div>
      <div className='h-full'>
        {active ? <WorkDeveloper /> : <WorkGraphic />}
      </div>
    </div>
  );
}

export default WorkShowcase;
