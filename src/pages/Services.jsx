import { Link } from "react-router-dom";

function Services() {
  return (
    <main>
      {/* SERVICES PAGE */}
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
                Strategy, design, and development
                to help your brand grow online.
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
                Clear brand identity built for the right audience.
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
                Modern websites that engage and convert visitors.
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
                Fast, responsive experiences built with modern technology.
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