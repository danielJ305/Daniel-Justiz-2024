'use client'

import React from 'react';
import Link from 'next/link'
import { motion } from 'motion/react'
import "../hero.css"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function AboutIntro() {
  return (
    <div className='flex justify-center w-full mt-32 mb-12 lg:mb-4 px-4'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center text-center max-w-3xl w-full p-6 lg:p-14  rounded-md'
      >
        <motion.div variants={item}>
          <div className='eyebrow'>
            <span className='dot'></span>
            <a href='/#work' rel='noopener noreferrer'>
              Shopify &amp; WordPress Expert
            </a>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className='text-[2.8rem] md:text-6xl lg:text-[4.2rem] mt-8 leading-tight font-bold'
        >
          Websites That Convert. <br /> Brands That Dominate.
        </motion.h1>

        <motion.a
          variants={item}
          className='eyebrow-success mt-4'
          href='https://www.upwork.com/freelancers/~01085812e448b1f859?mp_source=share'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='dot-green'></span>
          100% Job Success
        </motion.a>

        <motion.p variants={item} className='text-xl mt-6 max-w-xl'>
          High-performance Shopify storefronts and custom WordPress builds —
          engineered for growth, not just looks.
        </motion.p>

        <motion.div variants={item} className='flex gap-4 mt-10 flex-wrap justify-center'>
          <Link href='/my-process'>
            <button className='ease-out duration-300 bg-[#1E3E62] hover:bg-[var(--accent)] hover:text-black cursor-pointer px-8 py-2.5 rounded-xl text-lg'>
              My Process
            </button>
          </Link>
          <Link href='#work'>
            <button className='ease-out duration-300 border border-white/30 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer px-8 py-2.5 rounded-xl text-lg bg-transparent'>
              View Work
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutIntro;
