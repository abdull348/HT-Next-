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
            style={{ fontWeight: '600', color: '#2f1c5b' }}
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            Start building
            <br />{' '}
            <span
              className='build_highlighted_text'
              style={{
                position: 'relative',
                zIndex: 1,
                position: 'relative',
                display: 'inline-block',
                padding: '2px 5px',
                backgroundColor: '#6874e8',
                color: '#fff',
                borderRadius: '3px',
                transform: 'skew(-5deg)',
              }}
            >
              Great Software
            </span>{' '}
            with us
          </h1>
          <p
            className='text-primary mb-4'
            style={{ fontSize: '16px' }}
            data-aos='fade-up'
            data-aos-duration='2500'
          >
            Transform Your Ideas into Innovative Software Solutions with{' '}
            <span className='text-secondary fw-bold'>HT</span>. In today’s
            rapidly evolving digital landscape, having robust, scalable, and
            high-performance software is essential for businesses looking to
            stay ahead of the competition.
          </p>
          <Link
            className='quoteButton'
            href='#contact'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            Get in Touch
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
