import Hero from './../components/Hero';
import WhatWeDo from './../components/WhatWeDo';
import WhyChooseUs from './../components/WhyChooseUs';
import TechStack from './../components/TechStack';
import Projects from './../components/OurProjects';
import BuildWithUs from './../components/BuildWithUs';
import ContactUs from './../components/ContactUs';
import ParticlesBackground from './../components/ParticalsBackground';
import './../style/globals.css';

export default function Index() {
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
