import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <main>
        <section className="hero">
          <img
            src="/images/hero-image.jpg"
            alt="Arclix Digital"
            className="hero-bg-image"
          />

          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-eyebrow">
                CREATIVE DIGITAL AGENCY
              </div>

              <h1>
                We build digital experiences
                <br />
                <span>that drive real growth.</span>
              </h1>

              <p className="hero-description">
                Strategy-led branding and high-performing websites designed
                to turn attention into measurable results.
              </p>

              <div className="hero-actions">
                <Link to="/work" className="hero-btn hero-btn-primary">
                  View Our Work <span>↗</span>
                </Link>

                <Link to="/contact" className="hero-btn hero-btn-secondary">
                  Start a Project <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;