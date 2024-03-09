import React from 'react';
import Image from 'next/image';

interface SolutionComponentProps {
  img: string;
  title: string;
  description: string;
}

const SolutionComponent: React.FC<SolutionComponentProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='bg-[#4031B7] w-[178px] h-[178px] rounded-full flex items-center justify-center'>
        <Image src={img} alt='solution' />
      </div>

      <div className='text-center flex flex-col gap-4'>
        <h1 className='font-[century]'>{title}</h1>
        <p className='text-sm text-[#828282] leading-4'>{description}</p>
      </div>
    </div>
  );
};

export default SolutionComponent;
