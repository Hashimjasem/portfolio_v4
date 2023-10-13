import './App.css';
import Nav from './components/Nav';
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="app">
      <About/>
      <div className="sticky"><Nav/></div>
      <Education/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
