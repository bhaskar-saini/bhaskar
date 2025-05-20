import {Link} from "react-router-dom";
import {EmailRounded, LinkedIn, GitHub, IntegrationInstructionsRounded} from '@mui/icons-material';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='name'><Link to="/">Bhaskar Saini</Link></div>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
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