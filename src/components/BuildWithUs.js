"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import build from '../../public/built.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BuildWithUs() {
  useEffect(() => { Aos.init(); }, []);
  return (
    <div className='container py-5 section-wrapper'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0' data-aos='fade-right' data-aos-duration="2500">
          <h1 className='fw-bold mb-3 text-primary'>
            Start building
            <br /> great software with us
          </h1>
          <p className='text-primary fs-5'>
            Transform Your Ideas into Innovative Software Solutions with{' '}
            <span className='text-secondary fw-semibold'>
              Havana Technologies
            </span>
            . In today’s rapidly evolving digital landscape, having robust,
            scalable, and high-performance software is essential for businesses
            looking to stay ahead of the competition.
          </p>
        </div>
        <div className='col-12 col-md-6 text-center' data-aos='fade-left' data-aos-duration="2500">
          <Image
            src={build}
            alt='Code Editor'
            className='img-fluid shadow rounded hover-scale'
          />
        </div>
      </div>
    </div>
  );
}

export default BuildWithUs;
