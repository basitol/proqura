import React from 'react';
import Image from 'next/image';
import {success} from '../assets';
import {CustomLink} from '../components/reusables';

const page = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col items-center justify-center gap-2'>
      <Image src={success} width={200} height={200} alt='success' />

      <p className='text-2xl font-semibold'>Successfully Registered</p>

      <CustomLink href='/' className='text-blue-500'>
        Go back to Home Page
      </CustomLink>
    </div>
  );
};

export default page;
