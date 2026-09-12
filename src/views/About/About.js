import React from "react";
import "./About.css"

function About() {
    return(
        <div className="about-container">
            <div className="about-title">
                {/* <header className="App-header"> */}
                <p>
                Mari is trying her best 
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                {/* </header> */}
            </div>
        </div>
    )

}

export default About;