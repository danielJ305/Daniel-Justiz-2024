"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../work.css";
import { CiLogout } from "react-icons/ci";
import { projects } from "./projects";
import ProjectCaseStudy from "./ProjectCaseStudy";

const slides = projects;
const TOTAL = slides.length;

export function WorkDeveloper() {
  const swiperRef = useRef(null);
  const [realIndex, setRealIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const openCaseStudy = (project) => {
    setSelected(project);
    if (typeof window !== "undefined") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Case-study view replaces the carousel inside this same section
  if (selected) {
    return (
      <ProjectCaseStudy project={selected} onBack={() => setSelected(null)} />
    );
  }

  return (
    <div className='website-swiper'>
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex % TOTAL)}
        slidesPerView={1.1}
        spaceBetween={16}
        slidesPerGroup={1}
        loop={true}
        centeredSlides={false}
        breakpoints={{
          768: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 2.8, spaceBetween: 30 },
          1440: { slidesPerView: 2.7, spaceBetween: 40 },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => openCaseStudy(slide)}
              className='relative section_col flex flex-col justify-center items-center
                overflow-hidden rounded-2xl h-[55vh] min-h-[380px] lg:h-[60vh]
                p-6 lg:p-12 cursor-pointer transition-all duration-300 project-slider'
            >
              <div className='section_col_media absolute inset-0'>
                <Image
                  src={slide.image}
                  className='section_col_image h-full w-full object-cover
                    transition duration-300 brightness-[0.3] hover:brightness-75 active:brightness-100'
                  alt={slide.title}
                  width={500}
                  height={500}
                  quality={100}
                  unoptimized={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className='relative z-10 h-72 lg:h-96 flex flex-col justify-between items-center text-center'>
                <div className='section_col_caption order-1'>
                  <span className='text-sm md:text-base project-description'>
                    {slide.caption}
                  </span>
                </div>
                <div className='section_col_title order-2'>
                  <h2 className='text-2xl lg:text-3xl project-description'>
                    {slide.title}
                  </h2>
                </div>
                <div className='section_col_number order-3 flex self-center'>
                  <div
                    className='transition ease-out duration-300 bg-[#000000] hover:bg-[var(--accent)]
                    cursor-pointer p-2 rounded-full size-12 flex justify-center
                    items-center text-lg shadow-md work-btn'
                  >
                    <CiLogout className='size-6' />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nav — mirrors your .website-nav structure */}
      <div className='website-nav flex items-center gap-4 mt-6'>
        <button
          className='prev-slide circles'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ‹
        </button>

        <span className='fraction'>
          {realIndex + 1} / {TOTAL}
        </span>

        <button
          className='next-slide circles'
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>

        {/* Progress bar segments */}
        <div className='website-nav-right flex gap-1'>
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span
              key={i}
              className={`block h-1 w-8 transition-all duration-300 ${
                i === realIndex ? "active bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkDeveloper;
