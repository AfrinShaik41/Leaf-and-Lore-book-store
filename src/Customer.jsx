import React from 'react'
import c1 from './assets/car1.jpg';
import c2 from './assets/car2.jpg'; 
import c3 from './assets/car3.jpg';
import c4 from './assets/car4.jpg';
import c5 from './assets/car5.jpg';
import c6 from './assets/car6.jpg';



const Customer = () => {
  return (
      <div className='flex flex-col justify-center items-center bg-orange-200 mt-6'>
      <h2 className='text-5xl font-bold mt-6 text-gray-700'>Customer Reviews</h2>
      <p className= 'text-black text-lg mt-4'>"Leaf & Lore has transformed my reading experience!"</p>
      <p className='text-black text-lg '>"I love the curated selection of books!"</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-4'>
        <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
          <p className='text-xl'>"Leaf & Lore is a haven for book lovers. The selection is thoughtfully curated, and the atmosphere is so inviting. I always leave with a new favorite book!"</p>
          <div className='flex items-center '>
          <p className='text-lg mt-4'>- Sarah J.</p>
          <img src={c1} alt="Customer 1" className='w-15 h-17 object-cover rounded-full mt-4' />
          </div>
        </div>
          <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
          <p className='text-xl'>"Amma dairy loo konni pegilu book was next level. It's my go-to place for finding hidden literary gems."</p>
          <div className='flex items-center '>
          <p className='text-lg mt-4'>- Mark T.</p>
          <img src={c2} alt="Customer 2" className='w-15 h-17 object-cover rounded-full mt-4' />
          </div>
        </div>
       <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
        <p className='text-xl'>"Leaf & Lore has a magical way of making every visit feel special. The book recommendations are always spot on!"</p>
          <div className='flex items-center '>
          <p className='text-lg mt-4'>- Emily R.</p>
          <img src={c3} alt="Customer 3" className='w-15 h-17 object-cover rounded-full mt-4' />
          </div>
        </div>
        <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
        <p className='text-xl'>"Leaf & Lore is my favorite bookstore! The staff is incredibly knowledgeable and always ready to help you find your next great read."</p>
          <div className='flex items-center '>
          <p className='text-lg mt-4'>- John D.</p>
          <img src={c4} alt="Customer 4" className='w-15 h-17 object-cover rounded-full mt-4' />
          </div>
          </div>
          <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
          <p className='text-xl'>"I love the cozy atmosphere of Leaf & Lore. It's the perfect place to spend a rainy afternoon with a good book."</p>

            <div className='flex items-center '>
            <p className='text-lg mt-4'>- Lisa M.</p>
            <img src={c5} alt="Customer 5" className='w-15 h-17 object-cover rounded-full mt-4' />
          </div>
          </div>
          <div className="bg-white max-w-2xl p-6 rounded-2xl mt-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeIn">
            <p className='text-xl'>"Leaf & Lore has a fantastic selection of books,  from bestsellers to hidden gems. I always find something new to read!"</p>
            <div className='flex items-center '>
            <p className='text-lg mt-4'>- David S.</p>
            <img src={c6} alt="Customer 6" className='w-15 h-17 object-cover rounded-full mt-4' />
            </div>
            </div>
          </div>

    </div>
    
  )
}

export default Customer
