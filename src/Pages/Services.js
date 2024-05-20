import React from 'react'

import WebappFuturalia from '../images/other/webapp_futuralia.png'
import AppThirstPortugal from '../images/other/ThirstPortugal.png'
import Industries from '../components/Industries'
import PortfolioComponent from '../components/PortfolioComponent'

const Services = () => {
    return (
        <>
        <div style={{overflow: "hidden", background: "#F0F0F0", margin: "0 auto", marginTop: "70px"}}>
            <div style={{width: "100dvw", height: "100vh", top: "70px", overflow: "hidden",
                display: "flex", flexDirection: "row"
            }}>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "65%"}}>
                    <div style={{width: "80%", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <p style={{fontSize: "70px", width: "70%"}}>We provide the best solutions for your businnes</p>
                        <button style={{width:"25%", height: "35px", background:"#052533", color: "white",
                            border: "none", borderRadius: "3px"
                        }}>Download Our Portfolio</button>
                    </div>
                    
                </div>
                <div style={{background: "#732043", width: "35%", height: "100%", borderRadius: "200px 0 0 0"}}></div>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{cursor: "pointer", background: "#732043", width: "25%", height: "60px", color: "white", border: "none", borderRadius: "10px 0 0 10px"}}>
                    IT Development
                </button>
                <button style={{cursor: "pointer", background: "#E591AD", width: "25%", height: "60px", color: "white", border: "none", borderRadius: "0 10px 10px 0"}}>
                    Robotics & Prototyping
                </button>
            </div>

            <div style={{width: "100dvw", height: "100vh", overflow: "hidden",
                display: "flex", flexDirection: "row"
            }}>

                <div style={{background: "#E591AD", width: "35%", height: "100%", position: "relative", left: "0"}}></div>
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "65%", position: "relative"}}>
                    <div style={{ width: "50%", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                        <h1 style={{fontSize: "70px", color: "#732043"}}>Software Solutions</h1>
                        <p style={{fontSize: "30px"}}>Lorem ipsum LOrem ipsum Lorem ipsum</p>                       
                    </div>
                    
                </div>
                
            </div>

            <div style={{width: "100dvw", height: "100vh", overflow: "hidden",
                display: "flex", flexDirection: "row"
            }}>

                <div style={{background: "white", width: "85%", height: "100%", position: "relative", left: "0", borderRadius: "0 150px 0 0",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <div style={{width: "auto"}}>
                        <h1 style={{fontSize: "70px", color: "#732043", width: "60%"}}>Mobile Development</h1>
                        <p style={{fontSize: "30px"}}>Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </div>
                
                </div>
                
            </div>

            <div style={{display: "flex", flexDirection: "row", gap: "50px", justifyContent: "center"}}>
                <div style={{width: "240px", height: "140px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>1</h1>
                    <p style={{color: "white"}}>Discussion of your needs</p>
                </div>
                <div style={{width: "240px", height: "140px", background: "#732043", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>2</h1>
                    <p style={{color: "white"}}>Requirements & Timings</p>
                </div>
                <div style={{width: "240px", height: "140px", background: "#1E1E1E", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>3</h1>
                    <p style={{color: "white"}}>Budget Proposal</p>
                </div>
                <div style={{width: "240px", height: "140px", background: "#732043", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>4</h1>
                    <p style={{color: "white"}}>Project Development</p>
                </div>
            </div>

            <Industries></Industries>

            <div style={{background: "#732043", height: "auto", padding: "100px 0", display: "flex", flexDirection: "column", 
            rowGap: "50px", alignItems: "center", justifyContent: "center"}}>

                <PortfolioComponent image={WebappFuturalia} index={0}></PortfolioComponent>
                <PortfolioComponent image={AppThirstPortugal} index={1}></PortfolioComponent>

            </div>            

        </div>
        
        </>
    )
}

export default Services