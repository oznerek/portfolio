import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer'
import $ from 'jquery';

function App() {
  // $(document).ready(function(){
  //   $(".body").scrollspy({ offset: -75 });   

  // });
  return (
    <div className="App">
      <Header />
      <Navigation />
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
