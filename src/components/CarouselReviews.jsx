import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomReview from './MemberReview';
import { Box } from '@mui/material';
import MemberReview from '../components/MemberReview';
import Testimonials from '../Testimonials.json'
import { useMediaQuery } from 'react-responsive';

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

  const testimonials = Testimonials.testimonials;
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const desiredWidthPercentage = 0.5; // 80% of screen width
    const columnWidth = 230; // Width of each column in pixels (adjust as needed)
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

  return (
    <>
      {isDesktopOrLaptop ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: '10%',
            width: '100%',
            height: 'auto',
            overflow: 'visible',
          }}>
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
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
          </Box>
        </Box>
      ) : (
        <div
          ref={containerRef}
          style={{
            position: "relative",
            overflow: "visible",
            width: "50%",
            top: mobile ? "20dvw" : smallMobile ? '15dvw' : "45%",
            touchAction: "none",
            display: "flex",
            justifyContent: "flex-start",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(${currentX}px)`,
              width: `${Testimonials.length * 110}%`, // Adjust spacing between reviews
              gap: "5dvw", // Add gap between reviews
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {testimonials.map((testimonial, index) => (
              <MemberReview
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                department={testimonial.department}
                text={testimonial.quote}
                sx={{ position: "absolute", left: "50%", zIndex: 2 }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LogosSlider;