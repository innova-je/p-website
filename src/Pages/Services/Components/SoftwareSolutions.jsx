import React from 'react'
import SoftwareImg from '../../../images/HomePageImages/SoftwareSolutions.png'

function SoftwareSolutions() {
  return (
    <div style={{width: "100dvw", height: "100vh", overflow: "hidden",
                display: "flex", flexDirection: "row"
            }}>
                

                <div style={{background: "#732043", opacity: "0.59", width: "35%", height: "100%", position: "relative", left: "0", display: "flex"}}>
                    <div style={{ height: "100%", opacity: "1", width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                        <img src={SoftwareImg} style={{transform: "scale(0.6)", opacity: "1", background: "red", position: "absolute", top: "200px", left: "0"}} />
                    </div>
                    
                </div>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "65%", position: "relative"}}>
                    <div style={{ width: "50%", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <h1 style={{fontSize: "70px", color: "#732043"}}>Software Solutions</h1>
                        <p style={{fontSize: "30px"}}>Lorem ipsum LOrem ipsum Lorem ipsum</p>                       
                    </div>
                    
                </div>
                
            </div>
  )
}

export default SoftwareSolutions