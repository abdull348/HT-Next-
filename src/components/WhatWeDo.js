import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { PiCheckerboardFill } from 'react-icons/pi';
import { FaWordpressSimple, FaNodeJs } from 'react-icons/fa';
import { FcAdvertising } from 'react-icons/fc';
import Link from 'next/link';

const WhatWeDo = () => {
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
        <h1 className='mb-5 fw-bold fs-2'>
          From Idea to Reality, we bring Full-Stack Expertise
        </h1>
      </div>
      <div className='row'>
        {featureCards.map((card, index) => (
          <div className='col-md-6 mb-4' key={index}>
            <div className='d-flex p-4 border rounded shadow-sm align-items-start featureCard'>
              <div
                className='me-3 d-flex justify-content-center align-items-center'
                style={{
                  color: '#26ace3',
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
                    color: '#2c3e50',
                    fontSize: '20px',
                    fontWeight: '800',
                  }}
                >
                  {card.title}
                </h4>
                <p
                  className='mb-2'
                  style={{ color: '#2c3e50', fontSize: '16px' }}
                >
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
