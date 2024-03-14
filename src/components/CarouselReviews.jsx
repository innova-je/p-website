import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomReview from './CustomReview';
import { Box } from '@mui/material';
import HeroImage from '../images/other/joinus_img.png';
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
    } else if (currentX < -(containerWidth * (reviews.length - 1))) {
      setCurrentX(-(containerWidth * (reviews.length - 1)));
    }
  };

  
  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });

  const reviews = [
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "test",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
    {
      image: HeroImage,
      name: "John Doe",
      department: "Human Resources",
      text: "Last",
      sx: { position: "absolute", left: "50%", zIndex: 2 }
    },
  ];

  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          {/* First row of reviews */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              position: 'absolute',
              top: '30%',
              width: '100%',
              height: '38vh',
              overflow: 'visible',
            }}>
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
          </Box >

          {/* Second row of reviews */}
          < Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              position: 'absolute',
              top: '62%',
              width: '100%',
              height: '38vh',
              overflow: 'visible',
            }}>

            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
            < CustomReview
              image={HeroImage}
              name="John Doe"
              department="Human Resources"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor"
              sx={{ position: "absolute", left: "50%", zIndex: 2 }}
            />
          </Box>
        </>
      ) : (

        <div
          ref={containerRef}
          style={{
            position: "relative",
            overflow: "visible",
            width: "50%",
            // maxHeight: "250px",
            top:  mobile ? "50%" : smallMobile ? '37%' : "45%",
            // left: "-20dvw",
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
              width: `${reviews.length * 110}%`, // Adjust spacing between reviews
              gap: "5dvw", // Add gap between reviews
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {reviews.map((review, index) => (
              <CustomReview
                key={index}
                image={review.image}
                name={review.name}
                department={review.department}
                text={review.text}
                sx={{
                  flex: "0 0 auto", // Reset flex property
                  width: "90%", // Adjust width to provide spacing
                  margin: "0 5%", // Add margin for spacing
                  zIndex: 2, // Increase zIndex
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LogosSlider;