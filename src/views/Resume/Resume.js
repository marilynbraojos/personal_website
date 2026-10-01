import React from 'react';
import './Resume.css';
import resumePdf from '../../assets/resume/braojosgutierrez_resume.pdf';

function Resume() {
  const publicPdfUrl = process.env.PUBLIC_URL + '/resume/braojosgutierrez_resume.pdf';
  const pdfSource = resumePdf || publicPdfUrl;

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-title">Resumé</h1>
        <a 
          href={pdfSource} 
          download="Marilyn_Braojos_Resume.pdf" 
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="download-icon">📥</span> Download PDF
        </a>
      </div>

      <div className="pdf-viewer-wrapper">
        <object
          data={pdfSource}
          type="application/pdf"
          className="pdf-viewer"
        >
          <iframe
            src={pdfSource}
            title="Marilyn Braojos Resume"
            className="pdf-viewer"
          >
            <p>
              Your browser does not support inline PDFs. 
              <a href={pdfSource} download="Marilyn_Braojos_Resume.pdf">
                Click here to download the PDF
              </a>.
            </p>
          </iframe>
        </object>
      </div>
    </div>
  );
}

export default Resume;
