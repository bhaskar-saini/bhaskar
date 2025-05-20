import React, { useState, useEffect } from 'react';
import Fractal from './Fractal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import {EmailRounded} from '@mui/icons-material'
import '../styles/Intro.css'

const Intro = () => {
  const [done, setDone] = useState(false);
  
  useEffect(() => {
    AOS.init({ 
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className='intro'>
      <Fractal/>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString('<span class="intro-title">hi, <span class="intro-name">bhaskar</span> here.</span>')
          .start();
        }}
      />
      <div data-aos="fade-up">
        <div className="intro-subtitle">Sometimes I solve bugs, sometimes equations.</div>
        
        <div className="intro-desc">
          I'm a software engineer from Punjab, India, passionate about backend development and building scalable systems. I'm currently learning cloud computing and plan to explore AI next to expand my skills in modern tech. 
        </div>
        <a href="/Bhaskar_Resume.pdf" download className="intro-btn">Resume</a>
      </div>
    </div>
  )
}

export default Intro