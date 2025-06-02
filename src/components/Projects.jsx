import React from 'react'
import {FolderRounded,GitHub,OpenInBrowser} from '@mui/icons-material';
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shiftex - Shift Planning System",
      description: "Developed a shift planning system to manage employee schedules across global time zones. Employees can create weekly availability, and admins can assign shifts based on availability.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman"],
      link: "https://shiftex.vercel.app",
      github: "https://github.com/bhaskar-saini/shift-planning-system"
    },
    {
      id: 2,
      title: "NeverSolo - Chat App",
      description: "A full-stack real-time chat application with one-to-one messaging, secure authentication, and WebSocket-based communication using Socket.IO.",
      tech: ["Node.js", "Socket.IO", "MongoDB", "Express.js", "React.js"],
      link: "https://neversolo.vercel.app",
      github: "https://github.com/bhaskar-saini/NeverSolo"
    },
    {
      id: 3,
      title: "NeverSolo - Chat App",
      description: "A responsive web application to track real-time cryptocurrency data, supporting currency conversion and paginated listings.",
      tech: ["React.js", "CSS", "HTML", "JavaScript"],
      link: "https://cyphercoin.vercel.app",
      github: "https://github.com/bhaskar-saini/Cyphercoin"
    },
    {
      id: 4,
      title: "CLI Todo Manager",
      description: "A command-line todo app that can use CRUD operations, built with Node.js.",
      tech: ["JavaScript"],
      github: "https://github.com/bhaskar-saini/cli-todo-manager"
    },
    {
      id: 5,
      title: "Hangman Game in CPP",
      description: "A terminal-based Hangman game implemented in C++, where players guess hidden words letter by letter within a limited number of attempts.",
      tech: ["C++","OOPs"],
      github: "https://github.com/bhaskar-saini/Hangman-Game-in-CPP"
    },
  ];
  return (
    <div className="projects" id='projects'>
      <div className="projects-header">
        <span>/projects</span>
      </div>
      <ul className="projects-grid">
        {
          projects.map((project)=>(
            <li className='projects-card'>
              <div className="card-header">
                <div className="folder-icon">
                  <FolderRounded></FolderRounded>
                </div>
                <div className="external-links">
                  <a href={project.github} className="github-icon" target="_blank" rel="noopener noreferrer">
                    <GitHub></GitHub>
                  </a>
                  <a href={project.link} className="link-icon" target="_blank" rel="noopener noreferrer">
                    <OpenInBrowser></OpenInBrowser>
                  </a>
                </div>
              </div>
              <div className="card-title">{project.title}</div>
              <div className="card-desc">{project.description}</div>
              <div className="card-tech">{project.tech}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Projects