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
      <div style={{height: "auto", width: "100vw"}}>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: desktop ? 3: 10,
        }}
      >
        <Typography 
          variant= {desktop ? "h4": "h5"}
          onClick={handleToggle} 
          sx={{
            fontWeight: 'Bold', 
            color: theme.palette.primary.main, 
            fontFamily: theme.typography.fontFamily, 
            background: "red"
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
          
          
          background: "yellow",
          
          flexWrap: 'wrap',
          height: "auto",
          p: 10,
        }}
      >
        <div style={{
            background: "orange",
            display: desktop ? 'flex' : (mobile || expanded) ? 'grid' : "none",
            gridTemplateColumns:  "repeat(2, 2fr)", 
            placeItems: "center", 
            height: "auto",
            alignItems: "center",
            justifyContent: 'center',
            gap: desktop || !expanded ? "10%" : "5%",
          }}>
          {/* Render CustomComponent for director only if it exists */}
        {department.director && (
          <div>
            <CustomComponent 
            title={department.director.title} 
            name={department.director.name} 
            image={department.director.imgDirectory}
            emailAddress={department.director.email}
            linkedinLink={department.director.linkedin} 
          />
          </div>          
        )}

        {/* Remaining CustomComponent instances */}
        {getMembers(department).map((member, index) => (            
          <CustomComponent key={index + 1} title='' name={member.name} image={member.imgDirectory} emailAddress={member.email} linkedinLink={member.linkedin}/>
        ))}
        </div>
        
      </Box>
      </div>
      
    </ThemeProvider>
  );
};

export default CustomDepartment;
