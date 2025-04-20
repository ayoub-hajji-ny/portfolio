import React from 'react';
import TheOne from '../assets/profil.jpeg';
import CV from '../assets/CV Ayoub Cyber 2.pdf'; // Import the CV file

export const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={TheOne}
        alt="Profile"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Ayoub Hajji
        </span>
        , Future IT Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I am a computer engineering student at EPITA, specializing in cybersecurity.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
          Contact me
        </button>
        <a
          href={CV} // Use the imported CV file
          download="CV Ayoub Cyber 2.pdf" // Enable download with a proper file name
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;