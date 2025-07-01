import React from 'react';
import u1 from './assets/up1.jpg';
import u2 from './assets/up2.jpg';
import u3 from './assets/up3.jpg';
import u4 from './assets/up4.jpg';
import u5 from './assets/up5.jpg';
import u6 from './assets/up6.jpg';
import u7 from './assets/up7.jpg';
import u8 from './assets/up8.jpg';

const items = [
  { img: u1, price: '₹199' },
  { img: u2, price: '₹249' },
  { img: u3, price: '₹299' },
  { img: u4, price: '₹349' },
  { img: u5, price: '₹399' },
  { img: u6, price: '₹279' },
  { img: u7, price: '₹319' },
  { img: u8, price: '₹359' },
];

const Upcoming = () => {
  return (
    <div className='bg-orange-200 mt-6 py-10 px-4 flex flex-col items-center'>
      <h1 className='text-5xl font-bold mb-2 text-black mt-4'>Upcoming Favourites</h1>
      <p className='text-lg mb-10'>"Coming Soon....."</p>

      {/* Grid of upcoming items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {items.map((item, index) => (
          <div
            key={index}
            className='relative bg-white rounded-xl p-4 shadow-lg flex flex-col items-center transform hover:translate-y-[-20px] transition duration-[0.3s] ease-in-out'
          >
            <img
              src={item.img}
              alt={`Upcoming ${index + 1}`}
              className='w-40 h-40 object-cover rounded-lg mb-2'
            />
            <span className='absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-sm shadow-md'>
              {item.price}
            </span>
            <p className='font-medium text-center mt-2'>New Arrival</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
