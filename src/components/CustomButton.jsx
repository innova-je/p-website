import { Button, styled, keyframes } from '@mui/material';

const animate1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CustomButton = styled(Button)(({ bgColor, currPage }) => {
  
  const isServicesPage = currPage === "/services";
  const isInnovationWeekPage = currPage === "/events/innovation-week";

  return {
    position: 'relative',
    '&:before': !(isServicesPage || isInnovationWeekPage) && {
      content: '""',
      position: 'absolute',
      width: "1vw",
      height: "25vh",
      zIndex: -1,
      background: `linear-gradient(#ffffff, #ffffff)`,
      animation: `${animate1} 10s infinite linear`,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      inset: !(isServicesPage || isInnovationWeekPage) ? "1px" : "0px",
      borderRadius: "14px",
      backgroundColor: bgColor,
    },
    color: isInnovationWeekPage ? "#052533" : 'white',
    width: "10vw",
    height: "6vh",
    display: "flex",
    flexDirection: "row",
    gap: "10%",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: bgColor,
  };
});

export default CustomButton;