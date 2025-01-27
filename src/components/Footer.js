import Image from 'next/image';
import { ImLocation2 } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '../../public/havana-logo.svg';

function Footer() {
  // Footer content data
  const footerInfo = [
    {
      icon: (
        <ImLocation2
          style={{ fontSize: '32px', color: '#26ace3', marginRight: '8px' }}
        />
      ),
      title: 'Address',
      content: (
        <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '0' }}>
          5th Floor Ascon Heights, Bahria
          <br />
          Town Rawalpindi
        </p>
      ),
    },
    {
      icon: (
        <HiMail
          style={{ fontSize: '32px', color: '#26ace3', marginRight: '8px' }}
        />
      ),
      title: 'Email us',
      content: (
        <a
          href='mailto:help@cloudmeshsolutions.com'
          style={{
            color: '#26ace3',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          help@cloudmeshsolutions.com
        </a>
      ),
    },
    {
      icon: (
        <TbPhoneCall
          style={{ fontSize: '32px', color: '#26ace3', marginRight: '8px' }}
        />
      ),
      title: 'Call us',
      content: (
        <p style={{ fontWeight: 'bold', fontSize: '12px', margin: '0' }}>
          +5148 55660506
        </p>
      ),
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com',
      icon: <FaLinkedin style={{ fontSize: '20px', color: '#26ace3' }} />,
    },
    {
      href: 'https://www.instagram.com',
      icon: <FaInstagram style={{ fontSize: '20px', color: '#26ace3' }} />,
    },
    {
      href: 'https://www.facebook.com',
      icon: <FaFacebook style={{ fontSize: '20px', color: '#26ace3' }} />,
    },
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #d3ddfd, #e9eefb)',
        padding: '40px 0',
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ flex: '0 0 auto', margin: '0 20px' }}>
          <Image src={logo} alt='Logo' width={120} height={50} priority />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            gap: '20px',
          }}
        >
          {footerInfo.map((info, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '0 10px',
              }}
            >
              {info.icon}
              <div>
                <p style={{ fontSize: '18px', margin: '0' }}>{info.title}</p>
                {info.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          paddingTop: '20px',
          borderTop: '1px solid #ddd',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#26ace3', marginBottom: '5px' }}>
          Privacy Policy
        </p>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '0' }}>
          Copyright © 2023 Cloud Mesh Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
