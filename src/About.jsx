import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const team = [
  {
    title: 'Our Story',
    description: 'Leaf & Lore started with a passion for storytelling and the magic of books. We believe every book has a soul, and every reader deserves a unique journey.',
    bg: 'bg-pink-300',
  },
  {
    title: 'Our Mission',
    description: 'To bring handpicked literature, indie gems, and inspirational books to readers of all ages — wrapped in warmth, love, and creativity.',
    bg: 'bg-purple-300',
  },
  {
    title: 'Our Values',
    description: 'We value curiosity, calmness, and connection — whether it’s through a bedtime story, a poetry collection, or a quiet morning read.',
    bg: 'bg-yellow-300',
  },
];

const AboutUs = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-orange-200 py-10 px-4 flex flex-col items-center mt-6">
      <h1 className="text-5xl font-bold mb-4 text-black">About Us</h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        Get to know who we are, what we stand for, and what drives our love for books and creativity.
      </p>

      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {team.map((card, index) => (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className="transform scale-90 transition-transform duration-300 hover:scale-100"
              style={{ perspective: '1200px' }}
            >
              <div
                className={`relative h-[260px] transition-transform duration-700 ${
                  flippedIndex === index ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div className={`absolute inset-0 p-6 rounded-xl shadow-xl ${card.bg} backface-hidden`}>
                  <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                  <p className="text-base">{card.description.substring(0, 100)}...</p>
                  <p className="mt-4 text-sm italic text-gray-700">Tap to read more</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 p-6 rounded-xl shadow-xl bg-black text-white transform rotate-y-180 backface-hidden flex items-center justify-center text-center">
                  <p className="text-lg font-medium">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
