import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CustomComponent from './MemberComponents';

const CustomDepartment = ({ Department, names, images }) => {
  const theme = useTheme();

  const directorTitle = Department + " Director"

  return (
    <ThemeProvider theme={theme}>
      <Typography 
        variant="h4" 
        align="left" 
        sx={{
          fontWeight: 'Bold', 
          color: theme.palette.primary.main, 
          fontFamily: theme.typography.fontFamily, 
          marginLeft: 15,
        }}
      >
        {Department + " Team"}
      </Typography>
            
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          p: 5,
          maxWidth: '800px', 
          margin: '0 auto', 
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        }}
      >
        {/* First CustomComponent with specific props */}
        <CustomComponent title={directorTitle} name={names[0]} image={images[0]} />

        {/* Remaining CustomComponent instances */}
        {names.slice(1).map((name, index) => (          
          <CustomComponent key={index + 1} title='' name={name} image={images[index + 1]} />
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default CustomDepartment;
