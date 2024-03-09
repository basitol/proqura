import React from 'react';
import CustomLink from '../reusables/CustomLink';
import Image from 'next/image';
import {Logo} from '../../assets/index';
import {HiArrowLongRight} from 'react-icons/hi2';

interface NavbarProps {
  styles: Record<string, string>;
}

const Navbar: React.FC<NavbarProps> = ({styles}) => {
  return (
    <nav className={styles.navbar}>
      <div className='flex gap-20'>
        <CustomLink href='/' className={styles.logo}>
          <Image src={Logo} alt='Logo' />
        </CustomLink>
        <div className={styles.navLinks}>
          <CustomLink href='/how-it-works' className={styles.navLink}>
            How it Works
          </CustomLink>
          <CustomLink href='/customers' className={styles.navLink}>
            Customers
          </CustomLink>
          <CustomLink href='/faq' className={styles.navLink}>
            FAQ
          </CustomLink>
          <CustomLink href='/pricing' className={styles.navLink}>
            Pricing
          </CustomLink>
        </div>
      </div>
      <div className={styles.authLinks}>
        <CustomLink href='/login' className={styles.login}>
          Login
        </CustomLink>
        <CustomLink href='/signup' className={styles.signup}>
          Sign Up
          <span className={styles.arrow}>
            <HiArrowLongRight />
          </span>
        </CustomLink>
      </div>
    </nav>
  );
};

export default Navbar;
