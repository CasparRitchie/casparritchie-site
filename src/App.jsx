import React, { useEffect, useState } from 'react';
import './styles.css';

const serviceCards = [
  {
    title: 'Operational improvement',
    text: 'I help businesses reduce friction, simplify ways of working, and make day-to-day operations feel more manageable.',
    bullets: ['Process mapping', 'Removing manual effort', 'Reducing waste and errors'],
  },
  {
    title: 'Insight and reporting',
    text: 'I build practical reporting and analysis that helps leaders see what is happening, spot patterns, and make better decisions.',
    bullets: ['Bespoke reporting', 'Operational visibility', 'Clearer decision support'],
  },
  {
    title: 'Problem solving',
    text: 'I like finding the real source of friction in a business and turning vague problems into practical next steps.',
    bullets: ['Prioritisation', 'Structured problem solving', 'Data-informed decisions'],
  },
  {
    title: 'Customer understanding',
    text: 'Customer experience is an important part of how I think, but my more specialist NPS and CX work lives under NPS Me.',
    bullets: ['Customer journey thinking', 'Voice-of-customer mindset', 'NPS Me for specialist work'],
  },
];

const processSteps = [
  {
    step: 'Step 1',
    title: 'Understand the current state',
    text: 'Look at how things work today, where friction exists, and where better processes, better reporting, or better customer insight could create value.',
  },
  {
    step: 'Step 2',
    title: 'Prioritise the right opportunities',
    text: 'Focus on the opportunities with the clearest benefit, whether that means time saved, better service, stronger retention, or better decision making.',
  },
  {
    step: 'Step 3',
    title: 'Build the right solution',
    text: 'That could mean automation, reporting, process redesign, customer insight work, or a simple operational improvement that removes waste.',
  },
  {
    step: 'Step 4',
    title: 'Measure progress and keep improving',
    text: 'Put the right visibility in place so you can track progress, learn quickly, and keep improving over time.',
  },
];

const selectedWork = [
  {
    title: 'Childcare / NPS Me',
    subtitle: 'Survey programme rollout and adoption support',
    text: 'Helped a childcare company shape and launch a survey programme in Intercom, supported the rollout and adoption, and helped embed customer feedback as a more regular way of working. The Customer Lead now uses the setup regularly as part of that rhythm.',
    bullets: ['Intercom survey setup', 'Rollout support and coaching', 'Embedding feedback into day-to-day work'],
    link: 'https://www.npsme.com',
    linkLabel: 'View NPS Me',
  },
  {
    title: 'Operational tools and reporting',
    subtitle: 'Practical builds to reduce friction',
    text: 'A recurring part of my work is turning messy workflows, unclear reporting, or repetitive processes into clearer tools, better visibility, and more manageable ways of working.',
    bullets: ['Workflow simplification', 'Reporting and dashboards', 'Pragmatic delivery'],
  },
  {
    title: 'Product and prototype thinking',
    subtitle: 'From ideas to working things',
    text: 'Alongside consulting work, I build and test products, prototypes, and experiments that connect customer understanding, structured thinking, and practical technology.',
    bullets: ['Product exploration', 'Rapid prototyping', 'Turning concepts into live projects'],
  },
];

