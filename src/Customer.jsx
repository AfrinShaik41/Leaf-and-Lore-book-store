import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from './assets/car1.jpg';
import c2 from './assets/car2.jpg'; 
import c3 from './assets/car3.jpg';
import c4 from './assets/car4.jpg';
import c5 from './assets/car5.jpg';
import c6 from './assets/car6.jpg';

const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  const reviews = [
    { img: c1, author: 'Sarah J.', text: `"Leaf & Lore is a haven for book lovers. The selection is thoughtfully curated, and the atmosphere is so inviting. I always leave with a new favorite book!"` },
    { img: c2, author: 'Mark T.', text: `"Amma dairy loo konni pegilu book was next level. It's my go-to place for finding hidden literary gems."` },
    { img: c3, author: 'Emily R.', text: `"Leaf & Lore has a magical way of making every visit feel special. The book recommendations are always spot on!"` },
    { img: c4, author: 'John D.', text: `"Leaf & Lore is my favorite bookstore!The staff is incredibly knowledgeable and always ready to help you find your next great read."` },
    { img: c5, author: 'Lisa M.', text: `"I love the cozy atmosphere.of Leaf & Lore. It's the perfect place to spend a rainy afternoon with a good book."` },
    { img: c6, author: 'David S.', text: `"Leaf & Lore has a fantastic selection of books,  from bestsellers to hidden gems. I always find something new to read!"` }
  ];

  return (
    <div className='flex flex-col justify-center items-center bg-orange-200 mt-6 h-screen'>
      <div className='-mt-60'>
      <h2 className='text-5xl font-bold  text-gray-700'>Customer Reviews</h2>
      <p className='text-black text-lg mt-5'>"Leaf & Lore has transformed my reading experience!"</p>
      <p className='text-black text-lg'>"I love the curated selection of books!"</p>
      </div>
      <div className='w-full max-w-2xl   '>
        <Slider {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="px-2">
              <div className="bg-white p-4 rounded-2xl   mt-10 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                <p className='text-xl'>{r.text}</p>
                <div className='flex items-center mt-4'>
                  <img src={r.img} alt={`Customer ${i+1}`} className='w-15 h-17 object-cover rounded-full mr-4' />
                  <p className='text-lg'>– {r.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default Customer;
