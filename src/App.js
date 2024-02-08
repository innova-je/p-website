import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from './Pages/Events'
import Home from  "./Pages/Home";
import JoinUs from  "./Pages/Join-Us";
import OurAdvisors from  "./Pages/Our-Advisors";
import OurTeam from  "./Pages/Our-Team";
import OutOffice from  "./Pages/Out-of-Office";
import Services from "./Pages/Services";
import AboutUs from './Pages/About-Us'
import { Box } from "@mui/material";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Box bgcolor="#F0F0F0"> 
    
      <Navbar/>

      <Routes>
        <Route path='/about-us'  element={<AboutUs/>} />
        <Route path='/events'  element={<Events/>} />
        <Route path='/'  element={<Home/>} />
        <Route path='/join-us'  element={<JoinUs/>} />
        <Route path='/our-people/our-advisors'  element={<OurAdvisors/>} />
        <Route path='/our-people/our-team'  element={<OurTeam/>} />
        <Route path='/out-of-office'  element={<OutOffice/>} />
        <Route path='/services'  element={<Services/>} />        
      </Routes>

      <Home/>

      <Footer/>
    
    </Box>
  );
}

export default App;
