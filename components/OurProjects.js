import Image from 'next/image';
import Link from 'next/link';
import twinhub from '../public/twinhub.webp';
import canitsm from '../public/canitsm.webp';
import havanatech from '../public/havanatech.webp';
import geekinate from '../public/geekinate.webp';
import qadam from '../public/qadam.webp';
import mindstreamsoft from '../public/mindstreamsoft.webp';
import molegen from '../public/molegen.webp';
import innotech from '../public/Innotech.webp';

const projects = [
  {
    title: 'Havana Tech',
    description: 'Blockchain-Powered Trading',
    alt: 'Blockchain-Powered Trading',
    image: havanatech,
    path: 'https://havanatechpl.com/',
  },
  {
    title: 'Canitsm',
    description: 'IT Consulting Services',
    alt: 'IT Consulting Services',
    image: canitsm,
    path: 'https://www.canitsm.com/',
  },
  {
    title: 'Geekinate',
    description: 'Services Agency',
    alt: 'Services Agency',
    image: geekinate,
    path: 'https://geekinate.com/',
  },
  {
    title: 'Twinhub',
    description: 'Coworking Space',
    alt: 'Coworking Space',
    image: twinhub,
    path: 'https://twinhub.pk/',
  },
  {
    title: 'Molegen',
    description: 'Inventory Management System',
    alt: 'Inventory Management System',
    image: molegen,
    path: '/',
  },
  {
    title: 'Innotech Technologies',
    description: 'E-commerce Application',
    alt: 'E-commerce Application',
    image: innotech,
    path: 'https://innotechtechnologies.us/',
  },

  {
    title: 'Qadam',
    description: 'Digital Marketplace',
    alt: 'Digital Marketplace',
    image: qadam,
    path: 'https://qadam.io/',
  },
  {
    title: 'Mindstreamsoft',
    description: 'Digital Partner',
    alt: 'Digital Partner',
    image: mindstreamsoft,
    path: 'https://mindstreamsoft.com/',
  },
];

const ProjectCard = ({ title, description, path, image, alt }) => (
  <div className='portfolio'>
    <Image
      className='portfolio_img'
      src={image}
      alt={alt}
      width={300}
      height={300}
    />
    <div className='portfolio_content'>
      <p className='portfolio_title'>
        <Link href={path}>
          {' '}
          <b style={{ color: '#fff' }}>{title}</b>
        </Link>

        <br />
        <b style={{ color: '#6874e8' }}>{description}</b>
      </p>
    </div>
  </div>
);

const Services = () => (
  <section
    className='container py-5 section-wrapper'
    style={{
      color: '#f6f6f6',
    }}
    id='projects'
  >
    <div className='row' style={{ width: '100%' }}>
      <div className='col-12 col-md-8'>
        <div>
          <h6
            className='text-uppercase fw-bold mb-1 fs-1'
            data-aos='fade-up'
            data-aos-duration='2000'
            style={{
              color: '#fff',
              letterSpacing: '1.5px',
              position: 'relative',
              display: 'inline-block',
              textShadow: `
      -1px -1px 0 #2f1c5b,
      1px -1px 0 #2f1c5b,
      -1px 1px 0 #2f1c5b,
      1px 1px 0 #2f1c5b
    `,
            }}
          >
            Our Projects
          </h6>
          <h1
            className='mb-2 fs-2'
            style={{ fontWeight: '600', color: '#2f1c5b' }}
            data-aos='fade-up'
            data-aos-duration='2500'
          >
            Let's take a look at our
            <span style={{ color: '#6874e8' }}> Recent Works</span>
          </h1>
        </div>
      </div>
    </div>

    <div className='row'>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`col-3 mt-2 mb-2 col-sm-12 px-5 p-lg-3 text-center projectCard`}
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </section>
);

export default Services;
