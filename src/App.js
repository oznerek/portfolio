import React from "react";
import Home from "./components/home";
import Navigation from "./components/navigation";
import About from "./components/about";
import Skills from './components/skills';
import Projects from './components/projects';
import ProjectsComapnies from './components/projects_comapnies';
import Contact from './components/contact';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navigation />
        <Home />
        <About />
        <Skills />
        <Projects />
        <ProjectsComapnies />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
