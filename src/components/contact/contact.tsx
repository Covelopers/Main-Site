import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact-section">
      <form
        className="contact-form"
        action="https://formsubmit.co/fe901deddbfb3f5351426dee5e93bb62"
        method="POST"
      >
        <input type="text" name="_honey" style={{ display: "none" }} />

        <div className="form-group">
          <label className="contact-label">
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Enter Name"
              required
            />
          </label>

          <label className="contact-label">
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="Enter Email"
              required
            />
          </label>
        </div>

        <label className="contact-label">
          <textarea
            name="message"
            className="contact-textarea"
            placeholder="Your message here..."
            rows={6}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="contact-button">
            Send
          </button>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={window.location.origin} />
      </form>
    </div>
  );
};

export default Contact;