import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomReview from './CustomReview';

const slideAnimation = (direction) => keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(${direction === 'left' ? '-100%' : '100%'});
  }
`;


const ObjectsContainer = styled.div`
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
  animation: ${({ direction }) => slideAnimation(direction)} 150s infinite linear; /* Adjust the duration if needed */
  gap: 2rem;
  width: auto; /* Set width to auto */
`;


const CustomReviewWrapper = styled.div`
  flex: 0 0 auto;
  width: auto;
  min-width: 0;
  overflow: visible;
`;

const LogosSlider = ({ reviews, duration, direction }) => {
  const [animationDirection, setAnimationDirection] = useState(direction);

  useEffect(() => {
    setAnimationDirection(direction);
  }, [direction]);

  const duplicatedReviews = [...reviews, ...reviews]; 

  return (
    <ObjectsContainer id="objects-container" duration={duration} direction={animationDirection}>
      {duplicatedReviews && duplicatedReviews.length > 0 && duplicatedReviews.map((review, index) => (
        <CustomReviewWrapper key={index}>
          <CustomReview
            image={review.image}
            name={review.name}
            department={review.department}
            text={review.text}
          />
        </CustomReviewWrapper>
      ))}
    </ObjectsContainer>
  );
};

export default LogosSlider;
