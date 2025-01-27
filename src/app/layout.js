import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import WhyChooseUs from '@/components/WhyChooseUs';
import TechStack from '@/components/TechStack';
import Projects from '@/components/OurProjects';
import BuildWithUs from '@/components/BuildWithUs';
import ContactUs from '@/components/ContactUs';
import './globals.css';

export const metadata = {
  title: 'Havana Technologies',
  description: 'Streamlining your digital future',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <Hero />
        <WhatWeDo />
        <WhyChooseUs className='section-wrapper' />
        <TechStack />
        <Projects />
        <BuildWithUs />
        <ContactUs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
