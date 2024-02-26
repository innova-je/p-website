import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({ title, subtitle, content, currentState, onButtonClick }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsTitleVisible(true);
      }, 300); 
      return () => clearTimeout(timeoutId);
    } else {
      setIsTitleVisible(true);
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsSubtitleVisible(true);
      }, 300); 
      return () => clearTimeout(timeoutId);
    } else {
      setIsSubtitleVisible(true);
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState === 'expanded') {
      const timeoutId = setTimeout(() => {
        setIsContentVisible(true);
      }, 300); 
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
        width: currentState === 'expanded' ? '500px' : currentState === 'collapsed' ? '250px' : '350px',
        borderRadius: '25px',
        textAlign: currentState === 'expanded' ? 'left' : 'center',
        backgroundColor: currentState === 'expanded' ? 'white' : 'primary.main',
        color: currentState === 'expanded' ? 'primary.main' : 'white',
        display: 'flex',
        flexDirection: currentState === 'expanded' ? 'row' : 'column',
        justifyContent: currentState === 'expanded' ? 'flex-start' : 'center',
        minHeight: '170px',
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
          position: currentState === 'expanded' ? 'absolute' : 'relative',
          top: currentState === 'expanded' ? '20px' : 'auto',
          left: currentState === 'expanded' ? '20px' : 'auto',
        },
      }}
      onClick={handleButtonClick}
    >
      <div>
        <strong style={{
          fontSize: currentState === 'normal' ? '30px' : currentState === 'collapsed' ? '35px' : currentState === 'expanded' ? '20px' : 'inherit',
          margin: currentState === 'normal' ? '10px 0' : 'inherit',
          opacity: isTitleVisible ? '1' : '0',
          transition: 'opacity 0.5s'
        }}>
          {currentState === 'expanded' ? title : currentState === 'collapsed' ? title : title}
        </strong>
        {currentState === 'normal' && (
          <div style={{ color: 'white', opacity: isSubtitleVisible ? '0.6' : '0', transition: 'opacity 0.5s', textTransform: 'none' }} dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        {currentState === 'expanded' && isContentVisible && (
          <div style={{ fontSize: '12px', textAlign: 'justify', marginTop: '10px', opacity: '1', transition: 'opacity 0.5s' }}>{content}</div>
        )}
      </div>

    </Button >
  );
};

export default ButtonComponent;