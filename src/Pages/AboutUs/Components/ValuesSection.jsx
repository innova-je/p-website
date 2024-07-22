import React, { useState, useM } from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import Values from "../../../components/Values";

function ValuesSection() {
    
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (title, currentState) => {
    if (currentState === "expanded") {
      setSelectedButton(null);
    } else {
      setSelectedButton(title);
    }
  };

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <>
    <Box
          sx={{
            display: "flex",
            padding: "100px 0px",
            flexDirection: tablet
              ? "column"
              : mobile
              ? "column"
              : smallMobile
              ? "column"
              : "row",
            gap: tablet ? 7 : mobile ? 5 : smallMobile ? 5 : 6,
            justifyContent: "center",
            alignItems: "center",
            zIndex: "2",
          }}
        >
          <Values
            title="Mission"
            subtitle="What impact do we <br>want to create?"
            content="Promote the interaction of students in the business environment, training them in the latest scientific and technological techniques that enable them to develop creative and innovative solutions applied to real problems."
            currentState={
              selectedButton === "Mission"
                ? "expanded"
                : selectedButton
                ? "collapsed"
                : "normal"
            }
            onButtonClick={handleButtonClick}
          />
          <Values
            title="Vision"
            subtitle="What goals do we<br> hope to achieve?"
            content="In-Nova aims to involve the academic and technology communities, highlighting the quality and excellence that characterize NOVA SST and ultimately making university students more competent, entrepreneurial and critical."
            currentState={
              selectedButton === "Vision"
                ? "expanded"
                : selectedButton
                ? "collapsed"
                : "normal"
            }
            onButtonClick={handleButtonClick}
          />
          <Values
            title="Values"
            subtitle="What do we<br> stand by?"
            content="Empowering the entrepreneurial spirit, giving priority to creativity, prioritizing critical thinking and encouraging proactivity and teamwork."
            currentState={
              selectedButton === "Values"
                ? "expanded"
                : selectedButton
                ? "collapsed"
                : "normal"
            }
            onButtonClick={handleButtonClick}
          />
        </Box>
    </>
  )
}

export default ValuesSection