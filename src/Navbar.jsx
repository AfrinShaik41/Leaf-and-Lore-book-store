import React, { useState, useEffect } from 'react';
import b from './assets/book.jpg';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = ['Home', 'Book Review', 'About', 'Blogs', 'Contact'];

  return (
    <nav aria-label="Main navigation" className="flex justify-center items-center bg-gray-700 text-white mb-2 relative">
      <img src={b} alt="Book" className="w-25 h-25 rounded-full" />

      {/* Mobile menu toggle */}
      <button
        className="md:hidden cursor-pointer ml-4"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
      >
        {isOpen ? <IoClose size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-6 h-full text-2xl">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={toggleMenu}
                className="hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded">Get Started</button>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex ml-10 space-x-6">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className="text-xl hover:underline"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop buttons */}
      <div className="hidden md:flex ml-auto items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
