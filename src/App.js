import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
        <About />
        <Skills/>
        <Projects />
    </div>
  );
}

export default App;
