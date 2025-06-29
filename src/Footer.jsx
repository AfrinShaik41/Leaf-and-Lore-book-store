import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-800 text-white p-6 mt-6'>
      <p>&copy; 2023 Leaf & Lore. All rights reserved.</p>
        <p className='mt-2'>Follow us on:</p>
        <div className='flex space-x-4 mt-2'>
          <a href="#" className='hover:underline'>Facebook</a>
          <a href="#" className='hover:underline'>Twitter</a>
          <a href="#" className='hover:underline'>Instagram</a>
        </div>
        </div>
  )
}

export default Footer
