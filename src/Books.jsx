import React, { useState, useMemo } from 'react';
import { itemsData } from './Datafiles';
import { Link } from 'react-router-dom';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
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
    <div className="p-6">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow rounded">
            <Link to={`/book/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded mb-2 cursor-pointer"
              />
            </Link>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-green-700 font-semibold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
