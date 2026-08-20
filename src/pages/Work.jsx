import { Link } from "react-router-dom";

function Work() {
  return (
    <main>
      {/* WORK PAGE */}
      <section className="work-section">
        <div className="container">
          <div className="work-heading">
            <div className="section-label">
              SELECTED WORK
            </div>

            <div className="work-heading-row">
              <h2>
                Work that creates
                <br />
                <span>real impact.</span>
              </h2>

              <p>
                Selected brands, websites, and digital projects built for impact.
              </p>
            </div>
          </div>

          <div className="work-grid">

            {/* PROJECT 1 */}
            <article className="project-card project-large">
              <div className="project-visual visual-one">
                <img
                  src="/images/project-1.jpg"
                  alt="Nova Luxury"
                  className="project-image"
                />

                <div className="visual-content">
                  <div className="visual-logo">
                    NOVA
                  </div>

                  <div className="visual-line"></div>
                  <div className="visual-circle"></div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    BRANDING / WEB
                  </span>

                  <h3>Nova Luxury</h3>
                </div>

                <Link to="/contact">
                  Start Similar Project ↗
                </Link>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="project-card">
              <div className="project-visual visual-two">
                <img
                  src="/images/project-2.jpg"
                  alt="Vertex Growth"
                  className="project-image"
                />

                <div className="dashboard-card">
                  <div className="dashboard-top">
                    <span>GROWTH</span>
                    <span>+84.6%</span>
                  </div>

                  <div className="chart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    MARKETING
                  </span>

                  <h3>Vertex Growth</h3>
                </div>

                <Link to="/contact">
                  Start Similar Project ↗
                </Link>
              </div>
            </article>

            {/* PROJECT 3 */}
            <article className="project-card">
              <div className="project-visual visual-three">
                <img
                  src="/images/project-3.jpg"
                  alt="Arc Store"
                  className="project-image"
                />

                <div className="ecommerce-window">
                  <span>ARC / STORE</span>

                  <strong>
                    Essential
                    <br />
                    Objects.
                  </strong>

                  <Link to="/contact">
                    START PROJECT
                  </Link>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    E-COMMERCE
                  </span>

                  <h3>Arc Store</h3>
                </div>

                <Link to="/contact">
                  Start Similar Project ↗
                </Link>
              </div>
            </article>

          </div>

          <div className="work-footer">
            <span>READY TO BUILD SOMETHING GREAT?</span>

            <Link to="/contact">
              Let's Talk <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;