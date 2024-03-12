import React from 'react';
import CustomLink from '../components/reusables/CustomLink';
import {LogoPurple} from '@/app/assets';
import Image from 'next/image';

const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='w-full flex'>
      <div className='w-full md:w-2/3'>
        <div className='px-5 md:px-28 py-5 md:py-10 flex flex-col'>
          <CustomLink href='/' className='pb-14'>
            <Image src={LogoPurple} alt='proqura logo' className='w-fit' />
          </CustomLink>
          {children}
        </div>

        <div>
          <p className='text-center text-gray-600 dark:text-white font-medium pt-5 pb-9'>
            Terms and Conditions | Privacy Policy
          </p>
        </div>
      </div>
      <div className='hidden md:inline-block w-1/3 bg-man-md bg-no-repeat bg-cover bg-center'>
        <div className='w-full h-full bg-transparentPurple'></div>
      </div>
    </div>
  );
};

export default AuthLayout;
