import React, { useState, useEffect } from 'react';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 'terrain-classification',
    title: 'Uncertainty-Aware Terrain Classification in Mobile Vehicles',
    category: 'Robotics & Machine Learning',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #1B2A4A 0%, #2A4365 100%)',
    shortDescription: 'Probabilistic terrain classification and confidence estimation for autonomous ground vehicle navigation across off-road environments.',
    fullDescription: 'This project focuses on developing real-time, uncertainty-aware terrain classification algorithms for autonomous mobile ground vehicles operating in unmapped and challenging environments. By quantifying prediction uncertainty alongside class probabilities, the vehicle can make safer, risk-informed path planning decisions when traversing mud, gravel, sand, or obstacles.',
    tech: ['Python', 'PyTorch', 'ROS', 'Computer Vision', 'Bayesian Neural Networks'],
    gallery: [
      { label: 'Terrain Classification Heatmap', color: '#1B2A4A' },
      { label: 'Vehicle Trajectory & Risk Map', color: '#2C5282' },
      { label: 'Sensor Suite Setup', color: '#2B6CB0' }
    ]
  },
  {
    id: 'gt-statics-ai',
    title: 'Building Open Access GT Statics Course with AI Agent as Supplemental Instructor',
    category: 'AI & Education Technology',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #EC79B8 0%, #B83280 100%)',
    shortDescription: 'Developing open-access courseware for Georgia Tech Statics integrated with an AI-driven supplemental teaching assistant for real-time student guidance.',
    fullDescription: 'An innovative educational initiative designed to create high-quality, open-access course materials for Engineering Statics at Georgia Tech. The platform integrates an interactive AI supplemental instructor trained on domain-specific statics principles to answer student queries, guide step-by-step free-body diagram analysis, and offer tailored practice problems 24/7.',
    tech: ['AI Agents', 'LLMs', 'Open Educational Resources', 'React', 'Python'],
    gallery: [
      { label: 'Interactive AI Instructor Interface', color: '#B83280' },
      { label: 'Statics Course Modules', color: '#D53F8C' },
      { label: 'Student Analytics Dashboard', color: '#ED64A6' }
    ]
  },
  {
    id: 'clock-bias-correction',
    title: 'Correcting Clock Bias with Predictive Intelligent Models',
    category: 'Signal Processing & Data Science',
    icon: '⏱️',
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)',
    shortDescription: 'Machine learning models to predict and mitigate timing drift and clock bias in satellite and high-precision sensor systems.',
    fullDescription: 'High-precision systems such as GPS satellites and distributed sensor networks rely heavily on sub-nanosecond synchronization. This research uses time-series forecasting and predictive intelligent models to detect, model, and correct clock drift and frequency offsets dynamically, significantly improving positioning accuracy and sensor fusion synchronization.',
    tech: ['Time-Series Modeling', 'Signal Processing', 'Python', 'Scikit-Learn', 'MATLAB'],
    gallery: [
      { label: 'Clock Drift Prediction Curve', color: '#1A365D' },
      { label: 'Residual Error Distribution', color: '#2B6CB0' },
      { label: 'Sensor Sync Network Architecture', color: '#3182CE' }
    ]
  },
  {
    id: 'sample-return-lander',
    title: 'Sample Return Lander Fault Protection Tools',
    category: 'Aerospace & Systems Engineering',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #9B2C2C 0%, #742A2A 100%)',
    shortDescription: 'Automated fault detection, isolation, and recovery (FDIR) software architectures for planetary sample return landing vehicles.',
    fullDescription: 'Designed and evaluated fault protection (FDIR) logic and verification tools for a high-reliability planetary sample return lander. The system monitors critical flight states, sensor telemetry, and actuator health during entry, descent, and landing (EDL), autonomously executing safe-mode protocols to ensure mission success.',
    tech: ['FDIR Architectures', 'Systems Engineering', 'C++', 'Flight Software', 'Stateflow'],
    gallery: [
      { label: 'Lander State Machine Diagram', color: '#742A2A' },
      { label: 'Fault Tree Analysis Simulation', color: '#9B2C2C' },
      { label: 'Telemetry Monitoring View', color: '#C53030' }
    ]
  },
  {
    id: 'lisa-test-automation',
    title: 'LISA Telescope Test Automation',
    category: 'Space Instrumentation',
    icon: '🔭',
    gradient: 'linear-gradient(135deg, #4A5568 0%, #1A202C 100%)',
    shortDescription: 'Automated hardware-in-the-loop testing framework for verifying precision optics and alignment for the LISA gravitational wave space mission.',
    fullDescription: 'Developed an automated testing and control suite for precision optical characterization of the Laser Interferometer Space Antenna (LISA) telescope components. The system automates sensor calibration, optical axis alignment verification, and environmental stress testing under ultra-clean vacuum conditions.',
    tech: ['Python', 'LabVIEW', 'Optics Characterization', 'Hardware-in-the-Loop', 'Automation'],
    gallery: [
      { label: 'Optical Bench Alignment Rig', color: '#1A202C' },
      { label: 'Automated Interferometry Test Pipeline', color: '#2D3748' },
      { label: 'Precision Measurement Results', color: '#4A5568' }
    ]
  },
  {
    id: 'throttle-body-integration',
    title: 'Throttle Body Integration into Pipe System',
    category: 'Mechanical & Fluid Systems',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #DD6B20 0%, #7B341E 100%)',
    shortDescription: 'Design, computational fluid dynamics (CFD) analysis, and physical testing of an integrated throttle body assembly for fluid flow control.',
    fullDescription: 'A comprehensive mechanical engineering project involving the CAD modeling, structural analysis, and CFD simulation of a custom throttle body mechanism integrated within a pressurized pipe system. Physical prototype testing validated flow coefficients, pressure drops, and actuation response speeds.',
    tech: ['SolidWorks', 'ANSYS CFD', 'Fluid Dynamics', 'Prototyping', 'Flow Measurement'],
    gallery: [
      { label: '3D CAD Pipe Assembly', color: '#7B341E' },
      { label: 'CFD Velocity Vector Contour', color: '#9C4221' },
      { label: 'Physical Flow Bench Prototype', color: '#DD6B20' }
    ]
  },
  {
    id: 'appliance-modeling',
    title: 'Modeling Common Appliances',
    category: 'Thermal & Systems Modeling',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #319795 0%, #234E52 100%)',
    shortDescription: 'Mathematical modeling and energy efficiency analysis of residential appliances under dynamic operating conditions.',
    fullDescription: 'First-principles thermodynamic and electrical modeling of everyday household appliances (refrigerators, HVAC systems, heat pumps) to predict power consumption and dynamic thermal performance. The models enable smart grid energy optimization and predictive maintenance scheduling.',
    tech: ['MATLAB / Simulink', 'Thermodynamics', 'Energy Optimization', 'Data Analytics'],
    gallery: [
      { label: 'Thermodynamic Cycle Simulation', color: '#234E52' },
      { label: 'Energy Consumption Profiles', color: '#285E61' },
      { label: 'Simulink System Architecture', color: '#319795' }
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          Explore research initiatives, engineering designs, and software tools. Click on any project to view details and image galleries.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-image-wrapper" style={{ background: project.gradient }}>
              <span className="card-icon">{project.icon}</span>
              <div className="card-overlay-badge">Click for details</div>
            </div>

            <div className="card-body">
              <span className="category-badge">{project.category}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.shortDescription}</p>

              <div className="tech-tags">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="tech-tag more-tag">+{project.tech.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="modal-hero-banner" style={{ background: selectedProject.gradient }}>
              <span className="modal-icon">{selectedProject.icon}</span>
              <span className="modal-category-badge">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Project Overview</h4>
                <p className="modal-description">{selectedProject.fullDescription}</p>
              </div>

              <div className="modal-section">
                <h4>Technologies & Skills</h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Project Gallery</h4>
                <div className="modal-gallery-grid">
                  {selectedProject.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="gallery-placeholder-card" 
                      style={{ background: img.color }}
                    >
                      <div className="placeholder-icon">🖼️</div>
                      <span className="placeholder-label">{img.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
