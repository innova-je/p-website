import React, { useEffect, useState, useRef } from 'react';
import MemberReview from './MemberReview';
import Testimonials from '../../../Assets/data/Testimonials.json'
import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const slideAnimation = (direction) => keyframes`
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(${direction === 'left' ? '-100%' : '100%'});
//   }
// `;


// const ObjectsContainer = styled.div`
//   overflow: visible;
//   display: flex;
//   align-items: center;
//   justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
//   animation: ${({ direction }) => slideAnimation(direction)} 150s infinite linear; /* Adjust the duration if needed */
//   gap: 2rem;
//   width: auto; /* Set width to auto */
// `;


// const CustomReviewWrapper = styled.div`
//   flex: 0 0 auto;
//   width: auto;
//   min-width: 0;
//   overflow: visible;
// `;

// const LogosSlider = ({ reviews, duration, direction }) => {
//   const [animationDirection, setAnimationDirection] = useState(direction);

//   useEffect(() => {
//     setAnimationDirection(direction);
//   }, [direction]);

//   const duplicatedReviews = [...reviews, ...reviews]; 

//   return (
//     <ObjectsContainer id="objects-container" duration={duration} direction={animationDirection}>
//       {duplicatedReviews && duplicatedReviews.length > 0 && duplicatedReviews.map((review, index) => (
//         <CustomReviewWrapper key={index}>
//           <CustomReview
//             image={review.image}
//             name={review.name}
//             department={review.department}
//             text={review.text}
//           />
//         </CustomReviewWrapper>
//       ))}
//     </ObjectsContainer>
//   );
// };

// export default LogosSlider;

/////////////////////////////////////////////////////////////////////////////////////
{/* <Carousel reviews={reviews1} duration='30s' direction='left' /> */ }
{/* <Carousel reviews={[...reviews1].reverse()} direction='left' /> */ }

const LogosSlider = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 767 });

  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const deltaX = x - startX;
    setCurrentX(currentX + deltaX);
    setStartX(x);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTransitionEnd = () => {
    // Ensure that the currentX stays within the bounds of the container
    const containerWidth = containerRef.current.clientWidth;
    if (currentX > 0) {
      setCurrentX(0);
    } else if (currentX < -(containerWidth * (Testimonials.length - 1))) {
      setCurrentX(-(containerWidth * (Testimonials.length - 1)));
    }
  };

  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });

  const testimonials = Testimonials.testimonials;
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const desiredWidthPercentage = desktop ? 0.8: smallDesktop ? 0.8 : tablet ? 1 : 0.5; // 80% of screen width
    const columnWidth = 230; 
    const calculatedColumns = Math.floor(screenWidth * desiredWidthPercentage / columnWidth);
    setNumColumns(calculatedColumns > 0 ? calculatedColumns : 1);
  }, []);

  const divideIntoRows = (testimonials, numColumns) => {
    const rows = [];
    const numRows = Math.ceil(testimonials.length / numColumns);
    for (let i = 0; i < numRows; i++) {
      rows.push(testimonials.slice(i * numColumns, (i + 1) * numColumns));
    }
    return rows;
  };

  const settings = {
    dots: true,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
      <div>
        {isDesktopOrLaptop ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5% 0%'
          }}>
          <div style={{ display: 'flex', gap: '1.5rem'}}>
            {divideIntoRows(testimonials, numColumns).map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {row.map((testimonial, index) => (
                  <MemberReview
                    key={index}
                    image={testimonial.image}
                    name={testimonial.name}
                    department={testimonial.department}
                    text={testimonial.quote}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
          <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
            <div style={{ padding: "7% 0 2% 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <MemberReview
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                department={testimonial.department}
                text={testimonial.quote}
              />
              </div>
              </div>
            ))} 
          </Slider>
          
      )}
      </div>
  );
};

export default LogosSlider;