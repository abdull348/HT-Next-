import React from 'react';
import Image from 'next/image';
import next from '../../public/next.svg';
import github from '../../public/github.svg';
import react from '../../public/react.svg';
import wordpress from '../../public/wordpress.svg';
import bootstrap from '../../public/bootstrap.svg';
import tailwind from '../../public/tailwind.svg';
import photoshop from '../../public/photoshop.svg';
import illustrator from '../../public/illustrator.svg';
import AWS from '../../public/amazon.svg';
import chatgpt from '../../public/chatgpt.svg';
import mongodb from '../../public/mongodb.svg';
import javascript from '../../public/javascript.svg';
import figma from '../../public/figma.svg';
import node from '../../public/node.svg';

function TechStack() {
  const technologiesLeft = [
    { src: next, alt: 'Next.js' },
    { src: react, alt: 'React.js' },
    { src: mongodb, alt: 'MongoDB' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: photoshop, alt: 'Photoshop' },
    { src: chatgpt, alt: 'ChatGPT' },
    { src: tailwind, alt: 'Tailwind CSS' },
  ];

  const technologiesRight = [
    { src: github, alt: 'GitHub' },
    { src: node, alt: 'Node.js' },
    { src: javascript, alt: 'JavaScript' },
    { src: illustrator, alt: 'Illustrator' },
    { src: figma, alt: 'Figma' },
    { src: wordpress, alt: 'WordPress' },
    { src: AWS, alt: 'AWS' },
  ];

  return (
    <div className='container section-wrapper tech-stack-container'>
      <div className='row align-items-center'>
        <div
          className='col-lg-4 d-flex flex-wrap justify-content-center gap-4 mb-4 mb-lg-0'
          data-aos='fade-right'
          data-aos-duration='2000'
        >
          {technologiesLeft.map((tech, index) => (
            <div
              key={index}
              className='d-flex justify-content-center align-items-center bg-white shadow'
              style={{
                width: '85px',
                height: '85px',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.2s',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={50}
                height={50}
                className='img-fluid'
              />
            </div>
          ))}
        </div>

        <div className='col-lg-4 text-center'>
          <h1
            className='mb-3 fs-2'
            style={{ color: '#2f1c5b', fontWeight: '600' }}
          >
            Tools & Technologies
          </h1>
          <p style={{ fontSize: '16px', color: '#667085' }}>
            Discover the advanced tools and technologies we use to deliver
            efficient, scalable, and innovative solutions for your business
            needs.
          </p>
        </div>

        <div
          className='col-lg-4 d-flex flex-wrap justify-content-center gap-4'
          data-aos='fade-left'
          data-aos-duration='2000'
        >
          {technologiesRight.map((tech, index) => (
            <div
              key={index}
              className='d-flex justify-content-center align-items-center bg-white shadow'
              style={{
                width: '85px',
                height: '85px',
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.2s',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={50}
                height={50}
                className='img-fluid'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
