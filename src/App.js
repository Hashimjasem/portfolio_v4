import './App.css';
import Nav from './components/Nav';
import About from './components/About'
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <About/>
      <div className="sticky"><Nav/></div>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
