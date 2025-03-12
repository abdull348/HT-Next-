import React from 'react';
import Image from 'next/image';
import HeroImage from '../../public/adventure.webp';
import { BsArrowRight } from 'react-icons/bs';

function Header() {
  return (
    <section className='container py-5'>
      <div className='row flex-lg-row align-items-center'>
        <div className='col-lg-7 col-md-7 text-md-start text-center'>
          <h1
            className='mb-3 fs-1'
            style={{
              fontWeight: '600',
              letterSpacing: '0.5px',
              color: '#2f1c5b',
            }}
          >
            Driving success
            <br /> with{' '}
            <span className='Home_highlighted_text'>
              <span style={{ color: 'rgb(250, 169, 22)' }}>Digital</span>{' '}
              Precision
            </span>
          </h1>
          <p className='mb-4' style={{ fontSize: '16px', color: '#667085' }}>
            We craft web solutions and drive growth with cutting-edge digital
            marketing. Elevate your brand with tailored web development and SEO
            services.
          </p>
          <div
            className='d-flex flex-md-row align-items-md-start align-items-center gap-2 btn-center'
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            <a
              href='#contact'
              className='btn quoteButton px-3 py-1'
              rel='noopener noreferrer'
            >
              Get to Quote
            </a>
            <a
              href='https://calendly.com/arsalar286'
              className='btn meetingButton border-0 px-3 d-flex align-items-center'
              target='_blank'
              rel='noopener noreferrer'
            >
              Book a Meeting <BsArrowRight className='ms-2 arrowIcon' />
            </a>
          </div>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-12 mt-4 mt-md-0 text-center'>
          <div className='text-center'>
            <Image
              src={HeroImage}
              loading='lazy'
              alt='Startup Illustration'
              className='img-fluid custom-img-size'
              style={{ position: 'relative', zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
