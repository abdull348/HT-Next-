'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toplogo from '../../public/havana-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navbarData = [
    { title: 'About', path: '#about' },
    { title: 'Services', path: '#services' },
    { title: 'Projects', path: '#projects' },
    {
      title: 'Schedule Call',
      path: 'https://calendly.com/arsalar286',
      external: true,
    },
  ];

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light py-2'>
      <div className='container'>
        <Link href='/' className='navbar-brand d-flex align-items-center'>
          <Image src={toplogo} alt='Logo' width={130} height={50} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className={isOpen ? 'icon-cross' : 'icon-bars'}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            {navbarData.map((item, index) => (
              <li className='nav-item' key={index}>
                {item.external ? (
                  <a
                    href={item.path}
                    className='nav-link mx-2 px-3 highlight'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.path} className='nav-link mx-2 px-3'>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
