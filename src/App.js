import './App.css';
import {useState} from "react";
import NavBar from "./components/NavBar";
import {Container} from "react-bootstrap";
import Intro from "./modules/Intro";
import About from "./modules/About";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Experiences from "./modules/Experiences";
import Academics from "./modules/Academics";
import Footer from "./modules/Footer";

function App() {
    const [modalShow, setModalShow] = useState(false);
    const handleChange = () => {
        setModalShow(true);
    }
    const handleClose = () => {
        setModalShow(false);
    }
  return (
    <div>
      <NavBar />
        {/*intro*/}
        <Container fluid id="home" className="h-100">
           <Intro
               onChange={handleChange}
               modal={modalShow}
               onClose={handleClose} />
        </Container>

        <Container fluid id="about" className="h-100 pt-2">
           <About />
        </Container>

        <Container fluid id="skills" className="h-100 pt-2">
            <Skills />
        </Container>

        <Container id="projects" fluid className="h-100 pt-2">
            <Projects />
        </Container>

        <Container id="experiences" fluid className="h-100 pt-2">
            <Experiences />
        </Container>

        <Container id="academic" fluid className="h-100 pt-2">
            <Academics />
        </Container>

        <Container fluid id="contact" className="footer">
            <Footer />
        </Container>
    </div>
  );
}

export default App;
