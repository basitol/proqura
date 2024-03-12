// components/CustomInput.tsx
import React from 'react';

interface CustomInputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  icon?: JSX.Element; // Optional icon
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  type,
  label,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label htmlFor={id} className='text-[#6A79DD] font-bold text-xl'>
        {label}
      </label>
      <div className='flex items-center border-2 border-[#E4E8EA] rounded-xl overflow-hidden'>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`flex-1 p-3 bg-transparent focus:outline-none placeholder:text-[#79828B] text-[#79828B] font-normal text-sm ${
            icon ? 'pr-10' : ''
          }`}
          value={value}
          onChange={onChange}
        />
        {icon && <div className='p-3 text-[#6A79DD]'>{icon}</div>}
      </div>
    </div>
  );
};

export default CustomInput;
