import React from 'react';
import Image from 'next/image';
import {Board} from '@/app/assets';
import ProcurementCard from '../reusables/ProcurementCard';

// Define the data for each procurement card
const cardsData = [
  {
    title: 'Setup approval routes',
    description:
      'Set an approval order and proqura will automatically carry out your actions.',
  },
  {
    title: 'Collect Acknowledgement',
    description:
      'Vendors and key actors can acknowledge receipt of important documentation.',
  },
  {
    title: 'Smart Archiving',
    description:
      'Generate and store a complete, time-stamped file for each project.',
  },
];

const Procurement = () => {
  return (
    <>
      <div className='bg-[#FBFAF9]'>
        <div className='w-full px-5 md:px-20 py-20 flex flex-col gap-5'>
          <div className='w-fit mx-auto'>
            <h1 className='font-[century] text-center text-3xl md:text-5xl text-[#111028]'>
              Full procurement platform for business
            </h1>
            <p className='text-center mt-3 md:mt-10 text-base md:text-lg text-[#828282]'>
              Contains features to automate advertising, contracting, sourcing,
              and more for your organization.
            </p>
          </div>
          <Image
            src={Board}
            alt='Tender-Board'
            layout='responsive'
            width={700}
            height={475}
          />
          <div className='flex flex-col md:flex-row justify-evenly gap-8'>
            {cardsData.map((card, index) => (
              <ProcurementCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Procurement;
