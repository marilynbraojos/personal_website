import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Projects from './views/Projects/Projects';
import Gallery from './views/Gallery/Gallery';
import Contact from './views/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;