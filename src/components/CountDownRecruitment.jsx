import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from 'react-responsive';

const CountDownRecruitment = ({ title, year, mainAccomplishments, image, currentImageIndex, index }) => {
    const theme = useTheme();

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })

    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

    // Calculate the remaining time until the event and update the countdown state
    const calculateCountdown = () => {
        const today = new Date();
        const eventDate = new Date('2024-03-22 23:59:59');
        const timeDifference = eventDate.getTime() - today.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown({ days, hours, minutes });
    };

    // Calculate the countdown on component mount and then update it every minute
    useEffect(() => {
        calculateCountdown();

        const intervalId = setInterval(calculateCountdown, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const ItemCountDown = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: '3.0rem',
        opacity: 0.9,
        boxShadow: 'none'

    }));
    const ItemCountDownTitle = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        color: theme.palette.primary.main,
        fontWeight: 400,
        fontSize: '2vw',
        opacity: 0.7,
        boxShadow: 'none'
    }));

    return (<>
        <Box
            sx={{
                width: (mobile || smallMobile) ? "70%" : '50%',
                height: (smallMobile || mobile) ? "25vh" : "15vh",
                backgroundColor: '#fff',
                borderRadius: '25px',
                opacity: '0.9',
                padding: (smallMobile || mobile) ? "0rem 3rem" : '1.5rem 4rem',
                zIndex: '3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: "hidden"
            }}
        >
            
                <div style={{display: "flex", flexDirection: (smallMobile || mobile) ? "column" : "row", alignItems: "center", width: "100%",  gap: "10%"}}>
                    <div style={{width: (smallMobile || mobile) ? "100%" : "40%", height: "100%", display: "flex", alignItems:" center", justifyContent: "center"}}>
                        
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'Bold',
                            color: theme.palette.primary.main,
                            textTransform: 'uppercase',
                            fontSize: mobile ? "4vw" : (smallMobile ? "6vw" : (desktop ? "2vw" : (largeDesktop ? "1.5vw" : "2vw"))),
                            textAlign: !(mobile || smallMobile) ? "none" : "center"
                        }}
                    >Recruitment {!(smallMobile || mobile) && (<br/>)} Closes in</Typography>   
                        
                    </div>                

                    <div style={{width: "80%",  display: "flex", flexDirection: "row", gap: "10%",  alignItems: "center", justifyContent: (mobile || smallMobile) ? "center" : "right"}}>
                        <div style={{width:"20%"}}>
                            <ItemCountDown>
                                {countdown.days}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                DAYS
                            </ItemCountDownTitle>
                        </div>

                        <div style={{marginTop: "-10%"}}>
                           <Typography sx={{textAlign: 'center',
                            color: theme.palette.primary.main,
                            fontWeight: 400,
                            fontSize: '6vw',
                            opacity: 0.7,
                            boxShadow: 'none',
                        }}>:</Typography> 
                        </div>
                        
                        <div style={{width:"20%"}}>
                        <ItemCountDown>
                                {countdown.hours}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                HOURS
                            </ItemCountDownTitle>
                        </div>

                        <div style={{marginTop: "-10%"}}>
                           <Typography sx={{textAlign: 'center',
                            color: theme.palette.primary.main,
                            fontWeight: 400,
                            fontSize: '6vw',
                            opacity: 0.7,
                            boxShadow: 'none',
                        }}>:</Typography> 
                        </div>

                        <div style={{width:"20%"}}>
                        <ItemCountDown>
                                {countdown.minutes}
                            </ItemCountDown>
                            <ItemCountDownTitle>
                                MINUTES
                            </ItemCountDownTitle>
                        </div>
                </div>

                </div>

        </Box >

    </>
    );
};

export default CountDownRecruitment;
