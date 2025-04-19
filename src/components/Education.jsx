import React from 'react';

export const Education = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <h2 className='text-3xl font-bold mb-8'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          My Education
        </span>
      </h2>
      <div className='space-y-6'>
        <div>
          <h3 className='text-2xl font-semibold'>EPITA</h3>
          <p className='text-gray-300'>Computer Engineering - Specializing in Cybersecurity</p>
          <p className='text-gray-400'>2023 - Present</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>High School</h3>
          <p className='text-gray-300'>Science Stream</p>
          <p className='text-gray-400'>2019 - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;