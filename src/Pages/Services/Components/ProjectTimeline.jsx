import React from 'react'
import Circle1 from '../../../Assets/Images/Icons/circle1.png'
import Circle2 from '../../../Assets/Images/Icons/circle2.png'
import Circle3 from '../../../Assets/Images/Icons/circle3.png'
import Circle4 from '../../../Assets/Images/Icons/circle4.png'
import { useTheme } from '@mui/material'
import { useMediaQuery } from "react-responsive";

function ProjectTimeline() {
    const theme = useTheme();
    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  
  return (
    <div style={{display: "flex", flexDirection: mobile ? "column" : "row", gap: "2rem", justifyContent: "center", alignItems: "center" }}>
                <div style={{width: mobile ? "230px" : tablet ? "200px" : "18%", height: "130px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle1} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: tablet ? "1rem" : "22px", width: "80%", textAlign: "center"}}>DISCUSSION OF YOUR NEEDS</p>
                </div>
                <div style={{width: mobile ? "230px" : tablet ? "200px" : "18%", height: "130px", background: theme.palette.primary.main, borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle2} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: tablet ? "1rem" : "22px", width: "80%", textAlign: "center"}}>REQUIREMENTS & TIMINGS</p>
                </div>
                <div style={{width: mobile ? "230px" : tablet ? "200px" : "18%", height: "130px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle3} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: tablet ? "1rem" : "22px", width: "80%", textAlign: "center"}}>BUDGET PROPOSAL</p>
                </div>
                <div style={{width: mobile ? "230px" : tablet ? "200px" : "18%", height: "130px", background: theme.palette.primary.main, borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle4} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: tablet ? "1rem" : "22px", width: "80%", textAlign: "center"}}>PROJECT DEVELOPMENT</p>
                </div>
            </div>
  )
}

export default ProjectTimeline