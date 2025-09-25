import SideBar from "./Componens/SideBar/SideBar"
import Hero from "./Componens/Hero/Hero"
import About from "./Componens/About/About"
import Projects from "./Componens/Projects/Projects"
import Skills from "./Componens/Skills/Skills"
import Footer from "./Componens/Footer/Footer"
import Main from "./Styles/Main.scss"
import Resume from "./Componens/Resume/Resume"
import {Col, Container, Row} from "react-bootstrap"

function App() {
  return (
    <div className="App">
     

        <Row>
          <Col sm="3">
        
             <SideBar/>
          
         
           </Col>


          <Col sm="9">
              <Hero/>
              <About/>
              <Resume/>
              <Projects/>
              <Skills/>
              <Footer/>
          </Col>
        </Row>
             
    

    </div>
  );
}

export default App;
