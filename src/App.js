import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EngDesign from './pages/services/EngDesign';
import SubSurface from './pages/services/SubSurface';
import Drilling from './pages/services/Drilling';
import WaterManagement from './pages/services/WaterManagement';

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services'>
          <Route path='engineering-design' element={<EngDesign/>}/>
          <Route path='subsurface-service' element={<SubSurface/>}/>
          <Route path='drilling-service' element={<Drilling/>}/>
          <Route path='produced-water-management' element={<WaterManagement/>}/>
        </Route>
      </Routes>
    </Router>
  </>
}

export default App;
