import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsData } from '../src/Datafiles';

const Bookdetails = () => {
  const { id } = useParams();
  const item = itemsData.find(book => book.id === parseInt(id));
  const [qty, setQty] = useState(1);

  if (!item) {
    return (
      <div className="text-center mt-10 text-2xl text-red-500">
        Book not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-lg max-w-6xl w-full flex flex-col md:flex-row p-6 gap-6">
        
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.title}</h1>
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              ⭐⭐⭐⭐☆ <span className="ml-2 text-gray-500">(4.5 / 5 ratings)</span>
            </div>
            <p className="text-gray-700 mb-3">{item.description}</p>

            {Array.isArray(item.details) && item.details.length > 0 ? (
              <ul className="mb-4 list-disc list-inside text-sm text-gray-600 space-y-1">
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic mb-4">No additional details available.</p>
            )}

            <p className="text-3xl font-semibold text-green-700">{item.price}</p>
            <p className="text-sm text-gray-600 mt-1">
              Inclusive of all taxes <br />
              <span className="text-green-600 font-medium">FREE Delivery</span> <span className="text-gray-500">Monday, July 8</span>
            </p>

            <div className="mt-3 text-sm text-gray-700">
              <p className="text-green-600 font-semibold">In Stock</p>
              <label className="block mt-2 mb-1 font-medium">Quantity:</label>
              <select
                value={qty}
                onChange={(e) => setQty(parseInt(e.target.value))}
                className="border rounded px-2 py-1"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>

              <p className="mt-3 italic text-blue-700">EMI starts at ₹45/month. No Cost EMI available</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition">
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
