import React, { useState } from 'react';
import TheOne from '../assets/profile1.png';
import CV from '../assets/CV_Ayoub_Cyber_2.pdf';

export const Hero = ({ language }) => {
  const [showModal, setShowModal] = useState(false);

  const translations = {
    en: {
      title: "I'm Ayoub Hajji, Future IT Engineer",
      description: 'I am a computer engineering student at EPITA, specializing in cybersecurity.',
      contact: 'Contact me',
      resume: 'Resume',
    },
    fr: {
      title: "Je suis Ayoub Hajji, Futur Ingénieur Informatique",
      description: "Étudiant en ingénieurie informatique à l’EPITA spécialisé en cybersécurité, en recherche actif d’un apprentissage de trois ans à partir de septembre 2025",
      contact: 'Contactez-moi',
      resume: 'CV',
    },
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={TheOne}
        alt="Profile"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform translate-y-4 transition-transform duration-300 hover:scale-105'
        style={{objectPosition: 'top'}}
      />
      <h1 className='text-4xl font-bold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          {translations[language].title}
        </span>
      </h1>
      <p className='mt-4 text-lg text-gray-300'>{translations[language].description}</p>
      <div className='mt-8 space-x-4'>
        <button
          onClick={handleContactClick}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
        >
          {translations[language].contact}
        </button>
        <a
          href={CV}
          download="CV Ayoub Cyber 2.pdf"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
        >
          {translations[language].resume}
        </a>
      </div>

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
            <h2 className='text-2xl font-bold mb-4'>Ayoub HAJJI <br />- votre future apprenti en IT -</h2>
            <p className='mb-2 pl-20'>📍 Le Kremlin-Bicêtre, 94270</p>
            <p className='mb-2 pl-20'>📞 07 55 67 69 63</p>
            <p className='mb-2 pl-20'>📧 ayoub.hajji@epita.fr</p>
            <p className='mb-4 pl-20'>💼
              <a
                href="https://www.linkedin.com/in/ayb-haj/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-400 hover:underline'
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
    </div>
  );
};

export default Hero;