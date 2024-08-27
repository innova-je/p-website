import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Values from "./Values";

function ValuesSection() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (title) => {
    setSelectedButton((prevTitle) => (prevTitle === title ? null : title));
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });

  const valuesInfo = [
    {
      title: "Mission",
      subtitle: "What impact do we <br>want to create?",
      content:
        "Promote the interaction of students in the business environment, training them in the latest scientific and technological techniques that enable them to develop creative and innovative solutions applied to real problems.",
    },
    {
      title: "Vision",
      subtitle: "What goals do we<br> hope to achieve?",
      content:
        "In-Nova aims to involve the academic and technology communities, highlighting the quality and excellence that characterize NOVA SST and ultimately making university students more competent, entrepreneurial and critical.",
    },
    {
      title: "Values",
      subtitle: "What do we<br> stand by?",
      content:
        "Empowering the entrepreneurial spirit, giving priority to creativity, prioritizing critical thinking and encouraging proactivity and teamwork.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        padding: "100px 0",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: "4rem",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      {valuesInfo.map(({ title, subtitle, content }) => (
        <Values
          key={title}
          title={title}
          subtitle={subtitle}
          content={content}
          currentState={
            selectedButton === title
              ? "expanded"
              : selectedButton
              ? "collapsed"
              : "normal"
          }
          onButtonClick={() => handleButtonClick(title)}
        />
      ))}
    </div>
  );
}

export default ValuesSection;
