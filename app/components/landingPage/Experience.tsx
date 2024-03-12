import React from 'react';
import Image from 'next/image';
// Assuming these imports are correctly resolved with TypeScript
import {
  experienceMan,
  search,
  security,
  multipleUser,
  statistics,
  calculator,
  timeline,
} from '@/app/assets';

interface BenefitItemProps {
  src: any; // Assuming StaticImageData is recognized by your setup
  alt: string;
  text: string;
}

const IconTextBlock: React.FC<BenefitItemProps> = ({src, alt, text}) => (
  <div className='flex flex-col gap-5 items-center'>
    <div className='h-16 w-16 rounded-full bg-[#4031B7] flex items-center justify-center'>
      <Image src={src} alt={alt} />
    </div>
    <p className='text-[#828282] text-sm text-center'>{text}</p>
  </div>
);

const Experience = () => {
  const iconTextBlocks = [
    {src: search, alt: 'requisition', text: 'Requisition'},
    {src: security, alt: 'sourcing', text: 'Sourcing'},
    {src: calculator, alt: 'invoice', text: 'Invoicing'},
    {src: statistics, alt: 'calculator', text: 'Budgeting'},
    {src: multipleUser, alt: 'security', text: 'Vendor portal'},
    {src: timeline, alt: 'statistics', text: 'Real-time reports'},
    {
      src: multipleUser,
      alt: 'multiple users silhouette',
      text: 'User roles control',
    },
    {src: timeline, alt: 'timeline', text: 'User roles control'},
  ];

  return (
    <div className='bg-[#FBFAF9]'>
      <div className='w-full px-5 md:pl-0 md:pr-20 py-20 md:py-40 flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className='w-full md:w-1/2'>
          <Image
            src={experienceMan}
            alt='experienced-man'
            layout='responsive'
            width={500} // Adjust as necessary
            height={400} // Adjust as necessary
          />
        </div>
        <div className='w-full md:w-1/3 flex flex-col gap-6'>
          <p className='text-5xl md:text-6xl text-[#111028] font-[century]'>
            Build the best experience
          </p>
          <p className='mt-5 text-base font-light text-[#828282] text-justify'>
            Our modern API works for your team and your users. Integrate Proqura
            to your team&apos;s tools or embed our user-friendly procurement
            solution service directly to your app.
          </p>
          <div className='grid grid-cols-4 gap-y-8'>
            {iconTextBlocks.map(({src, alt, text}, index) => (
              <IconTextBlock key={index} src={src} alt={alt} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
