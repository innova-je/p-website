import { Typography, styled, useTheme } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import languages from "../../../Assets/data/languages.json";

function StatsSection({ language }) {
  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const StatsBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  }));

  const statsStyle = {
    fontSize: mobile ? '9vw' : tablet ? '5vw' : '4vw',
    color: theme.palette.primary.main,
    fontWeight: 700,
  };

  const underStatsStyle = {
    fontSize: mobile ? '4vw' : tablet ? '2vw' : '1.5vw',
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginTop: '-5%',
  };

  const [selectedLanguage, setSelectedLanguage] = useState(languages.en);
  const [sectionData, setSectionData] = useState(languages.en.HomePage.Stats);

  useEffect(() => {
    const newLanguage =
      language.language === "EN" ? languages.en : languages.pt;
    setSelectedLanguage(newLanguage);
    setSectionData(newLanguage.HomePage.Stats);
  }, [language]);

  return (
    <div mt={desktop ? 0 : 3}>
      <div
        style={{
          width: mobile ? '90%' : '85%',
          height: 'auto',
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: mobile ? 2 : 10,
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatsBox>
          <Typography sx={statsStyle}>{sectionData.stat1}</Typography>
          <Typography sx={underStatsStyle}>{sectionData.statdescription1}</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>{sectionData.stat2}</Typography>
          <Typography sx={underStatsStyle}>{sectionData.statdescription2}</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>{sectionData.stat3}</Typography>
          <Typography sx={underStatsStyle}>{sectionData.statdescription3}</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>{sectionData.stat4}</Typography>
          <Typography sx={underStatsStyle}>{sectionData.statdescription4}</Typography>
        </StatsBox>
      </div>
    </div>
  );
}

export default StatsSection;
