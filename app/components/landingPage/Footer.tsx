// Footer.tsx
import React from 'react';
import Image from 'next/image';
import FooterSection from '../reusables/FooterSection';
import {LogoPurple} from '@/app/assets';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        {href: '/', label: 'Home'},
        {href: '/social', label: 'Social'},
      ],
    },
    {
      title: 'Resources',
      links: [
        {href: '/book-a-demo', label: 'Book a demo'},
        {href: '/help-center', label: 'Help Center'},
      ],
    },
    {
      title: 'Features',
      links: [
        {href: '/how-it-works', label: 'How it works'},
        {href: '/documentation', label: 'Documentation'},
      ],
    },
    {
      title: 'Contact',
      links: [
        {href: 'mailto:hello@proqura.com', label: 'hello@proqura.com'},
        {href: 'tel:+234705776753', label: '+234 70 577 6753'},
      ],
    },
  ];

  return (
    <div className='bg-white'>
      <div className='py-20 px-5 md:px-20'>
        <div className='w-full flex flex-col md:flex-row justify-evenly gap-10 md:gap-0 text-2xl md:text-xl'>
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
          <div className='w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start'>
            <Image src={LogoPurple} alt='footer-logo' />
          </div>
        </div>
        {/* Remainder of the component unchanged */}
      </div>
    </div>
  );
};

export default Footer;
