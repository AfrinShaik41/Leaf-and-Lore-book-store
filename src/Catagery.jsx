import React from 'react'
import l from './assets/love.png'
import b from './assets/book14.png'
import h from './assets/horro.png'
import bb from './assets/book13.png'
import s from './assets/story.png'
import n from './assets/novel.png'

const Catagery = () => {
  return (
    <div className='bg-orange-200 mt-6 py-10 px-4 justify-center items-center flex flex-col '>
        <h1 className='text-5xl font-bold mb-2 text-black mt-4'>Your's Choice</h1>
      <p className='text-lg mb-4'>"Choose from a variety of book genres to match your mood and interests."</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        <div className='bg-pink-400 max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={l} alt='Love' className='w-40 h-40 object-contain mb-4 animate-bounce rounded-3xl'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Love</h1>
          <p className='text-lg text-center'>
            Explore heartwarming tales of romance, passion, and emotional journeys that celebrate the beauty of love in all its forms.
          </p>
        </div>

        <div className='bg-blue-400 max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={b} alt='Comedy' className='w-40 h-40 object-contain mb-4 animate-bounce'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Comedy</h1>
          <p className='text-lg text-center'>
            Dive into hilarious stories filled with wit, humor, and laughter—perfect for brightening your day and lifting your spirits.
          </p>
        </div>

        <div className='bg-gray-400 max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={h} alt='Horror' className='w-40 h-40 object-contain mb-4 animate-bounce'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Horror</h1>
          <p className='text-lg text-center'>
            Experience spine-chilling tales and eerie adventures that will keep you on the edge of your seat and send shivers down your spine.
          </p>
        </div>

        <div className='bg-amber-400 max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={bb} alt='Biography' className='w-50 h-50 object-contain mb-4 animate-bounce'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Biography</h1>
          <p className='text-lg text-center'>
            Discover inspiring life stories of remarkable individuals—their struggles, achievements, and the journeys that shaped history.
          </p>
        </div>

        <div className='bg-white max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={s} alt='Story' className='w-40 h-40 object-contain mb-4 animate-bounce'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Story</h1>
          <p className='text-lg text-center'>
            Enjoy captivating stories that spark your imagination, touch your heart, and transport you to new worlds with every page.
          </p>
        </div>

        <div className='bg-purple-400 max-w-sm rounded-2xl shadow-lg p-4 flex flex-col items-center'>
          <img src={n} alt='Novels' className='w-30 h-30 object-contain mb-4 animate-bounce rounded-3xl'/>
          <h1 className='font-bold text-4xl mb-2 animate-wiggle'>Novels</h1>
          <p className='text-lg text-center'>
            Immerse yourself in long-form narratives that weave together unforgettable characters, intricate plots, and powerful emotions across every page.
          </p>
        </div>
      </div>
     <button className='bg-blue-500 text-white py-4 px-8 rounded ml-5 mt-10 animate-bounce'>📚 Select </button>
    </div>
  )
}

export default Catagery
