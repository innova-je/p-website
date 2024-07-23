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
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  let notMobile = (tablet || desktop)
  const [expanded, setExpanded] = useState(notMobile);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center",
            paddingBottom: desktop ? 3 : !expanded ? 4 : 0,
            //marginRight:"20px",
          }}
        >
          <div style={{display: "flex", flexDirection: "row"}}>
            {!desktop && (
            <div style={{
              display: "flex",
              justifyContent: "center", 
              alignItems: "center"}}>
              <IconButton
              onClick={handleToggle}
              color="primary"
              aria-label="toggle-list"
            >
              <ExpandMoreIcon />
            </IconButton>
            </div>            
          )}     

        <Typography
          variant={desktop ? "h4" : "h6"}
          onClick={handleToggle}
          sx={{
            position: 'relative',
            fontWeight: 'Bold',
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily,
            // left: mobile ? '20dvw': '10dvw',
            textAlign: "center",
            width: "100%",
            margin: "3dvw 0 2dvw 0"
          }}
        >
          {department.name + " Team"}
        </Typography>

        

        </div>          

        </Box>

        <Box
        sx={{
          display: expanded || desktop ? 'flex' : 'none',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          p: 5,
          marginTop: "100px",
          maxWidth: '800px',
          margin: '0 auto',
          '@media (min-width: 1200px)': {
            maxWidth: '1700px',
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
          <CustomComponent key={index + 1} title='' name={member.name} image={member.imgDirectory} emailAddress={member.email} linkedinLink={member.linkedin} />
        ))}
      </Box>

      </div>
      
    </ThemeProvider>
  );
};

export default CustomDepartment;