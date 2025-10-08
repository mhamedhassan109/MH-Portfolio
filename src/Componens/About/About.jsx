import React from 'react'
import { Col, Row } from 'react-bootstrap'
import user from "../../Assets/Profile.jpg"
import {motion} from "framer-motion"
import Heading from '../Heading/Heading'
function About({AboutRef}) {
  return (
    <div className='About' ref={AboutRef} >

        <Heading text="About"/>

        <Row>
           <Col sm="12" lg="4">
          <motion.div 
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:2}}
          viewport={{once:true}}
          
          
          >

          <div className="user">
            <img src={user} alt='user'/>
          </div>
            </motion.div>
          </Col>
         
          <Col sm="12" lg="8">
          <motion.div 
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:2}}
           viewport={{once:true}}
          >
            <div className="text">
              <h2>front end Developer.</h2>
              <p>I am a junior front-end developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, Sass, and React. Currently learning Next.js and 
                improving my skills in UI/UX design. I enjoy building clean, 
                responsive, and user-friendly websites. Always eager to</p>

                 <div className="content">
                  <div className="contentOne">
                   <h6> <i class="fa-solid fa-angle-right"></i><strong>birthday:</strong> 3 august 1995</h6>
                   <h6> <i class="fa-solid fa-angle-right"></i><strong>Phone:</strong> +1225208683 </h6>
                   <h6> <i class="fa-solid fa-angle-right"></i><strong>City:</strong> egypt ,alexandria</h6>
                  
                  </div>
                  <div className="contenttwo">
                     <h6> <i class="fa-solid fa-angle-right"></i><strong>Age:</strong> 30</h6>
                   <h6> <i class="fa-solid fa-angle-right"></i><strong>Email:</strong> mh887315@gmail.com</h6>
                   <h6> <i class="fa-solid fa-angle-right"></i><strong>github:</strong> mhamedhassan109</h6>
                 
                  </div>
                 </div>

                 <div className="descuription">
                  <p>I am passionate about creating interactive and visually appealing user interfaces. 
                    My focus is on writing clean, reusable code and improving performance for better user experiences.
                     I have already built several projects such as filtering systems, product detail pages,
                      and responsive single-page applications using React. My next goal is to work with a 
                    professional team where I can grow and contribute my skills to real-world projects</p>
                 </div>
            </div>
            </motion.div>
          </Col>
        </Row>

    </div>
  )
}

export default About