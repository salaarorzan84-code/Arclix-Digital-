import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="about-section">
        <div className="container">

          {/* HEADER */}
          <div className="about-top">

            <div className="section-label">
              ABOUT ARCLIX
            </div>

            <div className="about-intro">

              <h2>
                Digital solutions
                <br />
                <span>built for business.</span>
              </h2>

              <p>
                Arclix Digital helps businesses build a stronger online
                presence through modern websites, landing pages and
                performance-focused digital solutions.
              </p>

              <p>
                From web design and development to paid advertising,
                I focus on creating clean digital experiences that
                communicate clearly and help businesses connect with
                their customers.
              </p>

              <Link to="/contact" className="about-link">
                Let's work together ↗
              </Link>

            </div>

          </div>


          <div className="about-divider"></div>


          {/* WHAT I DO */}
          <div className="about-bottom">

            <div className="about-bottom-label">
              <span>01</span>
              WHAT I DO
            </div>

            <div className="about-approach">

              <h3>
                Design.
                <br />
                Development.
                <br />
                Growth.
              </h3>

              <p>
                I combine modern web design, responsive development and
                digital advertising to help businesses create a professional
                online presence and reach the right audience.
              </p>

            </div>

          </div>


          <div className="about-divider"></div>


          {/* SKILLS */}
          <div className="about-bottom">

            <div className="about-bottom-label">
              <span>02</span>
              CORE SKILLS
            </div>

            <div className="about-skills">

              <div className="about-skill">
                <span>01</span>
                <h4>Web Design</h4>
                <p>
                  Modern, clean and responsive website interfaces.
                </p>
              </div>

              <div className="about-skill">
                <span>02</span>
                <h4>Web Development</h4>
                <p>
                  Fast and responsive websites built with modern
                  technologies.
                </p>
              </div>

              <div className="about-skill">
                <span>03</span>
                <h4>Paid Advertising</h4>
                <p>
                  Google, Facebook, Instagram and TikTok advertising.
                </p>
              </div>

              <div className="about-skill">
                <span>04</span>
                <h4>Landing Pages</h4>
                <p>
                  Focused pages designed to turn visitors into leads.
                </p>
              </div>

            </div>

          </div>


          <div className="about-divider"></div>


          {/* APPROACH */}
          <div className="about-bottom">

            <div className="about-bottom-label">
              <span>03</span>
              MY APPROACH
            </div>

            <div className="about-approach">

              <h3>
                Simple ideas.
                <br />
                Strong execution.
              </h3>

              <p>
                Every project starts with understanding the business,
                audience and goals. From there, I build a focused digital
                solution with clear communication, thoughtful design and
                practical technology.
              </p>

              <Link to="/work" className="about-link">
                Explore my work ↗
              </Link>

            </div>

          </div>


          {/* FINAL CTA */}
          <div className="about-cta">

            <div>
              <span className="section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's build something
                <br />
                <span>worth remembering.</span>
              </h3>
            </div>

            <Link to="/contact">
              Start a Project ↗
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}

export default About;