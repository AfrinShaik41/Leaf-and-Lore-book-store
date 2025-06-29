import React from 'react'


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-orange-200 mt-6'>
      <h1 className='text-5xl font-bold mb-2 text-gray-700 mt-10'>About Us</h1>
      <p className='text-lg mb-4'>"We are passionate about books and stories."</p>
      <div className='bg-white max-w-2xl p-6 rounded-2xl '>
    <p className='text-xl'><span className=' text-2xl font-bold'>Welcome to Leaf & Lore</span> <br></br><br></br>a serene space where every page invites you into a new world, and every book is handpicked with heart.

Founded with a passion for storytelling and soulful reading, Leaf & Lore brings together a curated collection of timeless literature, hidden indie gems, inspiring non-fiction, and magical tales for young minds.<br></br><br></br>

<span className='animate-wiggle inline-block text-2xl'>📚</span> Whether you're a late-night reader, a poetry soul, or a curious learner, our bookshelves are designed to help you slow down and reconnect with the joy of reading.<br></br><br></br>

<span className='animate-wiggle inline-block text-2xl'>🌿</span> We believe in conscious reading — that's why we support local authors, offer sustainable packaging, and build a small community of thoughtful readers through book clubs and seasonal picks.

<br></br><br></br>From the first click to your doorstep, we hope every Leaf & Lore experience feels like a warm hug in book form.

Join our story. One page at a time.</p>
</div>
<button className='bg-blue-500 text-white py-2 px-4 rounded ml-5 mt-5 animate-bounce'>📚 Join Our Story </button>


    </div>
  )
}

export default About
