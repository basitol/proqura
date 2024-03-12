'use client';

import React, {useState, useEffect} from 'react';
import CustomLink from '../reusables/CustomLink';
import Image from 'next/image';
import {Logo} from '../../assets/index'; // Ensure this import path to your logo is correct.
import {HiMenu, HiX} from 'react-icons/hi'; // Icons for the menu toggle.
import {HiArrowRight} from 'react-icons/hi2'; // Correctly importing from 'react-icons/hi'.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className='w-full flex flex-wrap items-center justify-between mx-auto px-5 md:px-20 py-4 md:py-8 relative'>
      <CustomLink href='/' className='z-50'>
        <Image src={Logo} alt='Logo' width={146} height={50} layout='fixed' />
      </CustomLink>

      <div className='md:hidden z-50'>
        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Menu'
          className='text-white'>
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden text-white py-4`}>
        <CustomLink href='/how-it-works' className='py-2'>
          How it Works
        </CustomLink>
        <CustomLink href='/customers' className='py-2'>
          Customers
        </CustomLink>
        <CustomLink href='/faq' className='py-2'>
          FAQ
        </CustomLink>
        <CustomLink href='/pricing' className='py-2'>
          Pricing
        </CustomLink>
        {/* More links as needed */}
      </div>

      {/* Links for Desktop */}
      <div className='hidden md:flex flex-row items-center gap-20'>
        <CustomLink
          href='/how-it-works'
          className='no-underline text-[#B6D2E3]'>
          How it Works
        </CustomLink>
        <CustomLink href='/customers' className='no-underline text-[#B6D2E3]'>
          Customers
        </CustomLink>
        <CustomLink href='/faq' className='no-underline text-[#B6D2E3]'>
          FAQ
        </CustomLink>
        <CustomLink href='/pricing' className='no-underline text-[#B6D2E3]'>
          Pricing
        </CustomLink>
        {/* More links as needed */}
      </div>

      {/* Authentication Links - Visible on Desktop */}
      <div className='hidden md:flex flex-row gap-4 items-center'>
        <CustomLink
          href='/login'
          className='no-underline text-[#B6D2E3] flex items-center'>
          Login
        </CustomLink>
        <CustomLink
          href='/registration'
          className='no-underline text-[#B6D2E3] flex items-center gap-1 border border-[#b6d2e3] px-3 py-2 rounded-full transition duration-300 hover:bg-[#0070f3] hover:text-white'>
          Sign Up <HiArrowRight />
        </CustomLink>
      </div>
    </nav>
  );
};

export default Navbar;
