'use client';

import React, {useState} from 'react';
import AuthLayout from '../Layout/Authlayout';
import {CustomInput, CustomLink, CustomSelect} from '../components/reusables';
import {
  MdOutlineMail,
  MdLocationOn,
  MdOutlinePhoneIphone,
} from 'react-icons/md';
import {TbWorld, TbBuildingSkyscraper} from 'react-icons/tb';
import {GoPerson} from 'react-icons/go';
import {BsLock} from 'react-icons/bs';
import axios from 'axios';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [cacNo, setCacNo] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [website, setWebsite] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
  ];

  const handleSubmit = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      try {
        const response = await axios.post('http://localhost:5000/users', {
          companyName,
          cacNo,
          email,
          confirmEmail,
          password,
          address,
          selectedOption,
          name,
          phoneNumber,
        });

        console.log(response);
        if (response.data) {
          console.log('Registration successful', response.data);
          window.location.href = '/success';
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <AuthLayout>
      {step === 1 ? (
        <>
          <h1 className='font-bold text-2xl text-[#42505C] mb-6'>
            Welcome to Proqura!
          </h1>
          <p className='text-[#7D7D7D] text-sm mb-6'>
            We’re sure you’ll love the simplicity and transparency Proqura
            brings. To get started, please enter your details.
          </p>
        </>
      ) : (
        <>
          <h1 className='font-bold text-2xl text-[#42505C] mb-6'>
            Complete Your Registration
          </h1>
          <p className='text-[#7D7D7D] text-sm mb-6'>
            Just a few more steps and you’ll be all set up.
          </p>
        </>
      )}
      <div className='bg-[#f0f2fc] rounded-md h-[30px] text-[#7D7D7D] flex items-center text-xs font-normal justify-center mt-12'>
        Note that all the fields in the form below are compulsory and must be
        filled.
      </div>

      <form className='mt-12 flex flex-col gap-5'>
        {step === 1 ? (
          <>
            <div className='mt-12 flex-col flex gap-5'>
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
                  id='confirm_email'
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
                  id='confirm_password'
                  icon={<BsLock />}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className='flex items-center gap-7'>
                <button
                  className='bg-[#6A79DD] py-5 px-24 rounded-md text-white font-bold'
                  onClick={() => setStep(2)}>
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
            </div>
          </>
        ) : (
          <div className='mt-12 flex-col flex gap-5'>
            <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
              <CustomInput
                type='text'
                label='Business Address'
                placeholder='Nigeria Business Limited'
                id='company_name'
                icon={<MdLocationOn />}
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>

            <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
              <CustomSelect
                id='business-type'
                label='Business Type'
                options={options}
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
                placeholder='Select Business type'
              />

              <CustomInput
                type='text'
                label='Website'
                placeholder='www.website.com'
                id='website'
                icon={<TbWorld />}
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </div>

            <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
              <CustomInput
                type='name'
                label='Contact Person'
                placeholder='Full Name'
                id='name'
                icon={<GoPerson />}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
              <CustomInput
                type='text'
                label='Phone Number'
                placeholder='08046543397'
                id='phoneNumber'
                icon={<MdOutlinePhoneIphone />}
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <CustomInput
                type='text'
                label='Position'
                placeholder='nene.k@quomodosystems.com'
                id='position'
                value={role}
                onChange={e => setRole(e.target.value)}
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
                id='confirm_email'
                icon={<MdOutlineMail />}
                value={confirmEmail}
                onChange={e => setConfirmEmail(e.target.value)}
              />
            </div>

            <div className='flex items-center gap-7'>
              <button className='bg-[#6A79DD] py-5 px-24 rounded-md text-white font-bold'>
                CONTINUE
              </button>
            </div>
          </div>
        )}
      </form>
    </AuthLayout>
  );
};

export default Registration;
