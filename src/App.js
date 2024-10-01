import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/About-Us'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from './Pages/Events/Events'
import Home from "./Pages/Home/Home";
import JoinUs from "./Pages/JoinUs/Join-Us";
import OurAdvisors from "./Pages/Team/Advisors/Our-Advisors";
import OurTeam from "./Pages/Team/Members/Our-Team";
import OutOffice from "./Pages/OutOfOffice/Out-of-Office";
import Services from "./Pages/Services/Services";
import MaintenanceSinglePage from "./Pages/Other/MaintenanceSinglePage";
import NotFound from "./Pages/Other/NotFound";
import InnovationWeek from "./Pages/Events/InnovationWeek/InnovationWeek";
import FerrisWheel from './components/FerrisWheel';

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  const maintenance_pages = ["/events", "/events/innovation-valley"]

  // Set the showFooter state based on the current path
  React.useEffect(() => {
    if (maintenance_pages.includes(location.pathname)) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);
  
  function NoMatch() {
    setShowFooter(false);

    return (
       <NotFound/>
    );
  }

  return (
    <div bgcolor="#F0F0F0" overflow="hidden">
      <Navbar />

      <Routes>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/events' element={<MaintenanceSinglePage/>} />
        <Route path='/' element={<Home />} />
        <Route path='/join-us' element={<JoinUs />} />
        <Route path='/our-people/our-advisors' element={<OurAdvisors />} />
        <Route path='/our-people/our-team' element={<OurTeam />} />
        <Route path='/out-of-office' element={<OutOffice />} />
        <Route path='/services' element={<Services />} />
        <Route path='/maintenance_page' element={<MaintenanceSinglePage />} />
        <Route path='/events/innovation-week' element={<InnovationWeek />} />
        <Route path='/events/innovation-valley' element={<MaintenanceSinglePage />} />
        <Route path='/pt' element={<Home />} />
        <Route path='*' element={<NoMatch />} />    
      </Routes>

      {showFooter && (<Footer/>)}

    </div>
  );
}

export default App;
