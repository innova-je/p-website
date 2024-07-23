import React from 'react'
import Circle1 from '../../../images/Icons/circle1.png'
import Circle2 from '../../../images/Icons/circle2.png'
import Circle3 from '../../../images/Icons/circle3.png'
import Circle4 from '../../../images/Icons/circle4.png'

function ProjectTimeline() {
  return (
    <div style={{display: "flex", flexDirection: "row", gap: "6%", justifyContent: "center"}}>
                <div style={{width: "15%", height: "130px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle1} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: "22px", width: "80%", textAlign: "center"}}>DISCUSSION OF YOUR NEEDS</p>
                </div>
                <div style={{width: "15%", height: "130px", background: "#732043", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle2} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: "22px", width: "80%", textAlign: "center"}}>REQUIREMENTS & TIMINGS</p>
                </div>
                <div style={{width: "15%", height: "130px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle3} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: "22px", width: "80%", textAlign: "center"}}>BUDGET PROPOSAL</p>
                </div>
                <div style={{width: "15%", height: "130px", background: "#732043", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", padding: "5px 0"}}>
                    <img src={Circle4} style={{width:"45px"}}/>
                    <p style={{color: "white", fontSize: "22px", width: "80%", textAlign: "center"}}>PROJECT DEVELOPMENT</p>
                </div>
            </div>
  )
}

export default ProjectTimeline