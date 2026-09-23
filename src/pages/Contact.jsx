function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const company = form.company.value;
    const service = form.service.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `New Website Project Inquiry - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}

Project Details:
${message}`
    );

    window.location.href = `mailto:hello@arclixdigital.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="contact-section">
        <div className="container">

          {/* HEADER */}
          <div className="contact-header">
            <div className="section-label">
              GET IN TOUCH
            </div>

            <h2>
              Let's build your
              <br />
              <span>next website.</span>
            </h2>

            <p>
              Have a website project in mind? Tell me what you need and
              I'll get back to you as soon as possible.
            </p>
          </div>

          {/* CONTACT GRID */}
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

                <p>
                  Pakistan — Working Worldwide
                </p>
              </div>

              {/* AVAILABILITY */}
              <div className="contact-availability">
                <span className="availability-dot"></span>

                <div>
                  <strong>Available for new projects</strong>
                  <p>
                    Web design & development
                  </p>
                </div>
              </div>

            </div>

            {/* CONTACT FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="form-group">
                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              {/* COMPANY + SERVICE */}
              <div className="form-row">

                <div className="form-group">
                  <label>COMPANY</label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label>SERVICE</label>

                  <select
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Web Design">
                      Web Design
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Landing Page">
                      Landing Page
                    </option>

                    <option value="Website Redesign">
                      Website Redesign
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="form-group">

                <label>
                  TELL ME ABOUT YOUR PROJECT
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your business, website requirements, and what you want to achieve..."
                  required
                ></textarea>

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit"
              >
                Send Project Inquiry ↗
              </button>

            </form>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Contact;