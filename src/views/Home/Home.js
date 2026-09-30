import React from "react";
import "./Home.css";

const HEADSHOT = require("../../assets/headshot.png");

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-card">
          <div className="headshot-wrapper">
            <img src={HEADSHOT} className="headshot" alt="Marilyn Braojos" />
          </div>
          
          <div className="intro-content">
            <div className="greeting-badge">Welcome</div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-name">Marilyn</span>
            </h1>
            
            <div className="tag-pills">
              <span className="tag-pill">Researcher</span>
              <span className="tag-pill">Engineer</span>
              <span className="tag-pill">Adventurer</span>
            </div>

            <p className="hero-bio">
              I'm a PhD student in Robotics Aerospace Engineering at Georgia Tech with an expected graduation of May 2027.
            </p>

            <div className="education-highlights">
              <div className="edu-item">
                <span className="edu-icon">🎓</span>
                <div>
                  <strong>PhD in Robotics Aerospace Engineering</strong>
                  <span className="edu-sub">Georgia Tech — Exp. May 2027</span>
                </div>
              </div>

              <div className="edu-item">
                <span className="edu-icon">🎓</span>
                <div>
                  <strong>MS in Mechanical Engineering</strong>
                  <span className="edu-sub">University of Florida — 2022</span>
                </div>
              </div>

              <div className="edu-item">
                <span className="edu-icon">🎓</span>
                <div>
                  <strong>BS in Mechanical Engineering & BS in Neuroscience</strong>
                  <span className="edu-sub">University of Florida — 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;