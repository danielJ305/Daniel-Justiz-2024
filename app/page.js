import React from 'react';
import AboutIntro from './components/about';
import WorkShowcase from './components/showcase/WorkShowcase';
import Experience from './components/experience';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='h-full'>
      <section id="about-me" className='flex justify-center items-center'>
        <AboutIntro />
      </section>
      <section id="work" className='flex justify-center items-center'>
        <WorkShowcase />
      </section>
      <section id="experience-proof" className='bg-gray-1000 flex justify-center items-center'>
        <Experience />
      </section>
      <section id="contact" className='bg-gray-900 flex justify-center items-center'>
        <Footer />
      </section>
    </div>
  );
}
