import Header from "./Componens/Header/Header"
import Hero from "./Componens/Hero/Hero"
import About from "./Componens/About/About"
import Projects from "./Componens/Projects/Projects"
import Skills from "./Componens/Skills/Skills"
import Footer from "./Componens/Footer/Footer"
import Main from "./Styles/Main.scss"
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container>
              <Header/>
              <Hero/>
              <About/>
              <Projects/>
              <Skills/>
              <Footer/>
     </Container>

    </div>
  );
}

export default App;
