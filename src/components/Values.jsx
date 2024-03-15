import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const ButtonComponent = ({ title, subtitle, content, currentState, onButtonClick }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsTitleVisible(true);
      }, 900); 
      return () => clearTimeout(timeoutId);
    } else {
      setIsTitleVisible(true);
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsSubtitleVisible(true);
      }, 800); 
      return () => clearTimeout(timeoutId);
    } else {
      setIsSubtitleVisible(true);
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsContentVisible(true);
      }, 600); 
      return () => clearTimeout(timeoutId);
    } else {
      setIsContentVisible(false);
    }
  }, [currentState]);

  const handleButtonClick = () => {
    onButtonClick(title, currentState);
  };


  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      size="large"
      sx={{
        width: currentState === 'expanded' ? (tablet ? '55dvw' : mobile ? '60dvw' : smallMobile ? "75dvw" : '40dvw') : currentState === 'collapsed' ? (tablet ? '25dvw' : mobile ? '30dvw' : smallMobile ? "35dvw" : '20dvw') : (tablet ? '40dvw' : mobile ? '35dvw' :smallMobile ? "70dvw" : '25dvw'),
        borderRadius: tablet ?'4dvw' : mobile ? '5dvw' :smallMobile ? "5.5dvw" : "2dvw",
        textAlign: currentState === 'expanded' ? 'left' : 'center',
        backgroundColor: currentState === 'expanded' ? 'white' : 'primary.main',
        color: currentState === 'expanded' ? 'primary.main' : 'white',
        display: 'flex',
        flexDirection: currentState === 'expanded' ? 'row' : 'column',
        justifyContent: currentState === 'expanded' ? 'flex-start' : 'center',
        height: tablet || mobile || smallMobile ? currentState === 'expanded' ? (tablet ? '18dvw' : mobile ? '20dvw' : smallMobile ? "40dvw" : '13dvw') : currentState === 'normal' ? (tablet ? '15dvw' : mobile ? '20dvw' : smallMobile ? "28dvw" : '13dvw'): 'auto': (tablet ? '18dvw' : mobile ? '23dvw' : smallMobile ? "40dvw" : '13dvw'),
        boxSizing: 'border-box',
        '&:hover': {
          backgroundColor: currentState === 'expanded' ? 'white' : 'primary',
        },
        transition: (theme) => theme.transitions.create(['width', 'padding', 'backgroundColor', 'color', 'fontSize', 'opacity'], {
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          duration: '0.4s',
          delay: currentState === 'expanded' ? '0.5s' : '0s',  
        }),
        '& strong': {
          position: currentState === 'expanded' ? 'relative' : 'relative',
          // top: currentState === 'expanded' ? (tablet ? '2dvw' : mobile ? '3dvw' : smallMobile ? "2dvw" : '1.2dvw')  : 'auto',
          // left: currentState === 'expanded' ? (tablet ? '2.3dvw' : mobile ? '3dvw' : smallMobile ? "5.5dvw" : '1.5dvw') : 'auto',
        },
      }}
      onClick={handleButtonClick}
    >
      <div style={{}}>
        <strong style={{
          fontSize: currentState === 'normal' ? (tablet ? '3dvw' : mobile ? '3.5dvw' : smallMobile ? "4.5dvw" : '2.2dvw') : currentState === 'collapsed' ? (tablet ? '3dvw' : mobile ? '3.5dvw' : smallMobile ? "4.5dvw" : '3dvw') : currentState === 'expanded' ? (tablet ? '2dvw' : mobile ? '2.5dvw' : smallMobile ? "3.5dvw" : '1.7dvw') : 'inherit',
          // margin: currentState === 'normal' ? '10px 0' : 'inherit',
          opacity: isTitleVisible ? '1' : '0',
          transition: 'opacity 0.5s',
        }}>
          {currentState === 'expanded' ? title : currentState === 'collapsed' ? title : title}
        </strong>
        {currentState === 'normal' && (
          <div style={{ fontSize :(tablet ? '2dvw' : mobile ? '2.5dvw' :smallMobile ? "3.2dvw" : '1.5dvw') ,color: 'white', opacity: isSubtitleVisible ? '0.6' : '0', transition: 'opacity 0.5s', textTransform: 'none' }} dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        {currentState === 'expanded' && isContentVisible && (
          <div style={{ fontSize: (tablet ? '1.4dvw' : mobile ? '1.7dvw' : smallMobile ? "2.7dvw" : '1dvw') , textAlign: 'justify', marginTop: '0.5dvw', opacity: '1', transition: 'opacity 0.5s' }}>{content}</div>
        )}
      </div>

    </Button >
  );
};

export default ButtonComponent;