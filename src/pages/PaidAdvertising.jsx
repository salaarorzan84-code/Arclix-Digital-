import { Link } from "react-router-dom";

function PaidAdvertising() {
  return (
    <main>
      <section className="service-detail-section">
        <div className="container">

          {/* BACK LINK */}
          <Link to="/services" className="service-back">
            ← Back to Services
          </Link>

          {/* HEADER */}
          <div className="service-detail-header">

            <div className="section-label">
              SERVICE 03 / PAID ADVERTISING
            </div>

            <h1>
              Advertising built
              <br />
              <span>to reach the right audience.</span>
            </h1>

            <p>
              I help businesses create targeted advertising campaigns
              designed to reach the right audience, generate quality
              traffic and support lead generation and business growth.
            </p>

          </div>


          {/* SKILLS */}
          <div className="service-skills">

            <div className="section-label">
              MY SKILLS
            </div>

            <div className="skills-grid">

              {/* 01 */}
              <div className="skill-item">
                <span>01</span>

                <h3>Facebook & Instagram Ads</h3>

                <p>
                  Targeted Meta advertising campaigns designed to reach
                  relevant audiences, generate leads and drive business
                  growth.
                </p>
              </div>


              {/* 02 */}
              <div className="skill-item">
                <span>02</span>

                <h3>Google Ads</h3>

                <p>
                  Search and performance campaigns designed to connect
                  businesses with people actively searching for their
                  products or services.
                </p>
              </div>


              {/* 03 */}
              <div className="skill-item">
                <span>03</span>

                <h3>TikTok Ads</h3>

                <p>
                  Creative-focused TikTok advertising campaigns designed
                  to reach new audiences and increase awareness, traffic
                  and leads.
                </p>
              </div>


              {/* 04 */}
              <div className="skill-item">
                <span>04</span>

                <h3>Campaign Strategy</h3>

                <p>
                  Structured advertising campaigns with clear objectives,
                  audience targeting, messaging and strong calls to action.
                </p>
              </div>

            </div>

          </div>


          {/* PLATFORMS & TOOLS */}
          <div className="service-tools">

            <div className="section-label">
              PLATFORMS & TOOLS
            </div>

            <div className="tools-list">
              <span>Google Ads</span>
              <span>Facebook Ads</span>
              <span>Instagram Ads</span>
              <span>TikTok Ads</span>
              <span>Meta Ads Manager</span>
              <span>Audience Targeting</span>
              <span>Campaign Setup</span>
              <span>Conversion Tracking</span>
            </div>

          </div>


          {/* CTA */}
          <div className="service-detail-cta">

            <div>
              <span className="section-label">
                READY TO GROW?
              </span>

              <h2>
                Let's reach the
                <br />
                <span>right audience.</span>
              </h2>
            </div>

            <Link to="/contact">
              Start a Campaign ↗
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}

export default PaidAdvertising;