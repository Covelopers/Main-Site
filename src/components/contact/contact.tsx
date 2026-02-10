import "./Contact.css";

export function Contact() {
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="contact-header">
          <h2>Get Started</h2>
          <p>Ready to build real software? Apply now to join our next cohort.</p>
        </div>
        
        <form
          className="contact-form"
          action="https://formsubmit.co/fe901deddbfb3f5351426dee5e93bb62"
          method="POST"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          
          <div className="form-group">
            <label className="contact-label">
              Name
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="contact-label">
              Email
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          
          <label className="contact-label">
            Message
            <textarea
              name="message"
              className="contact-textarea"
              placeholder="Tell us about your experience and goals..."
              rows={6}
              required
            />
          </label>
          
          <div className="form-actions">
            <button type="submit" className="contact-button">
              Submit Application
            </button>
          </div>
          
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.origin} />
        </form>
      </div>
    </section>
  );
}