import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";
import Skills from './components/skills'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
        <About />
        <Skills/>
    </div>
  );
}

export default App;
