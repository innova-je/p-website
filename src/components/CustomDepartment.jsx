import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import CustomComponent from './MemberComponents';
import { useMediaQuery } from 'react-responsive';

const CustomDepartment = ({ department }) => {
  const getMembers = (department) => {
    return department ? department.members.map((member) => member) : [];
  }

  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  let notMobile = (tablet || desktop)
  const [expanded, setExpanded] = useState(notMobile);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: desktop ? 3: !expanded ? 10 : 1,
        }}
      >
        <Typography 
          variant= {desktop ? "h4": "h5"}
          onClick={handleToggle} 
          sx={{
            position: 'absolute',
            fontWeight: 'Bold', 
            color: theme.palette.primary.main, 
            fontFamily: theme.typography.fontFamily, 
            left: mobile ? '20dvw': '10dvw',
          }}
        >
          {department.name + " Team"}
        </Typography>

        {!desktop && (
          <IconButton
            onClick={handleToggle}
            color="primary"
            aria-label="toggle-list"
            sx={{ position: 'absolute', left: mobile? '9dvw': '4dvw' }}
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Box>
            
      <Box
        sx={{
          display: expanded || desktop ? 'flex' : 'none',
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
            emailAddress={department.director.email}
            linkedinLink={department.director.linkedin} 
          />
        )}

        {/* Remaining CustomComponent instances */}
        {getMembers(department).map((member, index) => (            
          <CustomComponent key={index + 1} title='' name={member.name} image={member.imgDirectory} emailAddress={member.email} linkedinLink={member.linkedin}/>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default CustomDepartment;