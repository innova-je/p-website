import styled, { keyframes, css } from 'styled-components';
import { Button } from '@mui/material';

const snakeAnimation = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const CustomButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    background: `linear-gradient(45deg, #052533, white, #052533)`,
    backgroundSize: '200% 200%',
    animation: css`${snakeAnimation} 3s linear infinite`,
  },

  position: "absolute",
  top: "10%",
  backgroundColor: "#052533",
  color: 'white',
  width: "10vw",
  height: "6vh",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  border: "1px solid white",
  borderRadius: '25px',
  display: "flex",
  flexDirection: "row",
  gap: "10%",
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: "white",
    color: '#052533',
    border: "1px solid #052533",
    transform: 'scale(1.05)',
    background: `linear-gradient(45deg, #052533, white, #052533)`,
    animation: css`${snakeAnimation} 3s linear infinite`,
  },
}));

export default CustomButton;
