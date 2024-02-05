import React from 'react';
import { Typography, Box, Avatar, useTheme } from '@mui/material';

const CustomReview = ({ image, name, department, text }) => {
    const theme = useTheme();
    return (
        <Box
            border="1px solid #ddd"
            borderRadius="30px"
            overflow="hidden"
            p={2}
            textAlign="center"
            bgcolor="white"
            width="21rem"
            boxShadow={10}
        
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx={{ margin: 2 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 1,
                    }}
                >
                    <Avatar src={image} alt={name}
                        sx={{ width: 60, height: 60}} />
                    <Box textAlign="left" paddingLeft={2}>
                        <Typography variant="h6"
                            sx={{ fontWeight: "Medium", mb: -0.5, }}>
                            {name}
                        </Typography>
                        <Typography variant="subtitle2"
                            sx={{color: theme.palette.primary.main, }}>
                            {department}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body1" align="center">
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default CustomReview;
