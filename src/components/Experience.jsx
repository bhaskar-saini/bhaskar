import React from 'react'
import '../styles/experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const expItems = [
    "Analyzed service data using Power BI to generate insights, improving decision-making and efficiency.",
    "Automated reporting processes, reducing manual effort and improving accuracy.",
    "Analyzed service data using Power BI to generate insights, improving decision-making and efficiency.",
    "Optimized workflows using PDCA methodology, leading to a 30% increase in service inflows."
  ];
  return (
    <div className="exp" id='experience'>
      <div data-aos="fade-up">
        <div className="exp-header">
          <span className='exp-title'>/ experience</span>
        </div>
        <div className="job-title">Service Engineer @ <a href="https://www.tvsmotor.com/" target="_blank" rel="noopener noreferrer">TVS Motors Company</a></div>
        <div className="duration">June 2019 - June 2021</div>
        <ul>
          {
            expItems.map((item,index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={`${(index+1)*100}`}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Experience