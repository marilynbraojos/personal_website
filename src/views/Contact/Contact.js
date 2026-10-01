import React, { useState } from 'react';
import './Contact.css';

// Exact Google Form Action URL & Entry IDs extracted from form link:
// Form: "Mari's Website Contact Request" (under marilynbraojos@gmail.com)
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRPzgPC_PJlEjLZzkri32sYZTy07okQC8sL0Q3sQKwbKwn4g/formResponse";

const ENTRY_IDS = {
  name: "entry.1725655938",
  contact: "entry.288972527",
  message: "entry.940829274"
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.field]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <span className="contact-icon">✉️</span>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a question, research inquiry, or project proposal? Send me a message below!
          </p>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✨</div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out, {formData.name || 'there'}! Your response has been submitted directly to my contact requests.</p>
            <button 
              className="send-another-btn" 
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', contact: '', message: '' });
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            {/* Hidden iframe processes silent background POST directly to your Google Form */}
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: 'none' }}
              title="hidden_iframe"
            ></iframe>

            <form
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name={ENTRY_IDS.name}
                  data-field="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact Information / Email</label>
                <input
                  type="text"
                  id="contact"
                  name={ENTRY_IDS.contact}
                  data-field="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="e.g. jane@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name={ENTRY_IDS.message}
                  data-field="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
