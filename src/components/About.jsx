import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  const techStack = [
    "C++",
    "JavaScript ES6+",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "SQL"
  ];

  useEffect(()=>{
    AOS.init({
      duration: 2000,
      once: true,
    });
  },[]);

  return (
    <div className="about" id='about'>
      <div data-aos="fade-up">
        <div className="about-header">
          <span className='about-title'>/ about me</span>
        </div>

        <div className="about-content">
          <div className="about-desc">
            <p>
                I am a Computer Science graduate actively seeking for <b>Software Development Engineer</b> roles. At the same time, I am working on my development skills by building projects with MERN Stack and keeping my hands busy with JavaScript and TypeScript. I have in-depth knowledge of Data Structures and Algorithms. I like problem solving so am continuously improving it by consistently solving problems at <a href = "https://leetcode.com/u/bhaskarsaini/" target="_blank" rel="noopener noreferrer">LeetCode</a>.
            </p>
            <p>Here are some technologies I have been working with:</p>

            <ul className="techStack">
              {techStack.map((tech, index)=>(
                <div key={index} data-aos = "fade-up" data-aos-delay = {`${(index+1)*100}`}>
                  <li>{tech}</li>
                </div>
              ))}
            </ul>

            <p>
              I'm interested in Back-end development, Software infrastructures, Cloud architectures and Artificial Intelligence. I also play chess and badminton in my free time.
            </p>
          </div>
          <div className="about-image">
            <img src='/profile.png' alt="Bhaskar Saini" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About