import React from 'react'
import SoftwareImg from '../../../Assets/Images/HomePageImages/SoftwareSolutions.png'

function SoftwareSolutions() {
  return (
    <div style={{ height: "90vh", overflow: "hidden", display: "flex", flexDirection: "row"}}>              

                <div style={{background: "#732043", opacity: "0.59", width: "35%", height: "100%", position: "relative", display: "flex"}} /> 
                <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", position: "absolute", zIndex: 10 }}>
                        <img src={SoftwareImg} style={{ width: "100%", paddingBottom: "4rem"}} />
                    </div>
                <div style={{ justifyContent: "flex-start", alignItems: "center", display: "flex", flexDirection: "column", width: "65%", position: "relative"}}>
                    <div style={{ width: "50%", display: "flex", flexDirection: "column", padding: "5rem 0 0 0"}}>
                        <h1 style={{fontSize: "70px", color: "#732043"}}>Software Solutions</h1>
                        <p style={{fontSize: "30px"}}>Lorem ipsum LOrem ipsum Lorem ipsum</p>                       
                    </div>
                </div>
            </div>
  )
}

export default SoftwareSolutions