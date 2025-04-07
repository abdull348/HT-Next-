import React, { useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { PiCheckerboardFill } from 'react-icons/pi';
import { FaWordpressSimple, FaNodeJs } from 'react-icons/fa';
import { FcAdvertising } from 'react-icons/fc';
import { gsap } from 'gsap';

const WhatWeDo = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

        const cards = gsap.utils.toArray('.servicesCard');

        cards.forEach((card, index) => {
          const isEven = index % 2 === 0;

          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 65%',
              scrub: 1.5,
              toggleActions: 'play none none reverse',
              onEnter: () => ScrollTriggerModule.ScrollTrigger.refresh(),
            },
            x: isEven ? -200 : 200,
            opacity: 0,
            duration: 3,
            ease: 'power2.out',
            delay: index * 0.3,
          });
        });
      });
    }
  }, []);

  const featureCards = [
    {
      icon: <FaReact size={36} />,
      title: 'Modern Front-End Solutions',
      text: `Build seamless, dynamic interfaces with React to enhance user experiences and engagement.`,
    },
    {
      icon: <SiNextdotjs size={36} />,
      title: 'Next.js Expertise',
      text: `Develop high-performance, SEO-friendly websites with cutting-edge server-side rendering capabilities.`,
    },
    {
      icon: <FaNodeJs size={36} />,
      title: 'Node.js Development',
      text: `Craft high-performance server-side applications using Node.js to ensure seamless functionality.`,
    },
    {
      icon: <FcAdvertising size={36} />,
      title: 'Social Media Marketing',
      text: `Driving brand growth through targeted campaigns, strategic content creation, and social media optimization.`,
    },
    {
      icon: <FaWordpressSimple size={36} />,
      title: 'WordPress Customization',
      text: `Create versatile, user-friendly websites tailored to meet your unique needs with WordPress expertise.`,
    },
    {
      icon: <PiCheckerboardFill size={36} />,
      title: 'Intuitive UI/UX Design',
      text: `Craft visually appealing and user-centric designs that drive interaction and satisfaction.`,
    },
  ];

  return (
    <div className='container py-5 section-wrapper' id='services'>
      <div className='text-center'>
        <h1
          className='mb-5 fs-2'
          style={{ color: '#2f1c5b', fontWeight: '600' }}
        >
          From Idea to Reality, we bring{' '}
          <span style={{ color: '#6874e8' }}>Full-Stack Expertise</span>
        </h1>
      </div>
      <div className='row'>
        {featureCards.map((card, index) => (
          <div className='col-md-6 mb-4 servicesCard' key={index}>
            <div
              className='d-flex p-4 border rounded shadow-sm align-items-start featureCard bg-white'
              style={{ position: 'relative', zIndex: 1 }}
            >
              <div
                className='me-3 d-flex justify-content-center align-items-center'
                style={{
                  color: '#6874e8',
                  width: '60px',
                  height: '60px',
                }}
              >
                {card.icon}
              </div>
              <div>
                <h4
                  className='mb-2'
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  {card.title}
                </h4>
                <p className='mb-1' style={{ fontSize: '16px' }}>
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
