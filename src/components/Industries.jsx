import React from 'react'
import FillImage from '../images/other/maki_theatre.png'

function Industries() {
  return (
    <div style={{height: "100vh", borderRadius: "0 0 20px 20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: "30px"}}>
                <div style={{ width: "80%", padding: "20px 0 40px 0"}}>
                    <h1 style={{fontWeight: "normal"}}>WE WORK FOR DIFFERENT</h1>
                    <h1 style={{fontSize: "60px", color: "#732043"}}>INDUSTRIES & AUDIENCES</h1>
                </div>

                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 2fr)", rowGap: "30px", margin: "0 auto",
                alignContent: "center", justifyItems: "center", alignItems: "center", width: "70%"}}>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Theathers</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Educational Fairs</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Glass Industry</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Aviation Engineering</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Travel Agencies</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>ONG's</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>Events</p>
                    </div>
                    <div style={{background: "white", width: "200px", height: "200px", borderRadius: "30px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"
                    }}>
                        <img src={FillImage} style={{width: "70px"}}/>
                        <p style={{color: "#732043", fontWeight: "bold", fontSize: "20px", width: "85%", textAlign: "center"}}>E-commerce Businesses</p>
                    </div>
                </div>
            </div>
  )
}

export default Industries