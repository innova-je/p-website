import React from 'react'
import img1 from "../../../Assets/Images/OutOfOffice/herosection1.png";
import img2 from "../../../Assets/Images/OutOfOffice/herosection2.png";
import img3 from "../../../Assets/Images/OutOfOffice/herosection3.png";
import img4 from "../../../Assets/Images/OutOfOffice/herosection4.png";
import img5 from "../../../Assets/Images/OutOfOffice/herosection5.png";

function PhotosSection() {

    const photos = [
        { top: 0, right: 0, image: img1 },
        { top: 0, right: 0, image: img2 },
        { top: 0, right: 0, image: img3 },
        { top: 0, right: 0, image: img4 },
        { top: 0, right: 0, image: img5 },
      ];


  return (
    <div style={{ display: 'block', overflow: "hidden" }}>
      {photos.map((photo, index) => (
        <img key={index} src={photo.image} style={{position: "relative", top: photo.top, right: photo.right, maxWidth: "400px"}} />
      ))}
    </div>
  )
}

export default PhotosSection