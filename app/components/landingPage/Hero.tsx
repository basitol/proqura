// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import {HeroImg} from '@/app/assets';
import CustomLink from '@/app/components/reusables/CustomLink';
import {HiArrowLongRight} from 'react-icons/hi2';

interface HeroProps {
  styles: Record<string, string>;
}

const Hero: React.FC<HeroProps> = ({styles}) => {
  return (
    <div className='flex justify-between items-center px-20 bg-[#4031b7] pb-[148px]'>
      <div className='flex-1'>
        <h1 className='font-[century] text-6xl leading-[68px] text-[#FFF8F8]'>
          The simpler way to manage{' '}
          <span className='font-[century] text-[#8CFFF1]'>procurement</span>
        </h1>
        <p className='py-9 text-[#B6D2E3] text-xl leading-8'>
          Proqura is a robust procure-to-pay system for your business. Automated
          purchasing, simple sourcing and spend analytics — all in one
          easy-to-use platform
        </p>

        <div className='flex gap-9 items-center'>
          <button className='flex bg-[#60CBBE] rounded-full px-6 py-3 text-white'>
            Book a demo
          </button>
          <CustomLink
            href='#'
            className='text-white leading-5 flex items-center gap-4'>
            Questions? Talk to our team
            <span>
              <HiArrowLongRight />
            </span>
          </CustomLink>
        </div>
      </div>

      <div className='flex-1 flex justify-end relative'>
        <div className='relative w-[488px] h-[372px] z-[999]'>
          <Image src={HeroImg} alt='hero-img' layout='fill' objectFit='cover' />
        </div>
        <div className='absolute top-6 left-9 w-[488px] h-[372px] z-10 flex justify-center items-center bg-[#3020AF]'></div>
      </div>
    </div>
  );
};

export default Hero;
