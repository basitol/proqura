import React from 'react';
import {FaCloudUploadAlt, FaRegFilePdf} from 'react-icons/fa';

interface DocumentUploadProps {
  label: string;
  uploading: string;
  progress: number;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploaded: string[];
  docKey: string;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({
  label,
  uploading,
  progress,
  onUpload,
  uploaded,
  docKey,
}) => {
  const proStyle = {
    width: `${progress}%`,
  };

  // return (
  //   <div className='flex flex-col justify-between h-[250px]'>
  //     <div className='mb-2 h-[40px] flex items-end justify-center'>
  //       <p className='text-[#7D7D7D] font-semibold text-center'>{label}</p>
  //     </div>
  //     <div className='w-full h-[200px] bg-white border-[#6A79DD] border-[1px] rounded-md flex items-center justify-center relative'>
  //       {uploaded.includes(docKey) ? (
  //         <span>
  //           <FaRegFilePdf className='text-5xl text-[#79828B]' />
  //         </span>
  //       ) : progress > 0 && progress < 100 && uploading === docKey ? (
  //         <div className='w-[80%] mx-auto rounded-full bg-[#DEDEDE]'>
  //           <div
  //             className='bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
  //             style={proStyle}>
  //             {Math.floor(progress)}%
  //           </div>
  //         </div>
  //       ) : (
  //         <>
  //           <label
  //             htmlFor={docKey}
  //             className='flex items-center justify-center cursor-pointer gap-1 px-3 py-1 border-[1px] border-[#6A79DD] rounded-2xl'>
  //             <input
  //               type='file'
  //               id={docKey}
  //               accept='.pdf'
  //               className='hidden'
  //               onChange={onUpload}
  //             />
  //             <FaCloudUploadAlt className='text-[#6A79DD]' />
  //             <span className='text-sm text-[#6A79DD]'>Browse</span>
  //           </label>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className='flex flex-col justify-between h-full md:h-[250px] p-2'>
      <div className='mb-2 h-[40px] flex items-end justify-center'>
        <p className='text-[#7D7D7D] font-semibold text-center'>{label}</p>
      </div>
      <div className='w-full flex-grow h-[100px] md:h-[200px] bg-white border-[#6A79DD] border-[1px] rounded-md flex items-center justify-center relative'>
        {uploaded.includes(docKey) ? (
          <FaRegFilePdf className='text-5xl text-[#79828B]' />
        ) : progress > 0 && progress < 100 && uploading === docKey ? (
          <div className='w-[80%] mx-auto rounded-full bg-[#DEDEDE]'>
            <div
              className='bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
              style={proStyle}>
              {Math.floor(progress)}%
            </div>
          </div>
        ) : (
          <>
            <label htmlFor={docKey} className='absolute'>
              <input
                type='file'
                id={docKey}
                accept='.pdf'
                className='hidden'
                onChange={onUpload}
              />
              <div className='flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer hover:animate-bounce'>
                <FaCloudUploadAlt />
                <span className='text-sm'>Browse</span>
              </div>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
