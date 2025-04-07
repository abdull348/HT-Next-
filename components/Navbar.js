'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toplogo from '../public/havana-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navbarData = [
    { title: 'About', path: '/' },
    { title: 'Services', path: '/' },
    { title: 'Projects', path: '/' },
    {
      title: 'Schedule Call',
      path: 'https://calendly.com/arsalar286',
      external: true,
    },
  ];

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light py-2'
      style={{ position: 'relative', zIndex: 1 }}
    >
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
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`navbar-collapse ${isOpen ? 'show' : 'collapse'}`}>
          <ul className='navbar-nav ms-auto'>
            {navbarData.map((item, index) => (
              <li className='nav-item' key={index}>
                <Link
                  href={item.path}
                  className={`nav-link mx-2 px-3 ${
                    item.external ? 'highlight' : ''
                  }`}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
