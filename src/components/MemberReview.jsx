import React from 'react';
import { Typography, Box, Avatar, useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const MemberReview = ({ image, name, department, text }) => {
    const theme = useTheme();
    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });

    return (
        <Box
            border="1px solid #ddd"
            borderRadius="15px"
            overflow="hidden"
            p={1}
            width= {mobile ? '55dvw' : (smallMobile ? '75dvw' : '18dvw')}
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
                justifyContent="center"
                flexDirection="column"
                sx={{ margin: 1}}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 0.5,
                        paddingRight: 1.5
                    }}
                >
                    <Avatar src={image} alt={name} sx={{ width: 40, height: 40 }} />
                    <Box textAlign="left" paddingLeft={1.5}>
                        <Typography variant="body2" sx={{ fontWeight: "Medium", mb: -0.5 }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                            {department}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body2" align="justify" sx={{ fontSize: "12px", paddingTop:"5px"}}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default MemberReview;
