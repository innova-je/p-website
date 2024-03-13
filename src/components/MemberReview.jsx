import React from 'react';
import { Typography, Box, Avatar, useTheme } from '@mui/material';

const MemberReview = ({ image, name, department, text }) => {
    const theme = useTheme();
    return (
        <Box
            border="1px solid #ddd"
            borderRadius="15px"
            overflow="hidden"
            p={1}
            textAlign="center"
            bgcolor="white"
            width="15rem"
            boxShadow={3}
            sx={{
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1)', 
                },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx={{ margin: 1 }}
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
