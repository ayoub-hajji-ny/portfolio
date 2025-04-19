import React, { useState } from 'react';
import BlaCar from '../assets/blaCar.png';
import Sudoku from '../assets/sudoku.png';
import LastCube from '../assets/LastCube.png';
import LastCubePdf from '../assets/LastCube_project.pdf';
import OCR_pdf from '../assets/OCR_Project.pdf';

const projects = [
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
];

export const Projects = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

    const handleViewMore = () => {
        setShowDetails(!showDetails);
    };

    const toggleProjectDetails = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div id="projects" className="bg-black text-white py-20">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Academic projects
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
                            {expandedProject === project.id && project.id === 2 && (
                                <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                                    <p className="text-gray-300">
                                        ShareTrip is a carpooling application developed in Java, using Hibernate as the database. It allows drivers to offer rides and users to book seats.
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Personal Projects
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div
                        key="vulscarper"
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                    >
                        <h3 className="text-2xl font-bold mb-2">VulScarper</h3>
                        <p className="text-gray-400 mb-4">A Python program automating security monitoring on ubuntu.com/security/notices.</p>
                        <button
                            onClick={handleViewMore}
                            className="bg-gradient-to-r from-red-400 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
                        >
                            {showDetails ? 'Show less' : 'View more'}
                        </button>
                        {showDetails && (
                            <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                                <p className="text-gray-300">
                                    VulScarper is a program developed in Python, designed to automate security monitoring on the website ubuntu.com/security/notices. It retrieves the HTML code of the pages, then uses artificial intelligence to extract key information about vulnerabilities:
                                </p>
                                <ul className="list-disc list-inside text-gray-300 mt-2">
                                    <li>The name of the vulnerability</li>
                                    <li>The affected system versions</li>
                                    <li>The CVE identifier</li>
                                </ul>
                                <p className="text-gray-300 mt-2">
                                    This data is then structured in a JSON file or stored in a database, facilitating its use for remediation or analysis.
                                </p>
                                <a
                                    href="https://github.com/ayoub-hajji-ny/VulScarper.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline mt-4 block"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;