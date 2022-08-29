import { Route, Routes } from 'react-router-dom';
import './scss/App.scss';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
    </div>
  );
}

export default App;