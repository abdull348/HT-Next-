import Image from 'next/image';
import Link from 'next/link';
import twinhub from '../../public/twinhub.svg';
import canitsm from '../../public/canitsm.svg';
import havanatech from '../../public/havanatech.svg';
import geekinate from '../../public/geekinate.svg';
import qadam from '../../public/qadam.svg';
import mindstreamsoft from '../../public/mindstreamsoft.svg';
import molegen from '../../public/molegen.svg';

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
        <b style={{ color: '#26ace3' }}>{description}</b>
      </p>
    </div>
  </div>
);

const Services = () => (
  <section
    className='container p-5 section-wrapper'
    style={{ color: '#f6f6f6' }}
    id='projects'
  >
    <div className='row mb-5' style={{ width: '100%' }}>
      <div className='col-12 col-md-8'>
        <div className='services-content'>
          <h6>Our Projects</h6>
          <h1 className='text-primary' style={{ fontSize: '2rem' }}>
            Let's take a look at our recent work
          </h1>
        </div>
      </div>
      <div className='col-12 col-md-4 d-flex align-items-end justify-content-md-end mt-3 mt-md-0'>
        <button className='projectButton'>Explore More</button>
      </div>
    </div>

    <div className='row'>
      {projects.map((project, index) => (
        <div
          key={index}
          // className={`col-3 col-sm-12 text-center projectCard`}
          className={`col-3 col-sm-12 text-center projectCard ${
            index === 0 || index === 2 ? 'tall-narrow' : 'wide-short'
          } ${index === 9 ? 'align-bottom' : ''} ${
            index === 9 ? 'align-top' : ''
          }`}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </section>
);

export default Services;
