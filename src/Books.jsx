// Books.jsx
import React, { useState, useMemo } from 'react';
import i from'./assets/img1.jpg';
import i1 from'./assets/img2.jpg';
import i2 from'./assets/img3.jpg';
import i3 from './assets/img4.jpg'; 
import i4 from'./assets/img5.jpg';
import i5 from'./assets/img6.jpg';
import i6 from'./assets/img7.jpg';
import i7 from'./assets/img8.jpg';
import i8 from'./assets/img9.jpg';
import i9 from'./assets/img10.jpg';
import i10 from './assets/img11.jpg';
import i11 from'./assets/img12.jpg';
import i12 from'./assets/img13.jpg';
import i13 from'./assets/img14.jpg';
import i14 from'./assets/img15.jpg';
import i15 from'./assets/img16.jpg';  

// Importing images for the book covers   


const booksData = [
  {
    title: 'Something I Never Told You',
    price: '₹299',
    description: 'A heartfelt novel about family and identity.',
    image: i,
  },
  {
    title: 'Looking for Alaska',
    price: '₹399',
    description: 'John Green’s poignant coming-of-age novel about love and loss.',
    image: i1,
  },
  {
    title: 'Rich Dad Poor Dad',
    price: '₹400',
    description: 'Robert Kiyosaki’s guide to financial independence and wealth building.',
    image: i2,
  },
  {
    title: 'Amma Diary loo Konni Pegilu',
    price: '₹299',
    description: 'A humorous and insightful look into the life of a Telugu mother.A beautifull love story of mother.',
    image: i3,
  },
  {
    title: '90s Love Story',
    price: '₹499',
    description: 'A nostalgic trip back to the 1990s, exploring love and friendship.',
    image: i4,
  },
  {
    title: 'Naalo unna prema',
    price: '₹399',
    description: 'A beautiful love story that transcends time and societal norms.',
    image: i5,
  },

  {
    title: 'Nenu mee bramhanamdam',
    price: '₹300',
    description: 'It is a biography of Brahmanandam and his childhood memories,success and failures.',
    image: i6,
    
  },
  {
    title: 'Radha Madhavam',
    price: '₹200',
    description: 'It is a beautiful love story of Radha and Krishna, exploring their divine love and connection.',
    image: i7,
  },
  {
    title: 'Meditation and Methods',
    price: '₹499',
    description: 'These are the methods of meditation that can help you achieve inner peace and mindfulness of swami Vivekananda.',
    image: i8,
  },
  {
    title: 'Dr.Apj Abdul Kalam',
    price: '₹399',
    description: 'A biography of Dr. A.P.J. Abdul Kalam, the Missile Man of India.',
    image: i9,
  },
  {
    title: 'Sherlocks',
    price: '₹499',
    description: 'A biography of Sherlock Holmes, the famous detective created by Sir Arthur Conan Doyle.',
    image: i10,
  },
  {
    title: 'The Indian Polity',
    price: '₹400',
    description: 'A comprehensive guide to the Indian political system.',
    image: i11,
  },
  {
    title: '826 kilometers ',
    price: '₹200',
    description: 'It is a beautiful love story of two people who meet after a long time and fall in love again.',
    image: i12,
  },
  {
    title: 'paramanandayya shishyula katha',
    price: '₹199',
    description: 'A collection of stories about the life and teachings of Paramanandayya.',
    image: i13,
  },
  {
    title: 'Moral Stories',
    price: '₹399',
    description: 'A collection of moral stories for children.',
    image: i14,
  },
  {
    title: 'Akbar and Birbal',
    price: '₹299',
    description: 'A collection of witty tales about the legendary Mughal emperor Akbar and his wise advisor Birbal.',
    image: i15,
  }
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = useMemo(
    () =>
      booksData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <div className="flex flex-col items-center bg-orange-200 p-6 mt-6">
      <h1 className="text-5xl font-bold text-gray-700 mb-2 text-center">
        Books
      </h1>
      <p className="text-lg mb-4 text-center">
        "Discover your next great read."
      </p>

      <input
        type="text"
        placeholder="Search books by title..."
        className="border rounded px-4 py-2 mb-6 w-full max-w-md"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      { filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {filteredBooks.map((book, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow flex">
              {/* Book cover image */}
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-24 h-32 object-cover rounded mr-4"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-600 mb-2">{book.description}</p>
                <p className="font-bold">{book.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition animate-pulse ">
                  Add to Cart
                </button>
                <button className="mt-2 ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
          <p className="text-gray-600">
            No books found matching "{searchTerm}".
          </p>
        
      )}
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition animate-bounce">
        📚 Explore More Books
      </button>
    </div>
  );
};

export default Books;
