import React from 'react';
import Image from 'next/image';
import build from '../../public/built.webp';

function BuildWithUs() {
  return (
    <div className='container py-5 section-wrapper'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0 p-4 fade-in-up'>
          <h1 className='mb-3 fs-2' style={{ fontWeight: '600' }}>
            Start building
            <br /> great software with us
          </h1>
          <p className='text-primary mb-4' style={{ fontSize: '18px' }}>
            Transform Your Ideas into Innovative Software Solutions with{' '}
            <span className='text-secondary fw-bold'>Havana Technologies</span>.
            In today’s rapidly evolving digital landscape, having robust,
            scalable, and high-performance software is essential for businesses
            looking to stay ahead of the competition.
          </p>
          <a
            className='projectButton'
            href='#contact'
            style={{ background: '#26ace3', color: '#fff' }}
          >
            Contact Us
          </a>
        </div>
        <div className='col-12 col-md-6 text-center p-5 fade-in-up'>
          <Image
            src={build}
            alt='Code Editor'
            className='img-fluid shadow hover-scale'
            style={{ borderRadius: '15px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default BuildWithUs;
