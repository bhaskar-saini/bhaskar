import React from 'react';
import {FolderOpenRounded,GitHub,OpenInBrowser} from '@mui/icons-material';
import '../styles/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projects = [
    {
      title: "Shiftex - Shift Planning System",
      description: "Developed a shift planning system to manage employee schedules across global time zones. Employees can create weekly availability, and admins can assign shifts based on availability.",
      tech: ["MongoDB, ", "Express.js, ", "React.js, ", "Node.js, ", "Postman"],
      link: "https://shiftex.vercel.app",
      github: "https://github.com/bhaskar-saini/shift-planning-system"
    },
    {
      title: "NeverSolo - Chat App",
      description: "A full-stack real-time chat application with one-to-one messaging, secure authentication, and WebSocket-based communication using Socket.IO.",
      tech: ["Node.js, ", "Socket.IO, ", "MongoDB, ", "Express.js, ", "React.js"],
      link: "https://neversolo.vercel.app",
      github: "https://github.com/bhaskar-saini/NeverSolo"
    },
    {
      title: "Cyphercoin",
      description: "A responsive web application to track real-time cryptocurrency data, supporting currency conversion and paginated listings.",
      tech: ["React.js, ", "CSS, ", "HTML, ", "JavaScript"],
      link: "https://cyphercoin.vercel.app",
      github: "https://github.com/bhaskar-saini/Cyphercoin"
    },
    {
      title: "CLI Todo Manager",
      description: "A command-line todo app that can use CRUD operations, built with Node.js.",
      tech: ["JavaScript"],
      github: "https://github.com/bhaskar-saini/cli-todo-manager"
    },
    {
      title: "Hangman Game in CPP",
      description: "A terminal-based Hangman game implemented in C++, where players guess hidden words letter by letter within a limited number of attempts.",
      tech: ["C++, ","OOPs"],
      github: "https://github.com/bhaskar-saini/Hangman-Game-in-CPP"
    },
  ];
  return (
    <div className="projects" id='projects'>
      <div data-aos = "fade-up">
        <div className="projects-header">
          <span>/projects</span>
        </div>
        <ul className="projects-grid">
          {
            projects.map((project,index)=>(
              <li className='projects-card' key={index} data-aos = "fade-up" data-aos-delay={`${(index+1)*100}`}>
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRounded className='folder-icon' style={{ fontSize: 30 }}></FolderOpenRounded>
                  </div>
                  <div className="external-links">
                    <a href={project.github} className="github-icon" target="_blank" rel="noopener noreferrer">
                      <GitHub className='git-icon' style={{ fontSize: 20 }}></GitHub>
                    </a>
                    {project.link && (<a href={project.link} className="link-icon" target="_blank" rel="noopener noreferrer">
                      <OpenInBrowser className='open-icon' style={{ fontSize: 23 }}></OpenInBrowser>
                    </a>)}
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
    </div>
  )
}

export default Projects