function Contact() {
  return (
    <main>
      {/* CONTACT PAGE */}
      <section className="contact-section">
        <div className="container">

          <div className="contact-header">
            <div className="section-label">
              GET IN TOUCH
            </div>

            <h2>
              Let's build something
              <br />
              <span>great together.</span>
            </h2>

            <p>
              Have a project in mind? Tell us about it and we'll get back
              to you soon.
            </p>
          </div>

          <div className="contact-grid">

            {/* CONTACT INFO */}
            <div className="contact-info">

              <div className="contact-info-item">
                <span>EMAIL</span>
                <a href="mailto:hello@arclixdigital.com">
                  hello@arclixdigital.com
                </a>
              </div>

              <div className="contact-info-item">
                <span>PHONE</span>
                <a href="tel:+923001234567">
                  +92 300 1234567
                </a>
              </div>

              <div className="contact-info-item">
                <span>LOCATION</span>
                <p>Pakistan — Working Worldwide</p>
              </div>

            </div>

            {/* CONTACT FORM */}
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Your message has been received.");
              }}
            >
              <div className="form-row">

                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>COMPANY</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label>SERVICE</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Brand Strategy</option>
                    <option>Web Design</option>
                    <option>Development</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>TELL US ABOUT YOUR PROJECT</label>

                <textarea
                  placeholder="Tell us a little about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message ↗
              </button>

            </form>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;