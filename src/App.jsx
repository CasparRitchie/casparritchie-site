import React from 'react';
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

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand">Caspar Ritchie</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">How I help</a>
            <a href="#process">How it works</a>
            <a href="#ventures">Other ventures</a>
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
            <div className="eyebrow">Consultant • Builder • Problem solver</div>
            <h1>A personal site about the work I do and the things I build.</h1>
            <p className="hero-copy">
              I help businesses improve the way they work through a mix of operational improvement, reporting, customer understanding, and practical delivery. This site is about me and my broader work. My more specialist NPS and CX offer lives at NPS Me.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Get in touch</a>
              <a className="btn btn-secondary" href="#ventures">View ventures</a>
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
                Hi, I’m Caspar. My background spans customer experience, continuous improvement, analytics, reporting, delivery, and digital product thinking.
              </p>
              <p>
                I like helping businesses reduce friction, focus on what adds value, and turn insight into practical action. Sometimes that means simplifying an internal process. Sometimes it means building better reporting. Sometimes it means creating something new altogether.
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
                  I work in a practical, collaborative way: understand what matters, prioritise well, and build changes that are genuinely useful.
                </p>
                <p>
                  The process is usually straightforward: understand the current state, identify the biggest opportunities, build the right solution, then measure what changes.
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

        <section id="ventures" className="section section-dark callout">
          <div className="container callout-inner">
            <div className="section-kicker">Other ventures</div>
            <h2>This site is personal. Some of my more specialist work lives elsewhere.</h2>
            <p>
              NPS Me is where I focus specifically on NPS, customer intelligence, and experience improvement. Other projects, like Renovation Cost Guide and CXMS, reflect different parts of what I build and explore.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://www.npsme.com" target="_blank" rel="noreferrer">Visit NPS Me</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container callout-inner">
            <h2>Friendly, experienced, and easy to work with.</h2>
            <p>
              I’m not a big company. I work closely with clients to make businesses run smoother, improve customer experience, and help leaders make better decisions with clearer insight.
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
    </div>
  );
}
