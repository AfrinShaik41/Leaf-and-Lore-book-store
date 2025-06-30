import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    name: ' ✏️ Pencils',
    description: 'Smooth and sharp pencils for daily writing and sketching.',
    types: 'apsara pencils, nataraj pencils, penpencil , Color Pencils',
    bg: 'bg-yellow-200',
  },
  {
    name: '🎨 Colors',
    description: 'Bright and vibrant color sets for art and creativity.',
    types:'Crayons , Water Colors, Color pens',
    bg: 'bg-pink-300',
  },
  {
    name: '  📚 Books',
    description: 'Handpicked notebooks and journals for all ages.',
    types:'notes,gk books,guides',
    bg: 'bg-blue-200',
  },
  {
    name: '  📐 Geometry',
    description: 'Complete geometry toolkits for students and professionals.',
    types:'rounder,divider,protarctor',
    bg: 'bg-green-200',
  },
  {
    name: ' 🧽 Erasers',
    description: 'Soft erasers that cleanly remove pencil marks.',
    types:'apsara erasers, nataraj erasers , color eraasers',
    bg: 'bg-purple-300',
  },
  { 
    name: '✂️ Sharpener',
    description: 'Durable sharpeners for quick and clean sharpening.',
    types:'apsara sharpners, nataraj sharpners , color sharpners',
    bg: 'bg-red-200',
  },
]

const Other = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const [flippedIndex, setFlippedIndex] = useState(null)

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className='bg-orange-200 mt-6 py-10 px-4 flex flex-col items-center h-screen'>
      <h1 className='text-5xl font-bold mb-2 text-black mt-4'>Other Items</h1>
      <p className='text-lg mb-6 text-center px-2'>"Choose any item you want from this store."</p>

      <div className='w-full max-w-md'>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} onClick={() => handleFlip(index)} className='perspective-[1000px] px-2'>
              <div
                className={`relative w-[100%] h-[220px] transition-transform duration-700 ${
                  flippedIndex === index ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-xl shadow-lg p-6 backface-hidden ${item.bg}`}
                >
                  <h2 className='text-2xl font-bold mb-2'>{item.name}</h2>
                  <p className='text-base'>{item.description}</p>
                  <h1 className='text-2xl mt-4'>Types:</h1>
                  <span className='text-base'>{item.types}</span>
                </div>

                {/* Back */}
                <div
                  className='absolute inset-0 rounded-xl shadow-lg p-6 flex items-center justify-center bg-black text-white transform rotate-y-180 backface-hidden'
                >
                  <p className='text-xl font-semibold'>You selected {item.name}!</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button  className='bg-blue-500 px-10 py-3 mt-20 text-white rounded-xl animate-bounce'>Select</button>
    </div>
  )
}

export default Other
