import React from 'react';
import AboutIntro from './components/about';
import WorkShowcase from './components/showcase/WorkShowcase';
import Experience from './components/experience';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='h-full overflow-hidden'>
      <section id='about-me' className='flex justify-center items-center'>
        <AboutIntro />
      </section>
      <section id='work' className='flex justify-center items-center'>
        <WorkShowcase />
      </section>
      <section
        id='experience-proof'
        className='flex justify-center items-center'
      >
        <Experience />
      </section>
      <section
        id='contact'
        className='flex justify-center items-center relative'
      >
        <Footer />
        <div className='shape1'></div>
        <div className='shape2'></div>
        <div className='shape3'></div>
      </section>
    </div>
  );
}
