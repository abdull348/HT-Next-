'use client';
import React from 'react';
import Image from 'next/image';
import image1 from '../../public/choose1.webp';
import image2 from '../../public/choose2.webp';
import image3 from '../../public/choose3.webp';

const WhyChooseUs = () => {
  const statistics = [
    { number: '70+', label: 'Active Clients', shortLabel: 'Clients' },
    { number: '250+', label: 'Projects Done', shortLabel: 'Projects' },
    { number: '25+', label: 'Team Advisors', shortLabel: 'Advisors' },
  ];

  return (
    <div className='container py-5 section-wrapper' id='about'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-sm-12 mb-4 mb-lg-0 p-3 p-lg-5 mx-auto'>
          <div
            className='d-flex flex-column align-items-center'
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className='w-100 d-flex justify-content-end mb-3'>
              <Image
                src={image1}
                alt='Image 1'
                className='img-fluid'
                style={{ borderRadius: '15px', width: '48%' }}
              />
            </div>

            <div className='d-flex justify-content-between w-100'>
              <Image
                src={image2}
                alt='Image 2'
                className='img-fluid'
                style={{ borderRadius: '15px', width: '48%' }}
              />
              <Image
                src={image3}
                alt='Image 3'
                className='img-fluid'
                style={{ borderRadius: '15px', width: '48%' }}
              />
            </div>
          </div>
        </div>

        <div className='col-lg-6 p-3 p-lg-5'>
          <h6
            className='text-uppercase text-secondary fw-bold mb-3'
            data-aos='fade-left'
            data-aos-duration='2000'
          >
            Why Choose Us
          </h6>
          <h1 className='mb-3 fs-2' style={{ fontWeight: '600' }}>
            Grow Your Business with <br /> Havana Tech
          </h1>
          <p className='text-primary mb-4' style={{ fontSize: '18px' }}>
            Our mission is to empower businesses with custom software and IT
            support that boosts efficiency, fuels growth, and fosters
            innovation. We are committed to building strong, lasting
            relationships with our clients by consistently delivering value.
          </p>
          <div
            className='d-flex justify-content-between'
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            {statistics.map((stat, index) => (
              <div key={index}>
                <h2 className='text-secondary fw-bold mb-1'>{stat.number}</h2>
                {/* <p className='text-primary fw-bold mb-0'>{stat.label}</p> */}
                <p className='text-primary fw-bold mb-0 d-none d-md-block'>
                  {stat.label}
                </p>
                <p className='text-primary fw-bold mb-0 d-md-none'>
                  {stat.shortLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
