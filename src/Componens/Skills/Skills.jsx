import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {motion} from "framer-motion"

function Skills({serviceRef}) {
  return (
    <div className='Skills' ref={serviceRef}>
      <Row>
      
        <Col sm="12" lg="6">
      <motion.div 
        initial={{opacity:0,x:-200}}
        animate={{opacity:1,x:0}}
        transition={{duration:3,delay:3}}
        viewport={{once:true}}>


          <div className="contentSkills">
            <h2>Skills</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Similique amet distinctio, esse quia, aperiam repudiandae pariatur,
               iure possimus placeat obcaecati at natus! Rerum ipsa, doloremque
               vitae quas consectetur molestias dolores.</p>

               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, iure.</p>
          </div>


          </motion.div>
        </Col>
       
        <Col sm="12" lg="6">
          <motion.div 
        initial={{opacity:0,x:200}}
        animate={{opacity:1,x:0}}
        transition={{duration:3 ,delay:3}}
        viewport={{once:true}}>
          <div className="SkillsTool">
            <h3>Languages</h3>
            
            <h6>Html5</h6>
            <div className='holder'>
                <span className='one'></span>
            </div>
            <h6>css & sass</h6>
            <div className='holder'>
                <span className='two'></span>
            </div>
            <h6>java script</h6>
             <div className='holder'>
                <span className='three'></span>
            </div>
          <h3>Libraries</h3>
          <h6>react.js</h6>
             <div className='holder'>
                <span className='four'></span>
            </div>

            <h3>Frameworks</h3>
            
            <h6>bootstarp</h6>
             <div className='holder'>
                <span className='five'></span>
            </div>
            <h6>next.js</h6>
             <div className='holder'>
                <span className='six'></span>
            </div>
            <h3>Tools</h3>
            <h6>Git & GitHub</h6>
             <div className='holder'>
                <span className='seven'></span>
            </div>
            <h6>VS Code</h6>
             <div className='holder'>
                <span className='eight'></span>
            </div>
          </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills