import React from 'react';
import { Typography, Box, Avatar, useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const MemberReview = ({ image, name, department, text }) => {
    const theme = useTheme();
    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });


    return (
        <Box
            border="1px solid #ddd"
            borderRadius="15px"
            overflow="hidden"
            p={1}
            width={desktop ? '20dvw' : smallDesktop ? '20dvw' : tablet ? '20dvw' : mobile ? '55dvw' : smallMobile ? '75dvw' : '18dvw'}
            textAlign="center"
            bgcolor="white"
            boxShadow={3}
            height="auto"
            sx={{
                
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: mobile ? undefined : smallMobile ? undefined : 'scale(1.05)',
                },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                sx={{ margin: 1 }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: "1rem",
                        marginBottom: 0.5,
                        paddingRight: 1.5
                    }}
                >
                    <Avatar src={image} alt={name} style={{ width: 40, height: 40 }} />
                    <div style={{textAlign: "left"}} paddingLeft={1.5}>
                        <Typography variant="body2" style={{ fontWeight: "Medium", mb: -0.5 }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" style={{ color: theme.palette.primary.main }}>
                            {department}
                        </Typography>
                    </div>
                </div>

                <Typography variant="body2" align="justify" style={{ fontSize: "12px", paddingTop: "5px" }}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default MemberReview;