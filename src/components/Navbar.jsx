import {EmailRounded, LinkedIn, GitHub, IntegrationInstructionsRounded} from '@mui/icons-material';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='name'><a href="#">Bhaskar Saini</a></div>
      <ul className="navlinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <ul className="socials">
        <li><a href="mailto:bhaskarsaini333@gmail.com"><EmailRounded style={{ fontSize: 20 }}></EmailRounded></a></li>
        <li><a href="https://github.com/bhaskar-saini" target="_blank" rel="noopener noreferrer"><GitHub style={{fontSize: 20}}></GitHub></a></li>
        <li><a href="https://www.linkedin.com/in/bhaskar-saini" target="_blank" rel="noopener noreferrer"><LinkedIn style={{fontSize : 20}}></LinkedIn></a></li>
        <li><a href="https://leetcode.com/u/bhaskarsaini" target="_blank" rel="noopener noreferrer"><IntegrationInstructionsRounded style={{fontSize : 20}}></IntegrationInstructionsRounded></a></li>
      </ul>
    </nav>
  )
}

export default Navbar