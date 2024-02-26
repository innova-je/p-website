import React from 'react';
import { Typography, Box, Avatar, useTheme } from '@mui/material';

const CustomReview = ({ image, name, department, text }) => {
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
                    }}
                >
                    <Avatar src={image} alt={name} sx={{ width: 30, height: 30 }} />
                    <Box textAlign="left" paddingLeft={0.5}>
                        <Typography variant="body2" sx={{ fontWeight: "Medium", mb: -0.5 }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                            {department}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body2" align="center" sx={{fontSize:"12px"}}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

export default CustomReview;
