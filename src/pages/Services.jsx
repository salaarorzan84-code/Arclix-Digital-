import { Link } from "react-router-dom";

function Services() {
  return (
    <main>
      <section className="services-section">
        <div className="container">
          
          <div className="section-label">
            WHAT WE DO
          </div>

          <div className="services-heading">
            <div className="services-heading-row">
              <h2>
                Services built for
                <br />
                <span>digital growth.</span>
              </h2>

              <p>
                Strategy, design, and development to help your brand
                stand out, connect with the right audience, and grow online.
              </p>
            </div>
          </div>

          <div className="services-grid">

            {/* SERVICE 1 */}
            <div className="service-card">
              <span className="service-number">01</span>
              <div className="service-icon">✦</div>

              <h3>Brand Strategy</h3>

              <p>
                Clear brand positioning and strategy built to connect
                with the right audience.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

            {/* SERVICE 2 */}
            <div className="service-card">
              <span className="service-number">02</span>
              <div className="service-icon">◈</div>

              <h3>Web Design</h3>

              <p>
                Modern, professional websites designed to engage
                visitors and create strong digital experiences.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

            {/* SERVICE 3 */}
            <div className="service-card">
              <span className="service-number">03</span>
              <div className="service-icon">⌘</div>

              <h3>Development</h3>

              <p>
                Fast, responsive, and reliable digital solutions
                built with modern technology.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

            {/* SERVICE 4 */}
            <div className="service-card">
              <span className="service-number">04</span>
              <div className="service-icon">✧</div>

              <h3>UI / UX Design</h3>

              <p>
                User-focused interfaces and experiences designed
                to make every interaction simple and effective.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

            {/* SERVICE 5 */}
            <div className="service-card">
              <span className="service-number">05</span>
              <div className="service-icon">◎</div>

              <h3>Digital Marketing</h3>

              <p>
                Smart digital strategies that increase visibility,
                attract the right audience, and drive growth.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

            {/* SERVICE 6 */}
            <div className="service-card">
              <span className="service-number">06</span>
              <div className="service-icon">↗</div>

              <h3>Creative Direction</h3>

              <p>
                Strong creative ideas and visual direction that give
                your brand a clear and memorable identity.
              </p>

              <Link to="/contact">
                Let's Talk ↗
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;