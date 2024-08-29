import React from 'react';
import EventCard from './EventCard';  // Ensure you import EventCard correctly
import HomePageImg from "../../../Assets/Images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp";
import img1 from "../../../Assets/Images/OutOfOffice/IMG_9915 1 (1).png";
import img2 from "../../../Assets/Images/OutOfOffice/IMG_9915 1 (2).png";
import img3 from "../../../Assets/Images/OutOfOffice/IMG_9915 1 (3).png";
import img4 from "../../../Assets/Images/OutOfOffice/IMG_9915 1 (4).png";
import img from "../../../Assets/Images/OutOfOffice/IMG_9915 1.png";

function EventsCarousel() {
  // Array of event objects with titles and images
  const events = [
    { title: 'Team Weekend', image: img },
    { title: 'Team Buildings', image: img1 },
    { title: 'National Events', image: img2 },
    { title: 'Social Responsability', image: img3 },
    { title: 'International Events', image: img4 }
  ];

  return (
    <div style={{ display: 'flex', padding: "5rem", gap: "4rem" }}>
      {events.map((event, index) => (
        <EventCard key={index} title={event.title} image={event.image} />
      ))}
    </div>
  );
}

export default EventsCarousel;
