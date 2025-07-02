import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import b from './assets/book.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Your Choice', path: '/Catagery' },
    { name: 'Other', path: '/Other' },
    { name: 'Books', path: '/Books' },
    { name: 'Upcomings', path: '/Upcoming' },
    { name: 'Review', path: '/Customer' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={b} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-semibold">Leaf & Lore</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:underline text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
          <button className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded">Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center space-y-6 md:hidden transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="text-2xl hover:underline"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
