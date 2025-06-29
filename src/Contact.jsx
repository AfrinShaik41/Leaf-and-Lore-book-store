import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';  // Choose desired message icon

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-orange-200 mt-6'>
      <h2 className='text-5xl font-bold mt-6 text-gray-700'>Contact Us</h2>
      <p className='text-black text-lg mt-4'>We'd love to hear from you!</p>
      <form className='relative flex flex-col w-full max-w-md mt-6'>
        <input type="text" placeholder="Your Name" className='p-2 border border-gray-300 rounded mb-4' />
        <input type="email" placeholder="Your Email" className='p-2 border border-gray-300 rounded mb-4' />
        <textarea placeholder="Your Message" className='p-2 border border-gray-300 rounded mb-4' rows="4"></textarea>
        <button type="submit" className='relative flex items-center justify-center bg-gray-800 text-white p-2 rounded hover:bg-gray-700'>
          <span className='relative'>
            <FaRegCommentDots size={20} />
            <span className='absolute -top-1 -right-1 inline-flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
            </span>
          </span>
          <span className='ml-2 animate-bounce'>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
