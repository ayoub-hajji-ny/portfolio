import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>Ayoub</div>
        <div className='hidden md:flex space-x-8 items-center'>
          <a href='#home' className='hover:text-gray-400 transition duration-300'>Home</a>
          <a href='#about' className='hover:text-gray-400 transition duration-300'>About Me</a>
          <a href='#projects' className='hover:text-gray-400 transition duration-300'>Projects</a>
          <a href='#contact' className='hover:text-gray-400 transition duration-300'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hidden md:inline-block transform transition-transform duration-300 however:scale-105 px-4 py-2 rounded-full'>
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;