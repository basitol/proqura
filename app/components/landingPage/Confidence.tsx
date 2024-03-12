import React from 'react';
import Image from 'next/image';
import {HiOutlineLockOpen} from 'react-icons/hi';
import {
  padlock,
  transparency,
  server,
  confidenceMan,
  artboard,
} from '@/app/assets';

interface ConfidenceItemProps {
  imgSrc: any;
  title: string;
  description: string;
}

const ConfidenceItem: React.FC<ConfidenceItemProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className='flex flex-row gap-5'>
      <div className='bg-[#4031B7] rounded-full p-5 h-fit w-fit'>
        <Image src={imgSrc} alt={title} />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-[century] text-2xl text-[#17162D]'>{title}</h1>
        <p className='text-[#828282] text-base'>{description}</p>
      </div>
    </div>
  );
};

const Confidence = () => {
  return (
    <>
      <div className='bg-white bg-right bg-no-repeat md:bg-artboard-md'>
        <div className='py-20 md:py-40 px-5 md:px-20 flex flex-col md:flex-row justify-between gap-10'>
          <div className='w-full md:w-1/3'>
            <h1 className='text-5xl text-[#111028] font-[century]'>
              Manage work with confidence
            </h1>
            <p className='mt-5 text-lg text-[#828282]'>
              User-friendly with enterprise-grade security
            </p>
            <div className='flex flex-col mt-10 gap-10'>
              <ConfidenceItem
                imgSrc={padlock}
                title='Secure'
                description='Safeguard your agreements.'
              />
              <ConfidenceItem
                imgSrc={transparency}
                title='Completely Honest'
                description='Protection against data fraud.'
              />
              <ConfidenceItem
                imgSrc={server}
                title='Hosted on your servers'
                description='You control your data with no interference.'
              />
            </div>
          </div>
          <div className='w-full md:w-2/5'>
            <Image
              src={confidenceMan}
              alt='working man'
              layout='responsive'
              width={500} // Adjust based on your image's aspect ratio
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Confidence;