const ventures = [
  {
    title: 'NPS Me',
    text: 'My specialist venture focused on NPS, customer feedback, reporting, and close-the-loop ways of working for startups and SMEs.',
    bullets: ['CX and NPS focus', 'Practical implementation', 'Consultancy-backed setup'],
    link: 'https://www.npsme.com',
    linkLabel: 'Visit NPS Me',
  },
  {
    title: 'CXMS',
    text: 'A space for experiments, tools, and ideas combining customer experience, data, creativity, Python, JavaScript, and lightweight product development.',
    bullets: ['Creative experimentation', 'Python and JavaScript builds', 'Useful tools and prototypes'],
    link: 'https://www.cxms.fr',
    linkLabel: 'Visit CXMS',
  },
  {
    title: 'Renovation Cost Guide',
    text: 'A developing product exploring how structured content, cost guidance, and AI-assisted planning tools can help homeowners make better renovation decisions.',
    bullets: ['Structured renovation guidance', 'Product and SEO development', 'AI garden creator direction'],
    link: 'https://www.renovationcostguide.co.uk',
    linkLabel: 'Visit Renovation Cost Guide',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="Caspar Ritchie, home">
            <span>Caspar<span className="brand-slash">/</span></span>
            <span>Ritchie</span>
          </a>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span className="sr-only">Open menu</span><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
          <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="site-navigation" aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>How I help</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Approach</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
          </nav>
          <a className="btn btn-primary header-cta" href="#contact">Let’s talk <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-content">
            <div className="hero-copy-block">
              <div className="eyebrow">Consultant · Builder · Problem solver</div>
              <h1>Understand the problem.<br /><em>Make work better.</em></h1>
              <p className="hero-copy">
                I help businesses improve the way they work through operational improvement,
                reporting, customer understanding and practical delivery.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
                <a className="text-link" href="#work">View selected work <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero-system" aria-label="Caspar's way of working">
              <span className="hero-system-kicker">Practical change, built around people.</span>
              <div className="system-card system-card-a"><small>01 / Find the friction</small><strong>Understand</strong><span>People · process · evidence</span></div>
              <div className="system-path" aria-hidden="true"><i /><i /><i /></div>
              <div className="system-card system-card-b"><small>02 / Make it useful</small><strong>Build &amp; improve</strong><span>Clear · practical · measurable</span></div>
              <span className="hero-system-note">Better decisions.<br />Smoother work.<br />Useful outcomes.</span>
            </div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="container two-col">
            <div>
              <div className="section-kicker">About</div>
            </div>
            <div>
              <h2>A practical approach to making businesses work better</h2>
              <p className="lead">
                Hi, I’m Caspar. My background spans customer experience, continuous improvement,
                analytics, reporting, delivery, and digital product thinking.
              </p>
              <p>
                I like helping businesses reduce friction, focus on what adds value, and turn insight
                into practical action. Sometimes that means simplifying an internal process. Sometimes
                it means building better reporting. Sometimes it means creating something new altogether.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">How I help</div>
              <h2>Broad, practical support rather than a narrow product pitch</h2>
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
                  I work in a practical, collaborative way: understand what matters, prioritise well,
                  and build changes that are genuinely useful.
                </p>
                <p>
                  The process is usually straightforward: understand the current state, identify the
                  biggest opportunities, build the right solution, then measure what changes.
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

        <section id="work" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Selected work</div>
              <h2>Examples that show how I think and what I build</h2>
              <p className="lead">
                A mix of consulting, implementation, and product thinking across customer experience,
                reporting, and operational improvement.
              </p>
            </div>

            <div className="services-grid">
              {selectedWork.map((item) => (
                <article className="service-card" key={item.title}>
                  <div className="process-step">{item.subtitle}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {item.link && (
                    <div className="hero-actions" style={{ marginTop: '1rem' }}>
                      <a
                        className="btn btn-secondary"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkLabel}
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ventures" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Other ventures</div>
              <h2>This site is personal. Some of my more specialist work lives elsewhere.</h2>
              <p className="lead">
                These projects reflect different parts of what I build, explore, and develop over time.
              </p>
            </div>

            <div className="services-grid">
              {ventures.map((venture) => (
                <article className="service-card" key={venture.title}>
                  <h3>{venture.title}</h3>
                  <p>{venture.text}</p>
                  <ul>
                    {venture.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="hero-actions" style={{ marginTop: '1rem' }}>
                    <a
                      className="btn btn-primary"
                      href={venture.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {venture.linkLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container callout-inner">
            <h2>Friendly, experienced, and easy to work with.</h2>
            <p>
              I’m not a big company. I work closely with clients to make businesses run smoother,
              improve customer experience, and help leaders make better decisions with clearer insight.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-box">
            <div>
              <div className="section-kicker">Contact</div>
              <h2>Let’s talk.</h2>
              <p>
                If you think I could help, or you’d simply like to connect, I’d be happy to talk.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:casparritchie@gmail.com">casparritchie@gmail.com</a>
              <a href="tel:+33615386545">+33 6 15 38 65 45</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Caspar Ritchie, home"><span>Caspar<span className="brand-slash">/</span></span><span>Ritchie</span></a>
        <p>Customer experience, operational improvement<br />and useful software.</p>
        <div><a href="mailto:casparritchie@gmail.com">casparritchie@gmail.com</a><span>Independent consultant · Bordeaux, France</span></div>
      </footer>
    </div>
  );
}
