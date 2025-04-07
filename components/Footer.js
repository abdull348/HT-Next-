import Image from 'next/image';
import { HiMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../public/havana-logo.svg';

function Footer() {
  const footerInfo = [
    {
      icon: <IoLocationOutline className='text-white fs-3 me-1' />,
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Address
        </p>
      ),
      content: <p className='m-0 text-white'>Islamabad, Pakistan</p>,
    },
    {
      icon: <HiMail className='text-white fs-3 me-1' />,
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Email us
        </p>
      ),
      content: (
        <a
          href='mailto:arsalar286@gmail.com'
          className='text-white text-decoration-none d-block'
        >
          arsalar286@gmail.com
        </a>
      ),
    },
    {
      icon: <TbPhoneCall className='text-white fs-3 me-1' />,
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Call us
        </p>
      ),
      content: <p className='m-0 text-white'>+(92) 3485376283</p>,
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com',
      icon: <FaFacebook className='fs-4 text-white' />,
    },
    {
      href: 'https://www.instagram.com',
      icon: <FaInstagram className='fs-4 text-white' />,
    },
    {
      href: 'https://www.twitter.com',
      icon: <FaXTwitter className='fs-4 text-white' />,
    },
    {
      href: 'https://www.linkedin.com',
      icon: <FaLinkedin className='fs-4 text-white' />,
    },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(150deg, #0f172a 0%, #1f6d8f 100%)',
        paddingTop: '85px',
        paddingBottom: '20px',
      }}
    >
      <div className='container'>
        <div className='row text-center text-md-start'>
          <div className='col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0'>
            <Image src={logo} alt='Logo' width={120} height={50} priority />
          </div>

          {footerInfo.map((info, index) => (
            <div
              className='col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0'
              key={index}
            >
              {info.icon}
              <div className='ms-2'>
                <p className='mb-0'>{info.title}</p>
                {info.content}
              </div>
            </div>
          ))}
        </div>

        <hr className='mt-5 mb-4 text-white' />

        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-auto'>
            <p className='mb-1 text-white' style={{ fontSize: '14px' }}>
              Privacy Policy
            </p>
          </div>
          <div className='col-auto'>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='mx-3 me-2'
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
