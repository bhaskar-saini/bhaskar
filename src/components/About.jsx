import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                I am currently a <b>Software Development Engineer</b> at
                <a href="https://www.aboutamazon.com/"> Amazon</a>, working in the AWS
                sector under team Route 53. At the same time, I am undertaking a
                part-time <b>Master's of Science</b> in <b>Software Engineering</b> at{" "}
                <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
            </p>
            <p>Here are some technologies I have been working with:</p>

            <ul className="teckStack">
              {techStack.map((tech, index)=>(
                <div key={index} data-aos = "fade-up" data-aos-delay = {`${(index+1)*100}`}>
                  <li>{tech}</li>
                </div>
              ))}
            </ul>

            <p>
              Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About