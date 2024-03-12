'use client';

import React, {useState} from 'react';
import AuthLayout from '../Layout/Authlayout'; // Make sure the path is correct
import CustomInput from '../components/reusables/CustomInput'; // Correct path and filename spelling
import {MdOutlineMail} from 'react-icons/md';
import {TbBuildingSkyscraper} from 'react-icons/tb';
import {BsLock} from 'react-icons/bs';
import CustomLink from '../components/reusables/CustomLink';
import axios

const SignUp = () => {
  const [companyName, setCompanyName] = useState('');
  const [cacNo, setCacNo] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

   const handleSignUpStep1 = async () => {

     try {
       const response = await axios.post('http://localhost:5000/users', {
         companyName,
         cacNo,
         email,
         password, // Consider hashing the password before sending it to your backend
       });

       if (response.data) {
         // Move to step 2 if the user is successfully created
         setCurrentStep(2);
       }
     } catch (error) {
       console.error('Error signing up:', error);
       // Handle errors here (e.g., show error message)
     }
   };

  return (
    <AuthLayout>
      <h1 className='font-bold text-2xl text-[#42505C] mb-6'>
        Welcome to Proqura
      </h1>
      <p className='text-[#7D7D7D] text-sm'>
        We’re sure you’ll love the simplicity and transparency Proqura brings.
        To get started, please enter your email address and password.
      </p>

      <div className='bg-[#f0f2fc] rounded-md h-[30px] text-[#7D7D7D] flex items-center text-xs font-normal justify-center mt-12'>
        Note that all the fields in the form below are compulsory and must be
        filled.
      </div>

      <form className='mt-12 flex-col flex gap-5'>
        <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
          <CustomInput
            type='text'
            label='Company Name'
            placeholder='Nigeria Business Limited'
            id='company_name'
            icon={<TbBuildingSkyscraper />}
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />
          <CustomInput
            type='text'
            label='CAC RC No. / BN'
            placeholder='RC:XXXX'
            id='cac_no'
            value={cacNo}
            onChange={e => setCacNo(e.target.value)}
          />
        </div>

        <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
          <CustomInput
            type='email'
            label='Email'
            placeholder='nene.k@quomodosystems.com'
            id='email'
            icon={<MdOutlineMail />}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <CustomInput
            type='email'
            label='Confirm Email'
            placeholder='nene.k@quomodosystems.com'
            id='confirm_email' // Changed id to be unique
            icon={<MdOutlineMail />}
            value={confirmEmail}
            onChange={e => setConfirmEmail(e.target.value)}
          />
        </div>

        <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
          <CustomInput
            type='password'
            label='Password'
            placeholder='***************'
            id='password'
            icon={<BsLock />}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <CustomInput
            type='password'
            label='Confirm Password'
            placeholder='***************'
            id='confirm_password' // Changed id to be unique
            icon={<BsLock />}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className='flex items-center gap-7'>
          <button className='bg-[#6A79DD] py-5 px-24 rounded-md text-white font-bold'>
            CONTINUE
          </button>

          <p className='text-sm text-[#424242]'>
            Already have an account?{' '}
            <span>
              <CustomLink href='/signin' className='text-[#6A79DD]'>
                Sign In
              </CustomLink>
            </span>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
