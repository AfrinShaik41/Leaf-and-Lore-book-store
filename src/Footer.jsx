import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-800 text-white p-6 mt-6'>
      <p>&copy; 2023 Leaf & Lore. All rights reserved.</p>
      <p className='text-sm '>📍 123 Main St, Anytown, India</p>
      <p className='text-sm '>✉️ revanthkumar@gmail.com</p>
      <p className='text-sm '>📞 +91 7207357312</p>
        <p className='mt-2'>Follow us on:</p>
        <div className='flex space-x-4 mt-2'>
          <a href="#" className='hover:underline animate-wiggle '><FaFacebookF /></a>
          <a href="#" className='hover:underline animate-wiggle'><FaTwitter /></a>
          <a href="#" className='hover:underline animate-wiggle'><FaInstagram /></a>
        </div>
        </div>
  )
}

export default Footer
