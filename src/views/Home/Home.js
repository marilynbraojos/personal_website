import React from "react";
import "./Home.css"

const HEADSHOT = require("../../assets/headshot.png");

function Home() {
    return(
        <div className="home-container">
            <div className="row" id="home-hero">  
                <div className="intro"> 
                    <img src={HEADSHOT} className="headshot" alt="headshot" />
                    <div className="intro-text"> 
                        <h1>
                            Hi! <br/>
                            I'm Mari 💗
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;