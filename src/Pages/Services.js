import React from 'react'

import WebappFuturalia from '../images/other/webapp_futuralia.png'
import AppThirstPortugal from '../images/other/ThirstPortugal.png'
import Industries from '../components/Industries'
import PortfolioComponent from '../components/PortfolioComponent'
import FigmaWorkshop from '../images/other/Formação_Figma-removebg-preview 1.png'
import SoftwareSolutions from '../components/SoftwareSolutions'
import MobileDevelopment from '../components/MobileDevelopment'
import ProjectTimeline from '../components/ProjectTimeline'
import PortfolioButton from '../components/PortfolioButton'

const Services = () => {

    return (
        <>
        <div style={{overflow: "hidden", background: "#F0F0F0", margin: "0 auto", marginTop: "70px"}}>
            <div style={{width: "100dvw", height: "100vh", top: "70px", overflow: "hidden",
                display: "flex", flexDirection: "row"
            }}>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "65%",  paddingLeft: "30px"}}>
                    <div style={{width: "85%", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                    <p style={{width: "95%", lineHeight: "60px"}}>
                        <span style={{fontSize: "5rem", width: "100%", fontWeight: "bolder", color: "#1E1E1E", marginRight: "20px"}}>
                            We provide the <br></br>
                        </span>
                        <span style={{fontSize: "5rem", width: "100%", fontWeight: "bolder", color: "#732043", marginRight: "20px"}}>
                            best solutions <br></br>
                        </span>
                        <span style={{fontSize: "5rem", width: "80%", fontWeight: "bolder", color: "#1E1E1E", marginRight: "20px"}}>
                            for your 
                        </span>
                        <span style={{fontSize: "5rem", width: "80%", fontWeight: "bolder", color: "#732043"}}>
                             business
                        </span>                        
                    </p>
                        <button style={{width:"30%", height: "50px", background:"#052533", color: "white",
                            border: "none", borderRadius: "8px", marginTop: "30px", fontWeight: "bolder", fontSize: "16px"
                        }}>Download Our Portfolio</button>
                    </div>
                    
                </div>
                <div style={{background: "#732043", width: "35%", height: "100%", borderRadius: "100px 0 0 0"}}>
                    <img src={FigmaWorkshop} />
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{cursor: "pointer", background: "#732043", width: "25%", height: "60px", color: "white", border: "none", borderRadius: "10px 0 0 10px"}}>
                    IT Development
                </button>
                <button style={{cursor: "pointer", background: "#E591AD", width: "25%", height: "60px", color: "white", border: "none", borderRadius: "0 10px 10px 0"}}>
                    Robotics & Prototyping
                </button>
            </div>

            <SoftwareSolutions></SoftwareSolutions>

            <MobileDevelopment></MobileDevelopment>

            <Industries></Industries>

            <div style={{background: "#732043", height: "auto", padding: "100px 0", display: "flex", flexDirection: "column", 
            rowGap: "50px", alignItems: "center", justifyContent: "center"}}>

                <PortfolioComponent image={WebappFuturalia} index={0}></PortfolioComponent>
                <PortfolioComponent image={AppThirstPortugal} index={1}></PortfolioComponent>
                <PortfolioButton></PortfolioButton>

            </div>            

        </div>
        
        </>
    )
}

export default Services