import React, {useState} from 'react';
import AuthLayout from './Layout/Authlayout'; // Adjust the import path as needed
// import Lock from '../icons/Lock';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <AuthLayout>
      <p className='font-bold text-2xl text-[#42505C]'>Welcome back!</p>
      <p className='text-[#7D7D7D] font-semibold text-justify'>
        Login to your secure procurement management portal with your username
        and password
      </p>
      {/* The rest of your form and login-specific content goes here */}
    </AuthLayout>
  );
};

export default LogIn;
