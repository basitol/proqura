import React from 'react';

interface ProcurementCardProps {
  title: string;
  description: string;
}

const ProcurementCard: React.FC<ProcurementCardProps> = ({
  title,
  description,
}) => {
  return (
    <div
      className='w-full md:w-1/3 text-center flex flex-col gap-2'
      data-aos='zoom-in'>
      <h1 className='font-[century] text-xl md:text-[26px]'>{title}</h1>
      <p className='text-sm text-[#828282]'>{description}</p>
    </div>
  );
};

export default ProcurementCard;
