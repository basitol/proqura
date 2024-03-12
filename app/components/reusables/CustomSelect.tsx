import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label htmlFor={id} className='block text-[#6A79DD] font-bold text-xl'>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className='w-full p-3 text-lg bg-white border-2 border-[#E4E8EA] rounded-xl focus:border-[#6A79DD] focus:ring focus:ring-[#6A79DD] focus:ring-opacity-50'>
        <option value='' disabled>
          <p className='text-[#79828B] font-normal text-sm'>{placeholder}</p>
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;

// import React from 'react';

// interface Option {
//   value: string;
//   label: string;
// }

// interface CustomSelectProps {
//   id: string;
//   label: string;
//   options: Option[];
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   placeholder?: string; // Optional placeholder prop
// }

// const CustomSelect: React.FC<CustomSelectProps> = ({
//   id,
//   label,
//   options,
//   value,
//   onChange,
//   placeholder = 'Select an option...',
// }) => {
//   return (
//     <div className='flex flex-col gap-2 w-full'>
//       <label htmlFor={id} className='text-sm font-medium text-gray-700'>
//         {label}
//       </label>
//       <div className='relative'>
//         <select
//           id={id}
//           value={value}
//           onChange={onChange}
//           className='block w-full p-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm bg-white'>
//           <option value='' disabled>
//             {placeholder}
//           </option>
//           {options.map(option => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//         {/* <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
//           <svg
//             className='w-4 h-4 fill-current'
//             xmlns='http://www.w3.org/2000/svg'
//             viewBox='0 0 20 20'>
//             <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//           </svg>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CustomSelect;
