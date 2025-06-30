import React from 'react';

const Offer = () => {
  return (
    <div className='bg-orange-200 mt-6 py-10 px-4 flex justify-center items-center'>
      <div className='flex flex-col space-y-6 animate-fade-in'>
        {/* Main Offer Card */}
        <div className='bg-purple-400 text-white rounded-xl shadow-xl p-6 max-w-xl w-full text-center relative overflow-hidden'>
          <h1 className='text-3xl font-bold mb-2'>🎉 Best Offers 🎉</h1>
          <p className='text-lg'>
            Enjoy <span className=' text-6xl font-semibold animate-ping text-yellow-200'>15% OFF</span> on all your favorite books!
          </p>
        </div>

        {/* Additional Offer Card */}
        <div className= 'bg-pink-400  max-w-xl w-full text-center rounded-xl p-5 shadow-md transform transition hover:scale-105 duration-300'>
          <span className='block text-2xl text-white font-semibold mb-2'>
            📌 Visit this site for more interesting offers!
          </span>
          <h1 className='text-2xl text-white font-bold'>🎁 Get surprise gifts on your orders!</h1>
        </div>
      </div>
    </div>
  );
};

export default Offer;
