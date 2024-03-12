'use client';

import React, {useState, useEffect} from 'react';
import {CustomLink, DocumentUpload} from '../components/reusables';
import Image from 'next/image';
import {LogoPurple} from '../assets';

const Upload = () => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState('');
  const [uploaded, setUploaded] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (progress === 100) {
      //   setUploaded([...uploaded, uploading]);
      setUploading('');
    }
  }, [progress, uploading, uploaded]);

  const handleUpload =
    (docKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (!file) return;

      setUploading(docKey);
      setProgress(0); // Reset progress for the new upload

      // Simulate an upload process
      const simulateUpload = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(simulateUpload);
            setUploading('');
            setUploaded(prevUploaded => [...prevUploaded, docKey]);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 100);
    };

  const documents = [
    {label: 'Certificate of Incorporation', key: 'Incorporation'},
    {label: 'Tax Clearance Cert. (Last 3 years)', key: 'Tax'},
    {label: 'PENCOM Compliance Cert.', key: 'PENCOM'},
    {label: 'ITF Compliance Certificate', key: 'ITF'},
    {label: 'NSITF Compliance Certificate', key: 'NSITF'},
    {label: 'BPP / Contractors Database Registration', key: 'BPP'},
    {label: 'Non-Criminal Affidavit', key: 'Affidavit'},
    {label: 'Annual Audit Reports', key: 'Audit'},
    {label: 'Company Profile', key: 'Company'},
  ];

  const list = [
    {data: 'Bid Notifications'},
    {data: 'EOI Evaluations'},
    {data: 'Request for proposal'},
  ];

  const handleSubmit = () => {
    setError('');
    if (uploaded.length < documents.length) {
      setError('Please, make sure to attach all documents.');
      return;
    }
    // Redirect or further processing
    console.log('All documents uploaded');
    window.location.href = '/login';
  };

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='w-full md:w-2/5 bg-white py-5 px-5 md:px-20 h-full md:h-[100vh]'>
        <CustomLink href='/'>
          <Image src={LogoPurple} alt='proqura' />
        </CustomLink>

        <div className='mt-24'>
          <h1 className='text-[#42505C] text-2xl leading-[30px] font-semibold'>
            Upload Statutory Documents
          </h1>

          <p className='text-sm font-normal text-[#7d7d7d] mt-5'>
            Please upload statutory documents in order to qualify for Expression
            of Interest Bids. You can also skip this process and complete it at
            a later time, but it is pertinent to note that in the mean time you
            will not receive notifications of the following:
          </p>

          <ul className='list-inside text-[#7D7D7D] space-y-3 mt-8'>
            {list.map((item, index) => (
              <li className='flex items-center gap-5' key={index}>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='6' cy='6' r='6' fill='#6A79DD' />
                </svg>
                {item.data}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-6 mt-24'>
          <button
            className='bg-[#6A79DD] text-white rounded-xl py-5 px-[72px]'
            onClick={handleSubmit}>
            REGISTER
          </button>

          <CustomLink href='/'>Skip Upload</CustomLink>
        </div>
      </div>
      {/* Right Section for Document Upload */}
      {/* <div className='w-full md:w-3/5 bg-[#f0f2fc] flex flex-col items-center justify-center py-10 px-3'>
        <div className='w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row items-center'>
          {documents.map(doc => (
            <DocumentUpload
              key={doc.key}
              label={doc.label}
              uploading={uploading}
              progress={progress}
              uploaded={uploaded}
              docKey={doc.key}
              onUpload={handleUpload(doc.key)}
            />
          ))}
        </div>
      </div> */}

      <div className='w-full md:w-3/5 bg-[#f0f2fc] flex flex-col items-center justify-center py-10 px-3'>
        <div className='w-full px-4 md:px-0 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {documents.map(doc => (
            <DocumentUpload
              key={doc.key}
              label={doc.label}
              uploading={uploading}
              progress={progress}
              uploaded={uploaded}
              docKey={doc.key}
              onUpload={handleUpload(doc.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upload;
