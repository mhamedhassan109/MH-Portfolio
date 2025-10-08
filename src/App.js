import SideBar from "./Componens/SideBar/SideBar"
import Hero from "./Componens/Hero/Hero"
import About from "./Componens/About/About"
import Projects from "./Componens/Projects/Projects"
import Skills from "./Componens/Skills/Skills"
import Footer from "./Componens/Footer/Footer"
import Main from "./Styles/Main.scss"
import Resume from "./Componens/Resume/Resume"
import Contact from "./Componens/Contact/Contact"
import {Col, Container, Row} from "react-bootstrap"
import { useRef } from "react"


function App() {

  const HomeRef = useRef(null)
  const AboutRef = useRef(null)
  const resumeRef = useRef(null)
  const projectRef = useRef(null)
  const serviceRef = useRef(null)
  const contactRef = useRef(null)
  return (

   

        <div className="App">

                      <Row>
                            <Col sm="3">
                          
                              <SideBar HomeRef={HomeRef}
                                AboutRef={AboutRef}
                                resumeRef={resumeRef}
                                projectRef={projectRef} 
                                serviceRef={serviceRef}
                                contactRef={contactRef}/>
                            
                          
                            </Col>


                              <Col sm="9">
                                  <Hero HomeRef={HomeRef}/>
                                  <About AboutRef={AboutRef}/>
                                  <Resume resumeRef={resumeRef}/>
                                  <Projects projectRef={projectRef}/>
                                  <Skills serviceRef={serviceRef}/>
                                  <Contact contactRef={contactRef}/>
                                
                              </Col>
                      </Row>
                      
                      <Row> <Footer/></Row>

         </div>


     
  );
}

export default App;
