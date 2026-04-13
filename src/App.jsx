import React from 'react';
import './styles.css';

const serviceCards = [
  {
    title: 'Automation',
    text: 'Save time by reducing manual effort, removing repetitive admin, and creating cleaner ways of working.',
    bullets: ['Process mapping', 'Automation of manual tasks', 'Reduced waste and errors'],
  },
  {
    title: 'Customer experience & NPS',
    text: 'Improve customer journeys, understand what customers are really saying, and focus teams on the work that matters most.',
    bullets: ['Journey mapping', 'Net Promoter Score', 'Performance analysis and improvement'],
  },
  {
    title: 'Problem solving',
    text: 'Identify the biggest friction points in your operation and fix them with practical, proportionate solutions.',
    bullets: ['Customer value-add analysis', 'Prioritisation', 'Data-driven decision making'],
  },
  {
    title: 'Reporting',
    text: 'Build dashboards and reporting that help you monitor progress and make better decisions with confidence.',
    bullets: ['Bespoke reporting', 'Operational visibility', 'Real-time analytics'],
  },
];

const processSteps = [
  {
    step: 'Step 1',
    title: 'A practical discovery session',
    text: 'We map how your business works today, identify friction, and highlight where better processes or better insight could create value.',
  },
  {
    step: 'Step 2',
    title: 'Prioritise what matters',
    text: 'We focus on the opportunities with the clearest benefit, whether that means time saved, better service, or better decision making.',
  },
  {
    step: 'Step 3',
    title: 'Build the right solution',
    text: 'That could be automation, reporting, process redesign, NPS analysis, or a simple operational improvement that removes waste.',
  },
  {
    step: 'Step 4',
    title: 'Measure and improve',
    text: 'We put the right visibility in place so you can track progress, learn quickly, and keep improving over time.',
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand">Caspar Ritchie</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/653e50f60ac329e82ba89473/654208e81dbc146eeca1928e_frontpage-hero-poster-00001.jpg"
            >
              <source src="https://cdn.prod.website-files.com/667ac1da6028f1c87ce44a89/667ac1da6028f1c87ce44b86_frontpage-hero-transcode.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
          </div>

          <div className="container hero-content">
            <div className="eyebrow">For businesses</div>
            <h1>Helping businesses work better.</h1>
            <p className="hero-copy">
              I help simplify operations, improve customer experience, and build practical reporting and insight that supports better decisions.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Get in touch</a>
              <a className="btn btn-secondary" href="#services">View services</a>
            </div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="container two-col">
            <div>
              <div className="section-kicker">About</div>
            </div>
            <div>
              <h2>Making your business work better</h2>
              <p className="lead">
                Hi, I’m Caspar. I specialise in making business life easier through a mix of operational improvement, customer insight, and pragmatic technology.
              </p>
              <p>
                My background spans customer experience, continuous improvement, analytics, reporting, and delivery. I like helping businesses remove friction, focus on what adds value, and build better ways of working.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Services</div>
              <h2>Where I can help</h2>
            </div>
            <div className="services-grid">
              {serviceCards.map((card) => (
                <article className="service-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <ul>
                    {card.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container process-grid">
            <div className="process-left">
              <div className="process-left-inner">
                <div className="section-kicker">How it works</div>
                <h2>Simple, practical, and focused on value.</h2>
                <p className="lead">
                  This is the section worth keeping from the old template: layered cards that slide over each other as you scroll.
                </p>
                <p>
                  The interaction is rebuilt here in clean CSS using sticky cards, so you keep the effect without depending on Webflow.
                </p>
              </div>
            </div>

            <div className="process-right">
              {processSteps.map((item, index) => (
                <div className="sticky-card-wrap" key={item.step}>
                  <article
                    className="process-card"
                    style={{ top: `${96 + index * 28}px` }}
                  >
                    <div className="process-step">{item.step}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark callout">
          <div className="container callout-inner">
            <h2>Friendly, experienced, and easy to work with.</h2>
            <p>
              I’m not a big company. I work closely with clients to make businesses run smoother, keep teams happier, and help leaders make better decisions.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-box">
            <div>
              <div className="section-kicker">Contact</div>
              <h2>Let’s talk.</h2>
              <p>
                If you’d like help with customer experience, NPS, reporting, or operational improvement, get in touch.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:casparritchie@gmail.com">casparritchie@gmail.com</a>
              <a href="tel:+33615386545">+33 6 15 38 65 45</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
