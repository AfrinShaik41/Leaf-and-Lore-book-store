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
import n from './assets/nataraj.png' ;
import n1 from './assets/apsara.jpg' ;
import n2 from './assets/pencils.jpg';
import e from './assets/neraser.jpg' ;
import e1 from './assets/aeeraser.jpg';
import e2 from './assets/coloreraser.jpg';
import c from './assets/colorpencils.jpg';
import c1 from './assets/crayons.jpg';
import c2 from './assets/oil.jpg';
import c3 from './assets/sketches.jpg';
import c4 from './assets/water.jpg';
import g from './assets/geometry.jpg';
import g1 from './assets/geomerty2.jpg';






// Importing images for the book covers   


const itemsData = [
  {
    title: 'Something I Never Told You',
    price: '₹299',
    description: 'A heartfelt novel about family and identity.',
    image: i,
    Catagory:'Book',
  },
  {
    title: 'Looking for Alaska',
    price: '₹399',
    description: 'John Green’s poignant coming-of-age novel about love and loss.',
    image: i1,
     Catagory:'Book',
  },
  {
    title: 'Rich Dad Poor Dad',
    price: '₹400',
    description: 'Robert Kiyosaki’s guide to financial independence and wealth building.',
    image: i2,
     Catagory:'Book',
  },
  {
    title: 'Amma Diary loo Konni Pegilu',
    price: '₹299',
    description: 'A humorous and insightful look into the life of a Telugu mother.A beautifull love story of mother.',
    image: i3,
     Catagory:'Book',
  },
  {
    title: '90s Love Story',
    price: '₹499',
    description: 'A nostalgic trip back to the 1990s, exploring love and friendship.',
    image: i4,
     Catagory:'Book',
  },
  {
    title: 'Naalo unna prema',
    price: '₹399',
    description: 'A beautiful love story that transcends time and societal norms.',
    image: i5,
     Catagory:'Book',
  },

  {
    title: 'Nenu mee bramhanamdam',
    price: '₹300',
    description: 'It is a biography of Brahmanandam and his childhood memories,success and failures.',
    image: i6,
     Catagory:'Book',
    
  },
  {
    title: 'Radha Madhavam',
    price: '₹200',
    description: 'It is a beautiful love story of Radha and Krishna, exploring their divine love and connection.',
    image: i7,
     Catagory:'Book',
  },
  {
    title: 'Meditation and Methods',
    price: '₹499',
    description: 'These are the methods of meditation that can help you achieve inner peace and mindfulness of swami Vivekananda.',
    image: i8,
     Catagory:'Book',
  },
  {
    title: 'Dr.Apj Abdul Kalam',
    price: '₹399',
    description: 'A biography of Dr. A.P.J. Abdul Kalam, the Missile Man of India.',
    image: i9,
     Catagory:'Book',
  },
  {
    title: 'Sherlocks',
    price: '₹499',
    description: 'A biography of Sherlock Holmes, the famous detective created by Sir Arthur Conan Doyle.',
    image: i10,
     Catagory:'Book',
  },
  {
    title: 'The Indian Polity',
    price: '₹400',
    description: 'A comprehensive guide to the Indian political system.',
    image: i11,
     Catagory:'Book',
  },
  {
    title: '826 kilometers ',
    price: '₹200',
    description: 'It is a beautiful love story of two people who meet after a long time and fall in love again.',
    image: i12,
     Catagory:'Book',
  },
  {
    title: 'paramanandayya shishyula katha',
    price: '₹199',
    description: 'A collection of stories about the life and teachings of Paramanandayya.',
    image: i13,
     Catagory:'Book',
  },
  {
    title: 'Moral Stories',
    price: '₹399',
    description: 'A collection of moral stories for children.',
    image: i14,
     Catagory:'Book',
  },
  {
    title: 'Akbar and Birbal',
    price: '₹299',
    description: 'A collection of witty tales about the legendary Mughal emperor Akbar and his wise advisor Birbal.',
    image: i15,
     Catagory:'Book',
  },
  {
    title: 'Apsara Pencils',
    price: '₹30',
    description: 'Smooth writing pencils ideal for school and office.',
    image: n1,
    category: 'Pencil',
  },
  {
    title: 'Nataraj Pencils',
    price: '₹25',
    description: 'Smooth writing pencils ideal for school and office.',
    image: n,
    category: 'Pencil',
  },
  {
    title: 'Color Pencils',
    price: '₹40',
    description: 'Smooth writing pencils ideal for school and office.',
    image: n2,
    category: 'Pencil',
  },
  {
    title: 'Nataraj Erasers',
    price: '₹10',
    description: 'Soft erasers for clean erasing.',
    image: e,
    category: 'Eraser',
  },
  {
     title: 'apsara Erasers',
    price: '₹20',
    description: 'Soft erasers for clean erasing.',
    image: e1,
    category: 'Eraser',
  },
  {
    title: 'color Erasers',
    price: '₹10',
    description: 'Soft erasers for clean erasing.',
    image: e2,
    category: 'Eraser',

  },
  {
    title: 'color pencils',
    price: '₹10',
    description: 'color pencils for neat coloring.',
    image: c,
    category: 'colors',

  },
  {
    title: 'crayons',
    price: '₹20',
    description: 'crayons are friendly for children.',
    image: c1,
    category: 'colors',

  },
  {
    title: 'oil colors',
    price: '₹30',
    description: 'oil colrs for good designing.',
    image: c2,
    category: 'colors',

  },
  {
    title: 'sketches',
    price: '₹10',
    description: 'Sketches are more effective.',
    image: c3,
    category: 'colors',

  },
  {
    title: 'water ccolors',
    price: '₹40',
    description: 'water colors are more effective.',
    image: c4,
    category: 'colors',
  },
  {
    title: 'geometry box',
    price: '₹100',
    description: 'Geometry box have all items.',
    image: g,
    category: 'geometry',
  },
  {
    title: 'geo bo',
    price: '₹150',
    description: 'geometry are more effective.',
    image: g1,
    category: 'geometry',
  },
   
];

const uniqueCategories = [...new Set(itemsData.map(item => item.category))];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredItems = useMemo(() => {
    return itemsData.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(item.category);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  return (
    <div className="flex flex-col items-center bg-orange-200 p-6 mt-6 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-700 mb-2 text-center">Books & Stationery</h1>
      <p className="text-lg mb-6 text-center">"Search and filter your favorites easily."</p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title..."
        className="border rounded px-4 py-2 mb-4 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Checkboxes */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {uniqueCategories.map((category, idx) => (
          <label key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow cursor-pointer">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="capitalize">{category}</span>
          </label>
        ))}
      </div>

      {/* Filtered Items */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow flex">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-32 object-cover rounded mr-4"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="font-bold">{item.price}</p>
                <div className="mt-2 flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition animate-pulse">
                    Add to Cart
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">
          No items found matching your search or category.
        </p>
      )}

      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition animate-bounce">
        📚 Explore More
      </button>
    </div>
  );
};

export default Books;
