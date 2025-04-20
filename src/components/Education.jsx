import React from 'react';

// Reusable component for each education entry
const EducationEntry = ({ year, title, description }) => (
  <div>
    <h3 className='text-2xl font-semibold'>{year} - {title}</h3>
    <p className='text-gray-300'>{description}</p>
  </div>
);

export const Education = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <h2 className='text-3xl font-bold mb-8'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          My Education
        </span>
      </h2>
      <div className='space-y-6'>
        <EducationEntry
          year="2025"
          title="Self-Training in Cybersecurity – TryHackMe"
          description="Courses: Followed the Complete Beginner path: networking basics, Linux, Windows, attacks, and defenses."
        />
        <EducationEntry
          year="2024"
          title="EPITA – Computer Engineering, Cybersecurity Specialization"
          description="Courses: C, Python, SQL, Unix, Java, Bash/Shell, Web Development, Operating Systems, Networking, Cryptography, etc. (Ongoing)"
        />
        <EducationEntry
          year="Jan 2024 - Jun 2024"
          title="Exchange Semester – EPV-EHU (Spain, San Sebastian)"
          description="Courses: C, Java, LAN, VLAN, UDP, TCP, IAM, Firewall, SQL, JSON, API, HTML, CSS."
        />
        <EducationEntry
          year="2022 - 2024"
          title="EPITA – Integrated Preparatory Classes"
          description="Courses: C, C#, Python, Algorithms, Linux, Unity, Git. (Completed)"
        />
        <EducationEntry
          year="2021 - 2022"
          title="Abu Lkhir - International Baccalaureate: Mathematical Sciences (Morocco, Berkane)"
          description="Distinction: Good (Completed)"
        />
      </div>
    </div>
  );
};

export default Education;