import React from 'react';

// Reusable component for each education entry
const EducationEntry = ({ year, title, description }) => (
  <div>
    <h3 className='text-2xl font-semibold'>{year} - {title}</h3>
    <p className='text-gray-300'>{description}</p>
  </div>
);

export const Education = ({ language }) => {
  const translations = {
    en: {
      title: 'My Education',
      entries: [
        {
          year: '2025',
          title: 'Self-Training in Cybersecurity – TryHackMe',
          description: 'Courses: Followed the Complete Beginner path: networking basics, Linux, Windows, attacks, and defenses.',
        },
        {
          year: '2024',
          title: 'EPITA – Computer Engineering, Cybersecurity Specialization',
          description: 'Courses: C, Python, SQL, Unix, Java, Bash/Shell, Web Development, Operating Systems, Networking, Cryptography, etc. (Ongoing)',
        },
        {
          year: 'Jan 2024 - Jun 2024',
          title: 'Exchange Semester – EPV-EHU (Spain, San Sebastian)',
          description: 'Courses: C, Java, LAN, VLAN, UDP, TCP, IAM, Firewall, SQL, JSON, API, HTML, CSS. (Completed)',
        },
        {
          year: '2022 - 2024',
          title: 'EPITA – Integrated Preparatory Classes',
          description: 'Courses: C, C#, Python, Algorithms, Linux, Unity, Git. (Completed)',
        },
        {
          year: '2021 - 2022',
          title: 'Abu Lkhir - International Baccalaureate: Mathematical Sciences (Morocco, Berkane)',
          description: 'Distinction: Good (Completed)',
        },
      ],
    },
    fr: {
      title: 'Mon Éducation',
      entries: [
        {
          year: '2025',
          title: 'Auto-Formation en Cybersécurité – TryHackMe',
          description: 'Cours : Suivi du parcours Débutant Complet : bases du réseau, Linux, Windows, attaques et défenses.',
        },
        {
          year: '2024',
          title: 'EPITA – Ingénierie Informatique, Spécialisation Cybersécurité',
          description: 'Cours : C, Python, SQL, Unix, Java, Bash/Shell, Développement Web, Systèmes d’Exploitation, Réseaux, Cryptographie, etc. (En cours)',
        },
        {
          year: 'Jan 2024 - Jun 2024',
          title: 'Semestre d’Échange – EPV-EHU (Espagne, Saint-Sébastien)',
          description: 'Cours : C, Java, LAN, VLAN, UDP, TCP, IAM, Pare-feu, SQL, JSON, API, HTML, CSS. (Terminé)',
        },
        {
          year: '2022 - 2024',
          title: 'EPITA – Classes Préparatoires Intégrées',
          description: 'Cours : C, C#, Python, Algorithmes, Linux, Unity, Git. (Terminé)',
        },
        {
          year: '2021 - 2022',
          title: 'Abu Lkhir - Baccalauréat International : Sciences Mathématiques (Maroc, Berkane)',
          description: 'Mention : Bien (Terminé)',
        },
      ],
    },
  };

  const { title, entries } = translations[language];

  return (
    <div className='bg-black text-white text-center py-16' id='education'>
      <h2 className='text-3xl font-bold mb-8'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          {title}
        </span>
      </h2>
      <div className='space-y-6'>
        {entries.map((entry, index) => (
          <EducationEntry
            key={index}
            year={entry.year}
            title={entry.title}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;