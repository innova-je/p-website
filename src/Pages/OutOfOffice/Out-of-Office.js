import React from 'react'
import HeroSection from './Components/HeroSection'
import EventsCarousel from './Components/EventsCarousel'
import BeyondOffice from './Sections/BeyondOfficeSection'

const OutOffice = () => {
    return (
        <main>
            <HeroSection />

            <EventsCarousel />

            <BeyondOffice />
        </main>
    )
}

export default OutOffice