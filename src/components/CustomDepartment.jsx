import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CustomComponent from './MemberComponents';

const CustomDepartment = ({ department }) => {
  const getMembers = (department) => {
    return department ? department.members.map((member) => member) : [];
  }

  const theme = useTheme();

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
        {department.name + " Team"}
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
        {/* Render CustomComponent for director only if it exists */}
        {department.director && (
          <CustomComponent 
            title={department.director.title} 
            name={department.director.name} 
            image={department.director.imgDirectory} 
          />
        )}

        {/* Remaining CustomComponent instances */}
        {getMembers(department).map((member, index) => (            
          <CustomComponent key={index + 1} title='' name={member.name} image={member.imgDirectory} />
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default CustomDepartment;
