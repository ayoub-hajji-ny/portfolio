import React, { useState } from 'react';

const Navbar = ({ language, setLanguage }) => {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const translations = {
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact Me',
    },
    fr: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      education: 'Éducation',
      contact: 'Contactez-moi',
    },
  };

  return (
    <>
      <nav className='bg-black text-white px-8 md:px-16 lg:px-24 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold'>Ayoub</div>
          <div className='hidden md:flex space-x-8 items-center'>
            <a href='#home' className='hover:text-gray-400 transition duration-300'>
              {translations[language].home}
            </a>
            <a href='#about' className='hover:text-gray-400 transition duration-300'>
              {translations[language].about}
            </a>
            <a href='#projects' className='hover:text-gray-400 transition duration-300'>
              {translations[language].projects}
            </a>
            <a href='#education' className='hover:text-gray-400 transition duration-300'>
              {translations[language].education}
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <button
              onClick={handleContactClick}
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 hidden md:inline-block'
            >
              {translations[language].contact}
            </button>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className='bg-black text-white border border-gray-400 rounded px-2 py-1'
            >
              <option value='en'>EN</option>
              <option value='fr'>FR</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white text-black p-6 rounded-lg shadow-lg w-80 text-center'>
            <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
            <p className='mb-2'>📍 Le Kremlin-Bicêtre, 94270</p>
            <p className='mb-2'>📞 07 55 67 69 63</p>
            <p className='mb-2'>📧 ayoub.hajji@epita.fr</p>
            <p className='mb-4'>💼 ayb-haj</p>
            <button
              onClick={closeModal}
              className='bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;