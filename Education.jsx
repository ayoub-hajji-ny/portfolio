import React from "react";

const educationData = [
  {
    year: "2025 - En cours",
    title: "Autoformation en Cybersécurité – TryHackMe",
    description: "Suivi du parcours Complete Beginner : bases du réseau, Linux, Windows, attaques et défenses."
  },
  {
    year: "2024 - En cours",
    title: "EPITA – Ingénieur Informatique, spécialité Cybersécurité",
    description: "Cours : C, Python, SQL, Unix, Java, Bash/Shell, Dev Web, Système d’exploitation, Réseau, Cryptographie, etc."
  },
  {
    year: "Janv 2024 - Juin 2024",
    title: "Semestre d’échange – EPV-EHU (Espagne, San Sebastian)",
    description: "Cours : C, Java, LAN, VLAN, UDP, TCP, IAM, Firewall, SQL, JSON, API, HTML, CSS."
  },
  {
    year: "2022 - 2024",
    title: "EPITA – Classe préparatoire intégrée",
    description: "Cours : C, C#, Python, Algorithmes, Linux, Unity, Git."
  },
  {
    year: "2021 - 2022",
    title: "Abu Lkhir - Baccalauréat International : Science Mathématique (Maroc, Berkane)",
    description: "Mention : Bien."
  }
];

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index}>
          <h3>{edu.year}</h3>
          <h4>{edu.title}</h4>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;