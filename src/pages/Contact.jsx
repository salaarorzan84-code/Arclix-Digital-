import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Contact() {
  const phoneNumber = "923107127757";
  const displayPhone = "0310 7127757";
  const emailAddress = "arvionwebstudio@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const company = form.company.value;
    const service = form.service.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `New Project Inquiry - ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}

Project Details:
${message}`
    );

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
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

              {/* EMAIL */}
              <div className="contact-info-item">
                <span>EMAIL</span>

                <a href={`mailto:${emailAddress}`}>
                  {emailAddress}
                </a>
              </div>


              {/* PHONE */}
              <div className="contact-info-item">
                <span>PHONE</span>

                <a href="tel:+923107127757">
                  {displayPhone}
                </a>
              </div>


              {/* WHATSAPP */}
              <div className="contact-info-item">
                <span>WHATSAPP</span>

                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp ↗
                </a>
              </div>


              {/* LOCATION */}
              <div className="contact-info-item">
                <span>LOCATION</span>

                <p>
                  Pakistan — Working Worldwide
                </p>
              </div>


              {/* SOCIAL MEDIA */}
              <div className="contact-socials">

                <span>SOCIAL MEDIA</span>

                <div className="contact-social-links">

                  {/* FACEBOOK */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61592742513131"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </a>


                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/arvionwebstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>


                  {/* TIKTOK */}
                  <a
                    href="https://tiktok.com/@arvion.web.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    title="TikTok"
                  >
                    <FaTiktok />
                  </a>

                </div>
              </div>


              {/* AVAILABILITY */}
              <div className="contact-availability">

                <span className="availability-dot"></span>

                <div>
                  <strong>
                    Available for new projects
                  </strong>

                  <p>
                    Web design, development & advertising
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

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="Landing Pages">
                      Landing Pages
                    </option>

                    <option value="Paid Advertising">
                      Paid Advertising
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