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
import WellService from './pages/services/WellService';
import TrainingService from './pages/services/TrainingService';
import Seismic from './pages/services/Seismic';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Careers from './pages/Careers';
import HSE from './pages/HSE';
import OtherServices from './pages/OtherServices';



function App() {
  return <>
    <Router>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/HSE' element={<HSE/>}/>
        <Route path='/other-services' element={<OtherServices/>}/>
        <Route path='/services'>
          <Route path='engineering-design' element={<EngDesign/>}/>
          <Route path='subsurface-service' element={<SubSurface/>}/>
          <Route path='drilling-service' element={<Drilling/>}/>
          <Route path='produced-water-management' element={<WaterManagement/>}/>
          <Route path='seismic-services' element={<Seismic/>}/>
          <Route path='well-services' element={<WellService/>}/>
          <Route path='training-services' element={<TrainingService/>}/>
        </Route>
      </Routes>
    </Router>
  </>
}

export default App;
