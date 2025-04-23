import React from 'react';
import AboutImage from '../assets/profile1.png';
import { FaCode, FaDatabase, FaGitAlt, FaLinux, FaMicrosoft } from 'react-icons/fa';

export const About = ({ language }) => {
  const translations = {
    en: {
      title: 'About Me',
      description:
        'Currently a computer engineering student at EPITA, I am seeking an apprenticeship contract for the next three years. Passionate, determined, and meticulous, I aim to enhance my technical skills while contributing to an innovative company.',
      skillsTitle: 'Skills',
      languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'French', level: 'Bilingual' },
        { name: 'English', level: 'B2' },
        { name: 'Spanish', level: 'A1' },
      ],
      skillLevels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        proficient: 'Proficient',
      },
    },
    fr: {
      title: 'À Propos de Moi',
      description:
        'Actuellement étudiant en ingénierie informatique à EPITA, je recherche un contrat d’apprentissage pour les trois prochaines années. Passionné, déterminé et méticuleux, je vise à améliorer mes compétences techniques tout en contribuant à une entreprise innovante.',
      skillsTitle: 'Compétences',
      languages: [
        { name: 'Arabe', level: 'Natif' },
        { name: 'Français', level: 'Bilingue' },
        { name: 'Anglais', level: 'B2' },
        { name: 'Espagnol', level: 'A1' },
      ],
      skillLevels: {
        advanced: 'Avancé',
        intermediate: 'Intermédiaire',
        proficient: 'Compétent',
      },
    },
  };

  const skills = [
    { name: 'C', icon: <FaCode />, level: 'advanced' },
    { name: 'C#', icon: <FaCode />, level: 'advanced' },
    { name: 'Python', icon: <FaCode />, level: 'advanced' },
    { name: 'SQL', icon: <FaDatabase />, level: 'intermediate' },
    { name: 'Java', icon: <FaCode />, level: 'intermediate' },
    { name: 'R', icon: <FaCode />, level: 'intermediate' },
    { name: 'Git', icon: <FaGitAlt />, level: 'advanced' },
    { name: 'Linux', icon: <FaLinux />, level: 'advanced' },
    { name: 'Microsoft Office 365', icon: <FaMicrosoft />, level: 'proficient' },
  ];

  const { title, description, skillsTitle, languages, skillLevels } = translations[language];

  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>{title}</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img
            src={AboutImage}
            alt=''
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          <div className='flex-1'>
            <p className='text-lg mb-8 text-justify'>{description}</p>
            <h3 className='text-2xl font-bold mb-6'>{skillsTitle}</h3>
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
                  <p className='text-sm text-gray-400'>{skillLevels[skill.level]}</p>
                </div>
              ))}
            </div>
            <div className='mt-12 flex justify-between text-center'>
              {languages.map((lang, index) => (
                <div key={index}>
                  <h3
                    className='text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500'
                  >
                    {lang.name}
                  </h3>
                  <p>{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;