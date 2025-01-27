import React from 'react';
import Image from 'next/image';
import img8 from '../../public/built.png';

function BuildWithUs() {
  return (
    <div className='container py-5 section-wrapper'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
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
        <div className='col-12 col-md-6 text-center'>
          <Image
            src={img8}
            alt='Code Editor'
            className='img-fluid shadow rounded hover-scale'
          />
        </div>
      </div>
    </div>
  );
}

export default BuildWithUs;
