import React from 'react'

import WebappFuturalia from '../images/other/webapp_futuralia.png'
import AppThirstPortugal from '../images/other/ThirstPortugal.png'
import CheckIcon from '../images/other/simple-line-icons_check.png'
import Industries from '../components/Industries'

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

                <div style={{background: "white", width: "80%", height: "450px", borderRadius: "25px", display: "flex", overflow: "hidden"}}>
                    <div style={{width: "40%", padding: "0 25px", marginLeft: "30px", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden"}}>
                        <img src={WebappFuturalia} style={{width: "110%"}}/>
                    </div>
                    <div style={{padding: "50px 20px", margin: "0 0 0 50px", width: "60%", display: "flex", flexDirection: "column", rowGap: "25px"}}>
                        <h1>WEBAPP FUTURÁLIA</h1>
                        <div style={{ padding: "0 0 20px 25px", display: "flex", flexDirection: "column", rowGap: "10px"}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center",  gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Agenda do Evento</p>  
                            </div>   
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Mapa 3D do Recinto</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Listagem de Expositores</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Roteiros Personalizados</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Notificações de Eventos</p>
                            </div> 

                        </div>
                        <button style={{
                            background: "#732043",
                            color: "white",
                            border: "none", 
                            borderRadius: "50px",
                            width: "95%",
                            height: "40px",
                            fontSize: "20px",
                            cursor: "pointer"
                        }}>Futurália - A maior feira de educação em Portugal</button>
                        
                    </div>
                </div>

                <div style={{background: "white", width: "80%", height: "450px", borderRadius: "25px", display: "flex", overflow: "hidden"}}>
                    
                    <div style={{padding: "50px 20px", margin: "0 0 0 50px", width: "60%", display: "flex", flexDirection: "column", rowGap: "25px"}}>
                        <h1>APP THIRST PORTUGAL</h1>
                        <div style={{ padding: "0 0 20px 25px", display: "flex", flexDirection: "column", rowGap: "10px"}}>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center",  gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Intranet Organizacional</p>  
                            </div>   
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Gestão de Equipas</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Pedidos de Merchandising</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Publicação de Notícias</p>
                            </div> 
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                                <img src={CheckIcon} style={{width: "20px"}}/>
                                <p style={{fontSize: "24px", fontWeight: "300"}}>Publicação de Eventos</p>
                            </div> 

                        </div>
                        <button style={{
                            background: "#732043",
                            color: "white",
                            border: "none", 
                            borderRadius: "50px",
                            width: "95%",
                            height: "40px",
                            fontSize: "20px",
                            cursor: "pointer"
                        }}>Thirst Project - A maior organização de Água</button>
                        
                    </div>
                    <div style={{width: "40%", padding: "0 25px", marginRight: "30px", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden"}}>
                        <img src={AppThirstPortugal} style={{width: "110%"}}/>
                    </div>
                </div>
            </div>

            

        </div>
        
        </>
    )
}

export default Services