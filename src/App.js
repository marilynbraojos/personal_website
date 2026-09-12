import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/resume" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;