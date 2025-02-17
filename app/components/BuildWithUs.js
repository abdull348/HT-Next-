import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import build from '../../public/built.webp';

function BuildWithUs() {
  return (
    <div className='container py-5 section-wrapper'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0 p-4'>
          <h1
            className='mb-3 fs-2'
            style={{ fontWeight: '600' }}
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            Start building
            <br /> great software with us
          </h1>
          <p
            className='text-primary mb-4'
            style={{ fontSize: '18px' }}
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            Transform Your Ideas into Innovative Software Solutions with{' '}
            <span className='text-secondary fw-bold'>Havana Technologies</span>.
            In today’s rapidly evolving digital landscape, having robust,
            scalable, and high-performance software is essential for businesses
            looking to stay ahead of the competition.
          </p>
          <Link
            className='projectButton'
            href='#contact'
            data-aos='fade-down'
            data-aos-duration='2000'
            style={{ background: '#26ace3', color: '#fff' }}
          >
            Contact Us
          </Link>
        </div>
        <div
          className='col-12 col-md-6 text-center p-4 p-lg-5'
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          <Image
            src={build}
            alt='Code Editor'
            className='img-fluid shadow'
            style={{ borderRadius: '15px', position: 'relative', zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default BuildWithUs;
