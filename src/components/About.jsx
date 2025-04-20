import React from 'react';
import AboutImage from '../assets/profile1.png';
import { FaCode, FaDatabase, FaGitAlt, FaLinux, FaMicrosoft } from 'react-icons/fa';

export const About = () => {
  const skills = [
    { name: 'C', icon: <FaCode />, level: 'Advanced' },
    { name: 'C#', icon: <FaCode />, level: 'Advanced' },
    { name: 'Python', icon: <FaCode />, level: 'Advanced' },
    { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' },
    { name: 'Java', icon: <FaCode />, level: 'Intermediate' },
    { name: 'R', icon: <FaCode />, level: 'Intermediate' },
    { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
    { name: 'Linux', icon: <FaLinux />, level: 'Advanced' },
    { name: 'Microsoft Office 365', icon: <FaMicrosoft />, level: 'Proficient' },
  ];

  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img
            src={AboutImage}
            alt=''
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          <div className='flex-1'>
            <p className='text-lg mb-8 text-justify'>
              Currently a computer engineering student at EPITA, I am seeking an apprenticeship
              contract for the next three years, starting as soon as possible. Passionate,
              determined, and meticulous, I aim to enhance my technical skills while contributing
              to an innovative company.
            </p>
            <h3 className='text-2xl font-bold mb-6'>Skills</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'
                >
                  <div className='text-4xl text-gradient-to-r from-green-400 to-blue-500 mb-2'>
                    {skill.icon}
                  </div>
                  <h4 className='text-lg font-semibold'>{skill.name}</h4>
                  <p className='text-sm text-gray-400'>{skill.level}</p>
                </div>
              ))}
            </div>
            <div className='mt-12 flex justify-between text-center'>
            <div>
                <h3
                  className='text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500'
                >
                  Arabic
                </h3>
                <p>Native</p>
              </div>
              <div>
                <h3
                  className='text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500'
                >
                  French
                </h3>
                <p>Bilingual</p>
              </div>
              <div>
                <h3
                  className='text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500'
                >
                  English
                </h3>
                <p>B2</p>
              </div>
              <div>
                <h3
                  className='text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500'
                >
                  Spanish
                </h3>
                <p>A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;