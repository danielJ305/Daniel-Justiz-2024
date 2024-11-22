"use client";

import React from "react";
import Image from "next/image";
import "../../work.css";
import { CiLogout } from "react-icons/ci";

export function WorkDeveloper() {
  return (
    <div className='section_container h-full flex flex-col lg:flex-row '>
      <div
        className='relative section_col basis-1/3 flex mb-12 lg:mb-auto lg:flex-col
             justify-between lg:justify-center overflow-hidden lg:h-[60vh] lg:items-center lg:p-12 cursor-pointer transition-all duration-300 hover:basis-1/2 grow-0 md:grow'
      >
        <div className='section_col_media relative lg:absolute'>
          <Image
            src='/webdev/equitus-ai.png'
            className='section_col_image h-full lg:h-[60vh] md:w-full object-cover transition duration-300 lg:brightness-[0.25] lg:hover:brightness-75 brightness-75 active:brightness-100'
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='lg:h-96 flex flex-col justify-between lg:items-center items-end text-right lg:text-center'>
          <div className='section_col_caption order-2 lg:order-1'>
            <span className='text-sm md:text-base'>Built on Wordpress</span>
          </div>
          <div className='section_col_title order-1 lg:order-2'>
            <h2 className='text-2xl lg:text-3xl'>Equitus AI</h2>
          </div>
          <div className='section_col_number order-3 flex lg:self-center'>
            <div className='transition ease-out duration-300 bg-[#000000] hover:bg-[#FF6500] cursor-pointer p-2 rounded-full size-12 flex justify-center size-12 items-center text-lg shadow-md'>
              <CiLogout className='size-6' />
            </div>
          </div>
        </div>
      </div>

      <div
        className='relative section_col basis-1/3 flex mb-12 lg:mb-auto lg:flex-col
             justify-between lg:justify-center overflow-hidden lg:h-[60vh] lg:items-center lg:p-12 cursor-pointer transition-all duration-300 hover:basis-1/2 grow-0 md:grow'
      >
        <div className='section_col_media relative lg:absolute'>
          <Image
            src='/webdev/go-freight-hub.png'
            className='section_col_image h-full lg:h-[60vh] md:w-full object-cover transition duration-300 lg:brightness-[0.25] lg:hover:brightness-75 brightness-75 active:brightness-100'
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='lg:h-96 flex flex-col justify-between lg:items-center items-end text-right lg:text-center'>
          <div className='section_col_caption order-2 lg:order-1'>
            <span className='text-sm md:text-base'>Built on Wordpress</span>
          </div>
          <div className='section_col_title order-1 lg:order-2'>
            <h2 className='text-2xl lg:text-3xl'>GoFreight Hub</h2>
          </div>
          <div className='section_col_number order-3 flex lg:self-center'>
            <div className='transition ease-out duration-300 bg-[#000000] hover:bg-[#FF6500] cursor-pointer p-2 rounded-full size-12 flex justify-center size-12 items-center text-lg shadow-md'>
              <CiLogout className='size-6' />
            </div>
          </div>
        </div>
      </div>

      <div
        className='relative section_col basis-1/3 flex mb-12 lg:mb-auto lg:flex-col
             justify-between lg:justify-center overflow-hidden lg:h-[60vh] lg:items-center lg:p-12 cursor-pointer transition-all duration-300 hover:basis-1/2 grow-0 md:grow'
      >
        <div className='section_col_media relative lg:absolute'>
          <Image
            src='/webdev/fiu-mockup.png'
            className='section_col_image h-full lg:h-[60vh] md:w-full object-cover transition duration-300 lg:brightness-[0.25] lg:hover:brightness-75 brightness-75 active:brightness-100'
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='lg:h-96 flex flex-col justify-between lg:items-center items-end text-right lg:text-center'>
          <div className='section_col_caption order-2 lg:order-1'>
            <span className='text-sm md:text-base'>Static Single Page</span>
          </div>
          <div className='section_col_title order-1 lg:order-2'>
            <h2 className='text-2xl lg:text-3xl'>FIU Website Mockup</h2>
          </div>
          <div className='section_col_number order-3 flex lg:self-center'>
            <div className='transition ease-out duration-300 bg-[#000000] hover:bg-[#FF6500] cursor-pointer p-2 rounded-full size-12 flex justify-center size-12 items-center text-lg shadow-md'>
              <CiLogout className='size-6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDeveloper;
