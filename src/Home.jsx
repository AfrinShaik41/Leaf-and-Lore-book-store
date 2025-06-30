import React from 'react';
import Slider from "react-slick";
import b1 from './assets/book12.png';
import b2 from './assets/book12.jpg';
import b3 from './assets/book15.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable automatic sliding
    autoplaySpeed: 3000,   // 3 seconds per slide
    pauseOnHover:false, 
    
       // Pause when hovering over the slide
  };

  return (
    <div className=''>
      <Slider {...settings}>

        {/* Slide 1 */}
        <div className='bg-orange-200 h-screen flex justify-center items-center'>
          <div className='flex flex-row justify-center items-center'>
            <div>
              <img src={b1} alt="1st" className='w-140 h-140 rounded-3xl mt-12 mr-8' />
            </div>
            <div className='max-w-lg'>
              <span>#1 BESTSELLER ON THE SHELF</span>
              <h1 className='text-6xl font-bold mt-2'>Get Ready for a Reading Adventure!</h1>
              <p className='mt-8'>Join us as we explore the magical world of books.</p>
              <button className='bg-red-500 text-white py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📚 Read Now
              </button>
              <button className='text-black py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📖Your Bookshelf ➔
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='bg-orange-200 h-screen flex justify-center items-center'>
          <div className='flex flex-row justify-center items-center'>
            <div>
              <img src={b2} alt="2nd" className='w-140 h-140 rounded-3xl mt-12 mr-8' />
            </div>
            <div className='max-w-lg'>
              <span>#2 TOP BEST DUO</span>
              <h1 className='text-6xl font-bold mt-2'>Bring Back MY Favorite Book</h1>
              <p className='mt-8'>
                Adino steals a rare bookmark from his brother Grahami and uses it to mark his favourite pages.
                A voracious reader, Adino can't help himself. Grahami, organized blunt, is furious—he cannot
                contain his frustration toward Adino.
              </p>
              <button className='bg-red-500 text-white py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📚 Read Now
              </button>
              <button className='text-black py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📖Your Bookshelf ➔
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className='bg-orange-200 h-screen flex justify-center items-center'>
          <div className='flex flex-row justify-center items-center'>
            <div>
              <img src={b3} alt="3rd" className='w-120 h-120 rounded-3xl mt-12 mr-8' />
            </div>
            <div className='max-w-lg'>
              <span>#SOFT CORE LOVE</span>
              <h1 className='text-6xl font-bold mt-2'>Love Journey of the Readers</h1>
              <p className='mt-8'>Zade on a haunting journey through a shadowy realm, where love and danger intertwine.</p>
              <button className='bg-red-500 text-white py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📚 Read Now
              </button>
              <button className='text-black py-2 px-4 rounded ml-5 mt-10 animate-bounce'>
                📖Your Bookshelf ➔
              </button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Home;
