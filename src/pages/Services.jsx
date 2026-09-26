import { Link } from "react-router-dom";

function Services() {
  return (
    <main>
      <section className="services-section">
        <div className="container">

          {/* SECTION LABEL */}
          <div className="section-label">
            WHAT I DO
          </div>

          {/* HEADING */}
          <div className="services-heading">
            <div className="services-heading-row">
              <h2>
                Digital services
                <br />
                <span>built to perform.</span>
              </h2>

              <p>
                I design and build modern digital experiences that help
                businesses look professional, reach the right audience,
                and turn visitors into customers.
              </p>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="services-grid">

            {/* SERVICE 01 */}
            <Link
              to="/services/web-design"
              className="service-card"
            >
              <div className="service-top">
                <span className="service-number">01</span>
                <div className="service-icon">✦</div>
              </div>

              <div className="service-content">
                <h3>Web Design</h3>

                <p>
                  Clean, modern and professional website designs created
                  to represent your business and make a strong first
                  impression.
                </p>
              </div>

              <div className="service-link">
                Explore Service
                <span>↗</span>
              </div>
            </Link>


            {/* SERVICE 02 */}
            <Link
              to="/services/web-development"
              className="service-card"
            >
              <div className="service-top">
                <span className="service-number">02</span>
                <div className="service-icon">◈</div>
              </div>

              <div className="service-content">
                <h3>Web Development</h3>

                <p>
                  Fast, responsive and reliable websites built with
                  modern technologies for a smooth experience across
                  desktop and mobile.
                </p>
              </div>

              <div className="service-link">
                Explore Service
                <span>↗</span>
              </div>
            </Link>


            {/* SERVICE 03 */}
            <Link
              to="/services/paid-advertising"
              className="service-card"
            >
              <div className="service-top">
                <span className="service-number">03</span>
                <div className="service-icon">◎</div>
              </div>

              <div className="service-content">
                <h3>Paid Advertising</h3>

                <p>
                  Targeted advertising campaigns designed to reach the
                  right audience, generate quality traffic and support
                  business growth.
                </p>
              </div>

              <div className="service-link">
                Explore Service
                <span>↗</span>
              </div>
            </Link>


            {/* SERVICE 04 */}
            <Link
              to="/services/landing-pages"
              className="service-card"
            >
              <div className="service-top">
                <span className="service-number">04</span>
                <div className="service-icon">↗</div>
              </div>

              <div className="service-content">
                <h3>Landing Pages</h3>

                <p>
                  High-quality landing pages focused on clear messaging,
                  strong calls to action and converting visitors into
                  potential customers.
                </p>
              </div>

              <div className="service-link">
                Explore Service
                <span>↗</span>
              </div>
            </Link>

          </div>

          {/* BOTTOM CTA */}
          <div className="services-footer">
            <span>HAVE A PROJECT IN MIND?</span>

            <Link to="/contact">
              Let's Talk <span>↗</span>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Services;