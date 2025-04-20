import React, { useState } from 'react';
import BlaCar from '../assets/blaCar.png';
import Sudoku from '../assets/sudoku.png';
import LastCube from '../assets/LastCube.png';
import LastCubePdf from '../assets/LastCube_project.pdf';
import OCR_pdf from '../assets/OCR_Project.pdf';

export const Projects = ({ language }) => {
    const translations = {
        en: {
            academicTitle: 'Academic Projects',
            personalTitle: 'Personal Projects',
            projects: [
                {
                    id: 1,
                    name: 'OCR',
                    description: 'Development of an optical character recognition software to solve a Sudoku grid in C.',
                    image: Sudoku,
                    spec: OCR_pdf,
                },
                {
                    id: 2,
                    name: 'ShareTrip',
                    description: 'A carpooling application developed in Java using Hibernate database.',
                    image: BlaCar,
                },
                {
                    id: 3,
                    name: 'LastCube',
                    description: 'Using Unity to create a 3D multiplayer game.',
                    image: LastCube,
                    spec: LastCubePdf,
                },
            ],
            personalProjects: [
                {
                    id: 'vulscarper',
                    name: 'VulScarper',
                    description: 'A Python program automating security monitoring on ubuntu.com/security/notices.',
                    details: `VulScarper is a program developed in Python, designed to automate security monitoring on the website ubuntu.com/security/notices. It retrieves the HTML code of the pages, then uses artificial intelligence to extract key information about vulnerabilities:
                    - The name of the vulnerability
                    - The affected system versions
                    - The CVE identifier
                    This data is then structured in a JSON file or stored in a database, facilitating its use for remediation or analysis.`,
                    github: 'https://github.com/ayoub-hajji-ny/VulScarper.git',
                },
            ],
        },
        fr: {
            academicTitle: 'Projets Académiques',
            personalTitle: 'Projets Personnels',
            projects: [
                {
                    id: 1,
                    name: 'OCR',
                    description: 'Développement d’un logiciel de reconnaissance optique de caractères pour résoudre une grille de Sudoku en C.',
                    image: Sudoku,
                    spec: OCR_pdf,
                },
                {
                    id: 2,
                    name: 'ShareTrip',
                    description: 'Une application de covoiturage développée en Java en utilisant une base de données Hibernate.',
                    image: BlaCar,
                },
                {
                    id: 3,
                    name: 'LastCube',
                    description: 'Utilisation de Unity pour créer un jeu multijoueur en 3D.',
                    image: LastCube,
                    spec: LastCubePdf,
                },
            ],
            personalProjects: [
                {
                    id: 'vulscarper',
                    name: 'VulScarper',
                    description: 'Un programme Python automatisant la surveillance de sécurité sur ubuntu.com/security/notices.',
                    details: `VulScarper est un programme développé en Python, conçu pour automatiser la surveillance de sécurité sur le site ubuntu.com/security/notices. Il récupère le code HTML des pages, puis utilise l’intelligence artificielle pour extraire des informations clés sur les vulnérabilités :
                    - Le nom de la vulnérabilité
                    - Les versions du système affectées
                    - L’identifiant CVE
                    Ces données sont ensuite structurées dans un fichier JSON ou stockées dans une base de données, facilitant leur utilisation pour la remédiation ou l’analyse.`,
                    github: 'https://github.com/ayoub-hajji-ny/VulScarper.git',
                },
            ],
        },
    };

    const [showDetails, setShowDetails] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    const { academicTitle, personalTitle, projects, personalProjects } = translations[language];

    const toggleProjectDetails = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div id="projects" className="bg-black text-white py-20">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        {academicTitle}
                    </span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <button
                                onClick={() => toggleProjectDetails(project.id)}
                                className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
                            >
                                {expandedProject === project.id ? 'Show less' : 'View more'}
                            </button>
                            {expandedProject === project.id && project.spec && (
                                <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                                    <p className="text-gray-300">
                                        Detailed information about {project.name} can be found in the provided specification document.
                                    </p>
                                    <a
                                        href={project.spec}
                                        download
                                        className="text-blue-400 hover:underline"
                                    >
                                        Download Specification
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        {personalTitle}
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {personalProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
                            >
                                {showDetails ? 'Show less' : 'View more'}
                            </button>
                            {showDetails && (
                                <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                                    <p className="text-gray-300">{project.details}</p>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline mt-4 block"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;