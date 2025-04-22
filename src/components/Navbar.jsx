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
            {/*<a href='#home' className='hover:text-gray-400 transition duration-300'>
              {translations[language].home}
            </a>*/}
            <a href='#about' className='hover:text-gray-400 transition duration-300'>
              {translations[language].about}
            </a>
            <a href='#education' className='hover:text-gray-400 transition duration-300'>
              {translations[language].education}
            </a>
            <a href='#projects' className='hover:text-gray-400 transition duration-300'>
              {translations[language].projects}
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
          <div
            className='bg-black text-white p-6 rounded-lg shadow-lg w-90 text-center relative flex flex-col items-start'
            style={{
              backgroundImage: 'url("/cybersecurity-bg.png")', // Add your cybersecurity-themed image here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px solid #00ff99', // Cybersecurity green glow effect
              boxShadow: '0 0 20px #00ff99',
            }}
          >
            <h2 className='text-2xl font-bold mb-4 self-center'>Ayoub HAJJI <br /> - votre future apprenti en IT -</h2>
            <p className='mb-2 pl-20'>📍 <span className="ml-2">Le Kremlin-Bicêtre, 94270</span></p>
            <p className='mb-2 pl-20'>📞 <span className="ml-2">07 55 67 69 63</span></p>
            <p className='mb-2 pl-20'>📧 <span className="ml-2">ayoub.hajji@epita.fr</span></p>
            <p className='mb-4 pl-20'>💼
              <a
                href='https://www.linkedin.com/in/ayb-haj/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:underline ml-2'
              >
                LinkedIn Profile
              </a>
            </p>
            <button
              onClick={closeModal}
              className='bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 self-center'
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