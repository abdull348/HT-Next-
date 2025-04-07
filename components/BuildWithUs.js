import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import build from '../public/built.webp';

function BuildWithUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);

        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0.5,
            y: 80,
            scale: 0.85,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              end: 'top 30%',
              scrub: 1.5,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className='container py-5 section-wrapper'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0 p-4'>
          <h1
            className='mb-3 fs-2'
            style={{ fontWeight: '600', color: '#2f1c5b' }}
          >
            Start building
            <br />
            <span
              className='build_highlighted_text'
              style={{
                zIndex: 1,
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
          <p className='text-primary mb-3' style={{ fontSize: '16px' }}>
            Transform Your Ideas into Innovative Software Solutions with{' '}
            <span className='text-secondary fw-bold'>HT</span>. In today’s
            digital world, having scalable, high-performance software is
            essential.
          </p>
          <Link className='quoteButton' href='#contact'>
            Get in Touch
          </Link>
        </div>

        <div className='col-12 col-md-6 text-center p-4 p-lg-5'>
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
