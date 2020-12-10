import React from "react";
import { Parallax } from 'react-parallax';

import MyNavbar from "./components/my-navbar/my-navbar";
import MyCarousal from "./components/my-carousal/my-carousal";
import TitleMessage from "./components/title-message/title-message"
import About from './pages/About/about'
import Contact from "./pages/Contact/contact"
import Container from 'react-bootstrap/Container'
import "./App.css";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import Skills from "./pages/Skills/skills"
import Projects from "./components/Projects/project-timeline"

import Footer from "./components/footer/footer"



const App = () => {
  return (
    
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    <div>
  <Parallax blur={{ min: -50, max: 50 }}
          bgImage={require("./assets/imgs/parallax/parallax1.webp").default}
          bgImageAlt=""
          strength={-200}>
        <div>
          <Container className="container-box rounded">
            <Fade>
            <About />
            </Fade>
          </Container>
       </div>
      </Parallax>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade>
            <Skills />
            </Fade>
          </Container>
       </div>

       <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer />
    </div>  
  )
}

export default App;

