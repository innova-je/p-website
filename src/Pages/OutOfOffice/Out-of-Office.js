import React from 'react'
import HeroSection from './Sections/HeroSection'
import EventsCarousel from './Components/EventsCarousel'
import BeyondOffice from './Sections/BeyondOfficeSection'
import LastImage from './Components/LastImage'

const OutOffice = () => {
    return (
        <main style={{
                backgroundColor: "#F0F0F0",
                overflow: "hidden",
                }}>
            
            <HeroSection />

            <EventsCarousel />

            <BeyondOffice />

           
        </main>
    )
}

export default OutOffice