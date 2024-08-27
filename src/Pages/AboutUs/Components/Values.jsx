import React, { useState, useEffect } from 'react';
import { Button, useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const ButtonComponent = ({ title, subtitle, content, currentState, onButtonClick }) => {
  const theme = useTheme();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const handleButtonClick = () => {
    onButtonClick(title, currentState);
  };

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsTitleVisible(currentState === 'expanded');
      setIsSubtitleVisible(currentState === 'expanded');
      setIsContentVisible(currentState === 'expanded');
    }, currentState === 'expanded' ? 300 : 0);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [currentState]);
  
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      size="large"
      sx={{
        width: currentState === 'expanded' ? (tablet ? '55dvw' : mobile ? '60dvw' : smallMobile ? "75dvw" : '40dvw') : currentState === 'collapsed' ? (tablet ? '25dvw' : mobile ? '30dvw' : smallMobile ? "35dvw" : '20dvw') : (tablet ? '40dvw' : mobile ? '35dvw' : smallMobile ? "70dvw" : '25dvw'),
        borderRadius: tablet ? '4dvw' : mobile ? '5dvw' : smallMobile ? "5.5dvw" : "2dvw",
        textAlign: currentState === 'expanded' ? 'left' : 'center',
        backgroundColor: currentState === 'expanded' ? 'white' : 'primary.main',
        color: currentState === 'expanded' ? 'primary.main' : 'white',
        display: 'flex',
        flexDirection: currentState === 'expanded' ? 'row' : 'column',
        justifyContent: currentState === 'expanded' ? 'flex-start' : 'center',
        height: tablet || mobile || smallMobile ? currentState === 'expanded' ? (tablet ? '18dvw' : mobile ? '20dvw' : smallMobile ? "40dvw" : '13dvw') : currentState === 'normal' ? (tablet ? '15dvw' : mobile ? '20dvw' : smallMobile ? "28dvw" : '13dvw') : 'auto' : (tablet ? '18dvw' : mobile ? '23dvw' : smallMobile ? "40dvw" : '13dvw'),
        boxSizing: 'border-box',
        '&:hover': {
          backgroundColor: currentState === 'expanded' ? 'white' : 'primary',
        },
        transition: (theme) => theme.transitions.create(['width', 'padding', 'backgroundColor', 'color', 'fontSize', 'opacity'], {
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          duration: '0.3s',
        }),
        '& strong': {
          position:  'relative',
        },
      }}
      onClick={handleButtonClick}
    >
      <div>
        <strong style={{
          fontSize: currentState === 'normal' ? (tablet ? '3dvw' : mobile ? '3.5dvw' : smallMobile ? "4.5dvw" : '2.2dvw') : currentState === 'collapsed' ? (tablet ? '3dvw' : mobile ? '3.5dvw' : smallMobile ? "4.5dvw" : '3dvw') : currentState === 'expanded' ? (tablet ? '2dvw' : mobile ? '2.5dvw' : smallMobile ? "3.5dvw" : '1.7dvw') : 'inherit',
        }}>
          {currentState === 'expanded' ? title : currentState === 'collapsed' ? title : title}
        </strong>
        {currentState === 'normal' && (
          <div style={{ fontSize: (tablet ? '2dvw' : mobile ? '2.5dvw' : smallMobile ? "3.2dvw" : '1.5dvw'), color: 'white', opacity:'0.6', textTransform: 'none' }} dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        {currentState === 'expanded' && isContentVisible && (
          <div style={{ textTransform:"none", color: theme.palette.secondary.main, fontSize: (tablet ? '1.4dvw' : mobile ? '1.7dvw' : smallMobile ? "2.7dvw" : '1dvw'), textAlign: 'justify', opacity: '1' }}>{content}</div>
        )}
      </div>
    </Button>
  );
};

export default ButtonComponent;
