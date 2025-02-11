'use client';
import { useEffect } from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Projects from './components/OurProjects';
import BuildWithUs from './components/BuildWithUs';
import ContactUs from './components/ContactUs';
import './globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from './components/ParticalsBackground';

export default function Index() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <ParticlesBackground />
      <Hero />
      <WhatWeDo />
      <WhyChooseUs className='section-wrapper' />
      <TechStack className='section-wrapper' />
      <BuildWithUs />
      <Projects className='section-wrapper' />
      <ContactUs />
    </>
  );
}
