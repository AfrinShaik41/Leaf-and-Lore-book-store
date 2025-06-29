import React from 'react'
import b1 from './assets/1st.jpg'

const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-orange-200 h-screen'>
      <div>
        <img src={b1} alt="1st" className='w-80 h-80 rounded-3xl mt-12'/>
      </div>
      <div>
        <h1 className='text-5xl font-bold mb-2 text-gray-700 ml-5 mt-5'>Leaf and Lore</h1>
        <p className='text-lg  mb-4'>"Where every page turns into a new journey."</p>
        <button className='bg-blue-500 text-white py-2 px-4 rounded ml-27 animate-bounce'>Start journey</button>
      </div>
    </div>
  )
}

export default Home
