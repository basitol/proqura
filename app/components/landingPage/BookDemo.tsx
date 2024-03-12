import React from 'react';
import CustomLink from '../reusables/CustomLink';

const Demo = () => {
  return (
    <>
      <div className='bg-demo-md bg-no-repeat bg-cover' data-aos='fade-up'>
        <div className='w-full py-20 md:py-28 px-5 md:px-20 flex flex-col md:flex-row gap-10 md:justify-between md:items-center'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-6xl font-[century] text-[#F2F2F2]'>
              Sign here
            </h1>
            <p className='text-white text-xl'>
              Book a demo and start your 14 day free trial:
            </p>
          </div>
          <CustomLink
            className='text-white bg-[#60CBBE] px-4 py-2 w-fit rounded-3xl'
            href='#'>
            Book Demo
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default Demo;
