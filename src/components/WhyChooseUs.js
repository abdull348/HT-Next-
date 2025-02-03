'use client';
import React, { useState } from 'react';
import { BsHourglassSplit } from 'react-icons/bs';
import { MdWeb } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <MdWeb size={36} color='#4294ff' />,
      title: 'Innovative Web Solutions',
      text: 'Delivering creative, user-friendly websites that drive real results.',
      color: '#eaf3ff',
      iconColor: '#cce0fc',
    },
    {
      icon: <AiOutlineLineChart size={36} color='#42d3ff' />,
      title: 'Proven SEO Expertise',
      text: 'Optimizing websites for better visibility and higher search rankings.',
      color: '#e5f9ff',
      iconColor: '#cbf1fd',
    },
    {
      icon: <FaUsers size={36} color='#ff9843' />,
      title: 'Customer-Centric Approach',
      text: 'Focusing on your unique needs for personalized, scalable solutions.',
      color: '#fff3e9',
      iconColor: '#fce7d6',
    },
    {
      icon: <BsHourglassSplit size={30} color='#ff6038' />,
      title: 'Timely Delivery',
      text: 'Ensuring on-time completion without compromising quality.',
      color: '#ffebe6',
      iconColor: '#fdded6',
    },
  ];

  const statistics = [
    { number: '100+', label: 'Active Clients' },
    { number: '250+', label: 'Projects Done' },
    { number: '25+', label: 'Team Advisors' },
  ];

  return (
    <div className='container py-5 section-wrapper' id='about'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-sm-12 mb-4 mb-lg-0 p-5 fade-in-right'>
          <div className='row'>
            {cards.map((card, index) => (
              <Card key={index} card={card} index={index} />
            ))}
          </div>
        </div>

        <div className='col-lg-6 p-5 fade-in-left'>
          <div>
            <h6 className='text-uppercase text-secondary fw-bold mb-3'>
              Why Choose Us
            </h6>
            <h1 className='mb-3 fs-2' style={{ fontWeight: '600' }}>
              Grow Your Business with
              <br /> Havana Tech
            </h1>
            <p className='text-primary mb-4' style={{ fontSize: '18px' }}>
              Our mission is to empower businesses with custom software and IT
              support that boosts efficiency, fuels growth, and fosters
              innovation. We are committed to building strong, lasting
              relationships with our clients by consistently delivering value
            </p>
            <div className='d-flex justify-content-between'>
              {statistics.map((stat, index) => (
                <div key={index}>
                  <h2 className='text-secondary fw-bold mb-1'>{stat.number}</h2>
                  <p className='text-primary fw-bold mb-0'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Card({ card, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`col-lg-6 col-sm-12 mb-4 text-center mt-2 mb-2 chooseCard ${
        index === 0 || index === 2 ? 'tall-narrow' : 'wide-short'
      } ${index === 1 ? 'align-bottom' : ''}
      ${index === 3 ? 'align-top' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#fff' : card.color,
        boxShadow: isHovered ? '0 6px 10px rgba(0, 0, 0, 0.15)' : 'none',
      }}
      key={index}
    >
      <div
        className='fs-2 card-icon mb-3'
        style={{
          backgroundColor: isHovered ? card.color : 'white',
          width: '70px',
          height: '70px',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          transition: 'background-color 0.6s ease, color 0.6s ease',
          boxShadow: !isHovered
            ? `10px 10px 30px 0px ${card.iconColor}`
            : 'none',
        }}
      >
        {card.icon}
      </div>
      <h5
        className='fw-bold mt-2'
        style={{ fontSize: '18px', letterSpacing: '0.3px', lineHeight: '1.2' }}
      >
        {card.title}
      </h5>
      <p className='text-primary mb-0' style={{ fontSize: '16px' }}>
        {card.text}
      </p>
    </div>
  );
}

export default WhyChooseUs;
