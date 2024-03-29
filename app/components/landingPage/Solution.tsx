import React from 'react';
import SolutionComponent from '../reusables/SolutionComponent';
import {Seller, Clipboard, Role} from '@/app/assets';

const solutionData = [
  {
    img: Seller,
    title: 'Vendor Agreements',
    description: 'Manage vendor agreements with ease',
  },
  {
    img: Role,
    title: 'User Management',
    description: 'Onboard and fulfill user roles effectively',
  },
  {
    img: Clipboard,
    title: 'Checks & Balances',
    description: 'Never miss a process with our workflows',
  },
];

const Solution = () => {
  return (
    <section className='flex flex-col py-[120px] md:py-[180px] items-center w-full'>
      <div className='text-center'>
        <h1 className='font-[century] md:text-5xl text-4xl leading-10 md:leading-[65px] text-[#111028] mb-8'>
          Have a complete purchasing solution
        </h1>
        <p className='text-base md:text-lg'>
          Advertise, Approve and Manage projects for your business.
        </p>
      </div>

      <div className='flex flex-col gap-6 md:flex-row items-center justify-around w-full mt-24'>
        {solutionData.map((item, index) => (
          <SolutionComponent
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Solution;
