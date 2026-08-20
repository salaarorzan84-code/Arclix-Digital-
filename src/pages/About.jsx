import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      {/* ABOUT PAGE */}
      <section className="about-section">
        <div className="container">
          <div className="about-top">
            <div className="section-label">
              ABOUT ARCLIX
            </div>

            <div className="about-intro">
              <h2>
                Digital brands
                <br />
                <span>built to grow.</span>
              </h2>

              <p>
                Arclix Digital is a creative agency helping businesses build
                stronger brands, better websites and smarter digital
                experiences.
              </p>

              <p>
                We combine strategy, design and technology to create work
                that looks great and delivers real results.
              </p>

              <Link to="/contact" className="about-link">
                Let's work together ↗
              </Link>
            </div>
          </div>

          <div className="about-divider"></div>

          {/* STATS */}
          <div className="about-stats">
            <div className="about-stat">
              <strong>
                25<span>+</span>
              </strong>
              <p>Projects Delivered</p>
            </div>

            <div className="about-stat">
              <strong>
                12<span>+</span>
              </strong>
              <p>Brands Elevated</p>
            </div>

            <div className="about-stat">
              <strong>
                03<span>+</span>
              </strong>
              <p>Markets Reached</p>
            </div>

            <div className="about-stat">
              <strong>
                100<span>%</span>
              </strong>
              <p>Commitment</p>
            </div>
          </div>

          {/* APPROACH */}
          <div className="about-bottom">
            <div className="about-bottom-label">
              <span>01</span>
              OUR APPROACH
            </div>

            <div className="about-approach">
              <h3>
                Strategy first.
                <br />
                Creativity always.
              </h3>

              <p>
                We start by understanding your goals, audience and business.
                Then we create focused digital solutions designed to make
                your brand stand out and move forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;