import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <main>
        <section className="hero">
          <img
            src="/images/hero-image.jpg"
            alt="Arclix Digital - Modern Web Development"
            className="hero-bg-image"
          />

          <div className="hero-overlay"></div>

          <div className="container hero-container">
            <div className="hero-content">

              {/* Eyebrow */}
              <div className="hero-eyebrow">
                WEB DESIGN • DEVELOPMENT • DIGITAL SOLUTIONS
              </div>

              {/* Main Heading */}
              <h1>
                Modern websites
                <br />
                <span>built for your business.</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                I build modern, fast and responsive websites that help
                businesses establish a strong online presence and attract
                more customers.
              </p>

              {/* Buttons */}
              <div className="hero-actions">
                <Link to="/work" className="hero-btn hero-btn-primary">
                  View My Work <span>↗</span>
                </Link>

                <Link to="/contact" className="hero-btn hero-btn-secondary">
                  Let's Work Together <span>↗</span>
                </Link>
              </div>

              {/* Trust Points */}
              <div className="hero-trust">
                <span>✓ Mobile Responsive</span>
                <span>✓ Modern Design</span>
                <span>✓ Business Focused</span>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;