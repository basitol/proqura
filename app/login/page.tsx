'use client';

import React, {useState} from 'react';
import AuthLayout from '../Layout/Authlayout'; // Make sure the path is correct
import CustomInput from '../components/reusables/CustomInput'; // Correct path and filename spelling
import {MdOutlineMail} from 'react-icons/md';
import {TbBuildingSkyscraper} from 'react-icons/tb';
import {BsLock} from 'react-icons/bs';
import CustomLink from '../components/reusables/CustomLink';

const Login = () => {
  const [companyName, setCompanyName] = useState('');
  const [cacNo, setCacNo] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthLayout>
      <h1 className='font-bold text-2xl text-[#42505C] mb-6'>Welcome back!</h1>
      <p className='text-[#7D7D7D] text-sm'>
        Login to your secure procurement management portal with your username
        and password
      </p>

      <form className='mt-12 flex-col flex gap-5'>
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
        </div>

        <div className='flex items-center gap-7'>
          <button className='bg-[#6A79DD] py-5 px-24 rounded-md text-white font-bold'>
            CONTINUE
          </button>

          <p className='text-sm text-[#424242]'>
            Dont have an account?{' '}
            <span>
              <CustomLink href='/signin' className='text-[#6A79DD]'>
                Register
              </CustomLink>
            </span>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
