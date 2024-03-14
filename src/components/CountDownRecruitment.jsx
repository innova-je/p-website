import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';

const CountDownRecruitment = ({ title, year, mainAccomplishments, image, currentImageIndex, index }) => {
    const theme = useTheme();
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
        fontSize: '1.5rem',
        opacity: 0.7,
        boxShadow: 'none'
    }));

    return (<>
        <Box
            sx={{
                width: '65%',
                backgroundColor: '#fff',
                borderRadius: '25px',
                position: 'absolute',
                top: '53%',
                opacity: '0.85',
                padding: '20px',
                zIndex: '3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid
                container
                direction={['column', 'row']}
                justifyContent="center"
                alignItems={'center'}
                spacing={2}
            >
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'Light',
                            color: theme.palette.primary.main,
                            textTransform: 'uppercase',
                        }}
                    >
                        Recruitment <br /> Closes in
                    </Typography>
                </Grid>
                <Grid item container direction="row" columnGap={12} xs={12} md={6}>
                    <Stack spacing={2} xs={12} md={4}>
                        <ItemCountDown>
                            {countdown.days}
                        </ItemCountDown>
                        <ItemCountDownTitle>
                            DAYS
                        </ItemCountDownTitle>
                    </Stack>
                    <Stack spacing={2} xs={12} md={4}>
                        <ItemCountDown>
                            {countdown.hours}
                        </ItemCountDown>
                        <ItemCountDownTitle>
                            HOURS
                        </ItemCountDownTitle>
                    </Stack>
                    <Stack spacing={2} xs={12} md={4}>
                        <ItemCountDown>
                            {countdown.minutes}
                        </ItemCountDown>
                        <ItemCountDownTitle>
                            MINUTES
                        </ItemCountDownTitle>
                    </Stack>
                </Grid>
            </Grid>

        </Box >

    </>
    );
};

export default CountDownRecruitment;
