import React from 'react';
import './Resume.css';
import resumePdf from '../../assets/resume/braojosgutierrez_resume.pdf';

function Resume() {
  const publicPdfUrl = process.env.PUBLIC_URL + '/resume/braojosgutierrez_resume.pdf';
  const downloadUrl = resumePdf || publicPdfUrl;

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-page-title">Resumé</h1>
        <a 
          href={downloadUrl} 
          download="Marilyn_Braojos_Resume.pdf" 
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>

      <div className="resume-paper">
        {/* Name & Contact Info */}
        <header className="resume-header-block">
          <h1 className="resume-name">Marilyn Braojos Gutierrez</h1>
          <div className="resume-contact-bar">
            <a href="mailto:marilynbraojos@gmail.com">marilynbraojos@gmail.com</a>
            <span className="sep">|</span>
            <span>(786) 702-4967</span>
            <span className="sep">|</span>
            <a href="https://www.linkedin.com/in/marilynbraojos" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/marilynbraojos
            </a>
            <span className="sep">|</span>
            <span>U.S. Citizen</span>
            <span className="sep">|</span>
            <span>Tier 1 Non-Sensitive</span>
          </div>
        </header>

        {/* Education Section */}
        <section className="resume-section">
          <h2 className="section-title">EDUCATION</h2>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Georgia Institute of Technology</strong>, Atlanta, GA, <em>GPA: 3.90/4.00</em>
              </span>
              <span className="entry-right">Aug 2022 &ndash; Exp. May 2027</span>
            </div>
            <div className="entry-subheader">
              <span>Ph.D. in Aerospace Engineering Robotics</span>
            </div>
            <ul className="entry-bullets">
              <li>
                <strong>Selected Awards:</strong> REACH Scholarship (2023 &ndash; ), Goizueta Fellowship (2023 &ndash; ), NASA Intl Travel Award (2024), Clare Boothe Luce (2026)
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>University of Florida</strong>, Gainesville, FL, <em>GPA: 3.91/4.00</em>
              </span>
              <span className="entry-right">Aug 2015 &ndash; May 2022</span>
            </div>
            <div className="entry-subheader">
              <span>M.S. in Mechanical Engineering (Dynamics, Systems, and Control)</span>
              <span className="entry-right">May 2022</span>
            </div>
            <div className="entry-subheader">
              <span>Bachelor of Science, Mechanical Engineering (Cum Laude Honors)</span>
              <span className="entry-right">December 2020</span>
            </div>
            <div className="entry-subheader">
              <span>Bachelor of Science, Psychology: Neuroscience</span>
              <span className="entry-right">December 2020</span>
            </div>
            <ul className="entry-bullets">
              <li>
                <strong>Selected Awards:</strong> McKnight Fellowship (2022), NASA FSGC MS Fellowship (2021&ndash;2022), Peterson Fellowship (2020)
              </li>
            </ul>
          </div>
        </section>

        {/* Internship Experience */}
        <section className="resume-section">
          <h2 className="section-title">INTERNSHIP EXPERIENCE</h2>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Aerospace Engineering Intern</strong>, NASA Jet Propulsion Lab, Pasadena, CA
              </span>
              <span className="entry-right">May 2024 &ndash; Aug 2024</span>
            </div>
            <ul className="entry-bullets">
              <li>Achieved &lt;2 ns accuracy in clock drift corrections in GPS with transformer model architecture</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Fault Protection Engineering Intern</strong>, NASA Jet Propulsion Lab, Pasadena, CA
              </span>
              <span className="entry-right">May 2023 &ndash; May 2024</span>
            </div>
            <ul className="entry-bullets">
              <li>Designed UI and functionality for the Mars Sample Return SRL mitigation matrix using FileMaker Pro system</li>
              <li>Developed FMECA and FTA for 12 subsystems in Mars Sample Return SRL to identify single point system failures</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Robotics Intern</strong>, NASA Goddard Space Flight Center, Remote
              </span>
              <span className="entry-right">June 2022 &ndash; Aug 2022</span>
            </div>
            <ul className="entry-bullets">
              <li>Built Python application to control 6-DOF hexapod, mount, interferometer, and nanopositioners for LISA mission telescope tests</li>
              <li>Automated hexapod trajectory for LISA optical tests with Python API and QEMU emulator</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Mechanical Engineering Intern</strong>, Raytheon Technologies, Springfield, VA
              </span>
              <span className="entry-right">June 2021 &ndash; Nov 2021</span>
            </div>
            <ul className="entry-bullets">
              <li>Designed 3 iterations of a pipe mating plate using SolidWorks to adapt a throttle body into a pipe system</li>
              <li>Completed trade study of 20+ OTS products for pipe system air regulation</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Area Business Leader Co-Op</strong>, General Electric Appliances, Louisville, KY
              </span>
              <span className="entry-right">Jan 2020 &ndash; May 2020</span>
            </div>
            <ul className="entry-bullets">
              <li>Modeled common appliance parts with SolidWorks using GD&amp;T and model-based definitions</li>
            </ul>
          </div>
        </section>

        {/* Research Experience */}
        <section className="resume-section">
          <h2 className="section-title">RESEARCH EXPERIENCE</h2>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Graduate Research Assistant</strong>, Space Systems Design Lab, Atlanta, GA
              </span>
              <span className="entry-right">Aug 2022 &ndash; Present</span>
            </div>
            <ul className="entry-bullets">
              <li>Design and execute end-to-end machine learning pipeline for terrain identification robust to 3 sensor fault modes on rovers</li>
              <li>Developed deep learning architectures to achieve 6-hour time horizon satellite clock bias in GNSS-limited areas</li>
              <li>Led 31 Lunar Flashlight science operations contacts with the Deep Space Network</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>NASA Florida Space Grant Fellow</strong>, Precision Space Systems Lab, Gainesville, FL
              </span>
              <span className="entry-right">Aug 2020 &ndash; May 2022</span>
            </div>
            <ul className="entry-bullets">
              <li>Designed flight-ready fiber-coupled 2-lens UV LED system with SolidWorks and DataRay&apos;s WinCamD</li>
            </ul>
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="resume-section">
          <h2 className="section-title">TEACHING EXPERIENCE</h2>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Graduate Teaching Assistant</strong>, Georgia Institute of Technology, Atlanta, GA
              </span>
              <span className="entry-right">Aug 2022 &ndash; July 2025</span>
            </div>
            <ul className="entry-bullets">
              <li>
                <strong>STEP Summer Camp (5/2025&ndash;7/2025):</strong> Mentored 20+ groups of HS students prototyping a boat and rover using PVC and Arduino UNO
              </li>
              <li>
                <strong>Spacecraft Engineering 1&amp;2 (8/2024&ndash;5/2025):</strong> Supervised 10 design project groups, of which 5 were demo-ed in microgravity conditions
              </li>
              <li>
                <strong>Intro to AE (8/2022&ndash;12/2022):</strong> Mentored 18 groups through the design and launch of a model rocket and glider
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="entry-header">
              <span className="entry-left">
                <strong>Undergraduate/Graduate Teaching Assistant</strong>, University of Florida, Gainesville, FL
              </span>
              <span className="entry-right">Jan 2016 &ndash; May 2021</span>
            </div>
            <ul className="entry-bullets">
              <li>
                <strong>Mechanical Engineering Design 2&amp;3 (8/2020&ndash;5/2021):</strong> Head TA; Mentored 1 group directly through the design of a microbioreactor
              </li>
              <li>
                <strong>Thermodynamics (5/2020&ndash;5/2021):</strong> Lectured 70+ students on introductory thermodynamics concepts in 3 weekly discussion sessions
              </li>
              <li>
                <strong>Control Systems Lab (8/2020&ndash;12/2020):</strong> Lectured 45+ students on control schemes and debugged LabVIEW code
              </li>
              <li>
                <strong>Pseudoscience (1/2017&ndash;12/2017):</strong> Organized weekly discussion sessions for 30+ students about common pseudoscience practices
              </li>
              <li>
                <strong>General Chemistry 1&amp;2 (1/2016&ndash;5/2017):</strong> Led 1-2 hour weekly discussions and exam reviews for 50+ students on basic chemistry topics
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership & Involvement Experience */}
        <section className="resume-section">
          <h2 className="section-title">LEADERSHIP &amp; INVOLVEMENT EXPERIENCE</h2>
          <ul className="entry-bullets">
            <li>
              <strong>CEED (8/2024&ndash;Present):</strong> Head mentor; design workshops and directly advise 6 UG/3 grad AE students on graduate school preparation
            </li>
            <li>
              <strong>Space Systems Design Lab (8/2023&ndash;5/2025):</strong> Maintained lab website front-end
            </li>
            <li>
              <strong>UF Shands Hospital (8/2016&ndash;5/2022):</strong> Supervised 11 volunteers and directly assisted 5-6 patients in palliative care for 2 weekly shifts
            </li>
          </ul>
        </section>

        {/* Publications */}
        <section className="resume-section">
          <h2 className="section-title">PUBLICATIONS</h2>
          <ul className="entry-bullets publications-list">
            <li>
              [J3] Achieving Proprioceptive Terrain Classification with Deep Learning Models Robust to Sensor Faults on Lunar Rovers, <em>IEEE RAL</em>, 2026 [In Prep]
            </li>
            <li>
              [J2] Predicting High Accuracy Long-term GPS Clock Bias with Autoregressive Deep Learning Architectures, <em>IEEE Access</em>, 2025 [Revision Submitted]
            </li>
            <li>
              [C2] Developing Deep Learning Models to Predict Long-Term Satellite Clock Bias Corrections, <em>IAC</em>, 2024
            </li>
            <li>
              [J1] Lunar Flashlight Science Ground and Flight Measurements and Operations Using a Multi-Band Laser Reflectometer, <em>ICARUS</em>, 2024
            </li>
            <li>
              [C1] Short Wavelength UV LED Lens System to Attenuate Noise in LISA, <em>AIAA</em>, 2023
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2 className="section-title">SKILLS</h2>
          <ul className="entry-bullets skills-list">
            <li>
              <strong>Programming:</strong> MATLAB, Python, LabVIEW, Minitab, C#
            </li>
            <li>
              <strong>Software:</strong> Amateur Radio Technician (Call Sign: KO4JOT), LaTeX, ROS2, PyTorch, Tensorflow, SolidWorks Certified Associate
            </li>
            <li>
              <strong>Languages:</strong> English (Native/Fluent), Spanish (Native/Fluent)
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Resume;
