import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Email, LinkedIn } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';


const CustomComponent = ({ title, name, image, emailAddress, linkedinLink }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const [dynamicImage, setDynamicImage] = useState(null);


  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: dynamicImage } = await import(`../../../../images/MemberImages/${image}`);
        setDynamicImage(dynamicImage);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image]);

  const containerStyle = {
    backgroundColor: 'white',
    position: 'relative',
    width: desktop ? '20dvw' : '35dvw',
    height: '100%',
    overflow: 'visible',
    borderRadius: 15,
    marginBottom: 35,
  };

  const imageContainerStyle = {
    width: '100%',
    paddingBottom: '100%',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
    transition: 'filter 0.4s ease-in-out',
  };

  let overlayStyle = {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: 'auto',
    backgroundColor: '#C7B7BE',
    padding: desktop ? '5px' : '8px',
    margin: 'auto',
    borderRadius: desktop ? 15: 10,
    overflow: 'hidden',
    zIndex: 2,
  };

  if (title === '') {
    overlayStyle = {
      ...overlayStyle,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
  }

  const iconsContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 10,
    display: isHovered ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    zIndex: 3,
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedinLink, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {desktop && (
        <div style={iconsContainerStyle}>
          <a href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
            <Email sx={{ color: theme.palette.primary.main }} />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick}>
            <LinkedIn sx={{ color: '#0077B5' }} />
          </a>
        </div>

        )}
        <div style={imageContainerStyle}>
          <img src={dynamicImage} alt="imagem de perfil" style={imageStyle} />
        </div>
        <div style={overlayStyle}>
          {title !== null && (
            <Typography
              variant="body2"
              align="center"
              noWrap
              sx={{ fontWeight: 'bold', fontSize: desktop ? '1.2dvw': '3dvw' }}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="body2"
            align="center"
            noWrap
            sx={{
              fontWeight: 'Medium',
              fontSize: desktop ? '1.2dvw': '3dvw',
              color: theme.palette.primary.main,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {name}
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CustomComponent;