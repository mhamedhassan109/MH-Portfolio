import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import {ProjectData} from "../../Resume"
import Heading from '../Heading/Heading';
import {motion} from "framer-motion"
function Resume({resumeRef}) {
 const [Experience,setExperience] = useState(ProjectData)
 
  return (
    <div className='Resume' ref={resumeRef}>
     <Heading text="Resume"/>
    <motion.div 
    initial={{opacity:0,x:-200}}
    whileInView={{opacity:1,x:0}}
    transition={{duration:2}}
    viewport={{once:true}}
    >
      <Row>
        <Col sm="12" lg="5">
        <div className="content">
          <h3>Sumary</h3>
          <p>Junior Front-End Developer with strong skills in HTML, CSS, JavaScript, and React.
             Experienced in building responsive, user-friendly web applications with features like filtering systems, search functionality, routing, and product detail pages. Passionate about UI/UX and always improving my skills. Eager to contribute to 
            a professional team and deliver high-quality solutions.development environment.</p>

        </div>
        <div className="content">
          <h3>Education</h3>
          <p>Faculty of Computers, Abu Qir – Alexandria, EgyptBachelor’s Degree</p>
        </div>
         <div className="content">
          <h3>skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS , SASS </li>
            <li>Bootstrap  , framer Motion</li>
            <li>JavaScript  , TypeScript </li>
            <li>React.js</li>
            <li>Next.js </li>
            <li>UI/UX, Responsive Design</li>
            <li>Git, Github</li>
            
          </ul>
        </div>
        </Col>
        <Col sm="12" lg="6">
        <div className="content">
          <h3>Professional Experience</h3>
          {Experience.map((item)=>{
            return(
                 <div className="projects">
                    <h5>{item.project}</h5>
                     <h6>{item.tools}</h6>
                     <p>{item.desc}</p>
                    
          </div>
            )
          })}
         
        </div>
        </Col>
      </Row>
      </motion.div>
    </div>
  )
}

export default Resume