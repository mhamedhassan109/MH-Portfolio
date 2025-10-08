import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heading from '../Heading/Heading'
import {motion} from "framer-motion"

function Contact({contactRef}) {
  return (
    <div className='Contact' ref={contactRef}>
      <Heading text="Contact"/>
      <Row>
      
        <Col sm="12" lg="12">
        <motion.div 
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:3}}
        viewport={{once:true}}
        >
          <form>
            <div className="name">
              <input type='text' placeholder='frist name'/>
              <input type='text' placeholder='last name'/>
            </div>
            <input type='email' placeholder='write your email'/>
            <textarea>message</textarea>
            <input type='submit' value="send"/>
          </form>
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact