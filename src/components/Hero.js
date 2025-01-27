import React from 'react';
import Image from 'next/image';
import HeroImage from '../../public/adventure.svg';
import { BsArrowRight } from 'react-icons/bs';

function Header() {
  return (
    <section className='container py-5'>
      <div className='row flex-lg-row align-items-center'>
        <div className='col-lg-7 col-md-7 text-md-start text-center'>
          <h1 className='display-4 fw-bold text-primary mb-3'>
            Driving success
            <br /> with Digital Precision
          </h1>
          <p className='mb-4' style={{ fontSize: '18px', color: '#2c3e50' }}>
            We craft web solutions and drive growth with cutting-edge digital
            marketing. Elevate your brand with tailored web development and SEO
            services.
          </p>
          <div className='d-flex flex-md-row flex-column flex-md-nowrap justify-content-md-start justify-content-center gap-2'>
            <a
              href='#contact'
              className='btn px-3 py-1 quoteButton'
              rel='noopener noreferrer'
            >
              Get to Quote
            </a>
            <a
              href='https://calendly.com/arsalar286'
              className='btn meetingButton border-0 px-3 py-1 d-flex align-items-center justify-content-center'
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
