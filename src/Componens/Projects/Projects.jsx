import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cart from './Cart'
import {projects} from "../../projects"
import Filtertion from '../Filtertion/Filtertion'
import Heading from '../Heading/Heading'
import {motion} from "framer-motion"

function Projects({projectRef}) {
  const [Data,setData] = useState(projects)

  const filterBtn = ["all",...new Set (projects.map((item)=>item.catogry))]

  const [catogry,setcatogry] = useState("all")
 
  const filterProject = Data.filter((item)=>{
    return catogry === "all" ? item : item.catogry === catogry
  })
  
  return (
    <div className='Projects' ref={projectRef}>

    <Heading text="Projects"/>
      
      <Container>
        <Filtertion filterBtn={filterBtn} setcatogry={setcatogry} />
      <Row>
      
        {filterProject.map((item)=>{
          return(
               <Col sm="12" lg="6">
                    <motion.div 
                        initial={{opacity:0,scale:0}}
                        whileInView={{opacity:1,scale:1}}
                        transition={{duration:3}}
                        viewport={{once:true}}
        >
                 <Cart item={item}/>
              </motion.div>
              </Col>
          )
        })}

       
      </Row>
      </Container>
    </div>
  )
}

export default Projects