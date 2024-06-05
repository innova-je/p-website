import React from 'react'
import ProjectTimeline from './ProjectTimeline'

function MobileDevelopment() {
  return (
    <div style={{width: "100dvw", height: "100vh", overflow: "hidden",
                display: "flex", flexDirection: "column"
            }}>

                <div style={{background: "white", width: "85%", height: "100%", position: "relative", left: "0", borderRadius: "0 150px 0 0",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <div style={{width: "auto"}}>
                        <h1 style={{fontSize: "70px", color: "#732043", width: "60%"}}>Mobile Development</h1>
                        <p style={{fontSize: "30px"}}>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                
                </div>
                <div style={{marginTop: "-100px", zIndex: "2"}}>
                    <ProjectTimeline></ProjectTimeline>
                </div>
                
                
            </div>
  )
}

export default MobileDevelopment