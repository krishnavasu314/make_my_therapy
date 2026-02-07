import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import LilacHeader from "./LilacHeader";
import LilacMotion from "./LilacMotion";
import "./clone.css";

export const metadata: Metadata = {
  title: "Part 1 Clone",
};

const images = {
  hero: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg",
  split: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg",
  specialty1:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg",
  specialty2:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg",
  specialty3:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg",
  support:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg",
  aboutArch:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg",
  aboutCircle:
    "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg",
  faqs: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg",
};

const ctaFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[currentColor]";

export default function ClonePage() {
  return (
    <div className="lilac-page">
      <LilacMotion />
      <Script
        src="https://use.typekit.net/ik/MKo0s4tW_aprvHMbtJgoMo7uLcSPlojcLhb_AUHVjk9fen3gfFHN4UJLFRbh52jhWDjuZ2I3jDZyZeFcjA48wQ6U5AmqFe93FUGMJygcScmTZhyXOWs8pYblSY4zJ6Z1dagGZWJ7fbKj-sMMeMb6MKG4f4TTIMMjgkMfH6qJcAqbMg65JMJ7fbKd-sMMegI6MKGHfO1mMyMgeMb6MKGHfOzmMyMgeM96MKGHfOamMyMgeMS6MKGHfOnmMyMgeMt6MKGHfODmMyMgeMv6MKGHfO_mMyMgegI6MTMgN5Q5n6j.js"
        strategy="afterInteractive"
      />
      <Script id="lilac-typekit" strategy="afterInteractive">
        {`try{Typekit.load();}catch(e){}`}
      </Script>

      <LilacHeader />

      <main>
        <section className="lilac-section lilac-hero">
          <div className="lilac-shell lilac-hero-grid">
            <div className="lilac-arch-image lilac-hero-image" data-reveal="left" data-reveal-delay="520">
              <Image src={images.hero} alt="" fill priority sizes="(max-width: 980px) 94vw, 46vw" />
            </div>

            <div className="lilac-hero-copy lilac-center" data-reveal="right" data-reveal-delay="600">
              <h1>
                Live your life <br />
                in full bloom
              </h1>
              <p>Therapy for Adults in Minneapolis, MN.</p>
              <a
                className={`lilac-button lilac-button-primary ${ctaFocus}`}
                href="/contact"
              >
                Connect with me
              </a>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-split-section lilac-light-bg">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-split-copy" data-reveal="left" data-reveal-delay="600">
              <h2>Live a fulfilling life.</h2>
              <p>
                Life can be challenging especially when you&apos;re trying to balance your
                personal and professional life.
              </p>
              <p>
                It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I
                want you to know that I&apos;m here to help.
              </p>
              <a
                className={`lilac-button lilac-button-secondary lilac-button-lg ${ctaFocus}`}
                href="/contact"
              >
                Get in touch
              </a>
            </div>

            <div className="lilac-rect-image" data-reveal="right" data-reveal-delay="680">
              <Image src={images.split} alt="" fill sizes="(max-width: 980px) 94vw, 46vw" />
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-specialties">
          <div className="lilac-shell">
            <p className="lilac-section-kicker" data-reveal="up" data-reveal-delay="560">
              My Specialties
            </p>

            <div className="lilac-specialty-grid">
              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="620">
                <h3>Self-Esteem</h3>
                <p>
                  Building a strong sense of self-worth is key to living a fulfilled
                  life. Let&apos;s work together to bolster your self-esteem.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.specialty1} alt="" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>

              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="700">
                <h3>Relationships</h3>
                <p>
                  Navigating relationships can be complex. I&apos;m here to guide you through
                  these complexities to help you form healthier connections.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.specialty2} alt="" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>

              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="780">
                <h3>Burnout</h3>
                <p>
                  Feeling overwhelmed by your career is more common than you think.
                  Together, we&apos;ll identify strategies to manage and prevent burnout.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.specialty3} alt="" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-bright-bg">
          <div className="lilac-shell lilac-split-grid">
            <div className="lilac-rect-image" data-reveal="left" data-reveal-delay="600">
              <Image src={images.support} alt="" fill sizes="(max-width: 980px) 94vw, 46vw" />
            </div>

            <div className="lilac-split-copy" data-reveal="right" data-reveal-delay="680">
              <h2>
                You don&apos;t have to do this all <em>alone</em>.
              </h2>
              <p>If you are facing any of these, there&apos;s hope:</p>
              <ul>
                <li>Persistent feelings of sadness or hopelessness</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty maintaining relationships</li>
                <li>Feeling constantly exhausted or unmotivated</li>
                <li>A pervasive sense of being overwhelmed</li>
              </ul>
              <p>
                With empathy and guidance, we&apos;ll work together to navigate the
                challenges life throws your way.
              </p>
              <a
                className={`lilac-button lilac-button-secondary lilac-button-lg ${ctaFocus}`}
                href="/contact"
              >
                Work with me
              </a>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-light-bg">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-split-copy" data-reveal="left" data-reveal-delay="600">
              <h2>Hi, I&apos;m Lilac.</h2>
              <p>
                I&apos;m committed to providing a safe and supportive environment where we can
                explore your thoughts, feelings, and behaviors. With empathy and
                guidance, we&apos;ll work together to navigate the challenges life throws your
                way.
              </p>
              <a
                className={`lilac-button lilac-button-primary ${ctaFocus}`}
                href="/contact"
              >
                Let&apos;s chat
              </a>
            </div>

            <div className="lilac-about-image-wrap" data-reveal="right" data-reveal-delay="680">
              <div className="lilac-arch-image lilac-about-arch">
                <Image src={images.aboutArch} alt="" fill sizes="(max-width: 980px) 94vw, 42vw" />
              </div>
              <div className="lilac-about-circle" data-reveal="scale" data-reveal-delay="860">
                <Image src={images.aboutCircle} alt="" fill sizes="(max-width: 767px) 45vw, 19vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="lilac-section">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-arch-image lilac-faqs-image" data-reveal="left" data-reveal-delay="600">
              <Image src={images.faqs} alt="" fill sizes="(max-width: 980px) 94vw, 40vw" />
            </div>

            <div data-reveal="right" data-reveal-delay="680">
              <h2 className="lilac-faq-title">FAQs</h2>
              <div className="lilac-accordion">
                <details className="lilac-accordion-item">
                  <summary>Do you take insurance?</summary>
                  <div className="lilac-accordion-content">
                    <p>Answer goes here.</p>
                  </div>
                </details>
                <details className="lilac-accordion-item">
                  <summary>What are your rates?</summary>
                  <div className="lilac-accordion-content">
                    <p>Answer goes here.</p>
                  </div>
                </details>
                <details className="lilac-accordion-item">
                  <summary>Do you have any openings?</summary>
                  <div className="lilac-accordion-content">
                    <p>Answer goes here.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-light-bg">
          <div className="lilac-shell lilac-center">
            <h3 className="lilac-background-title" data-reveal="up" data-reveal-delay="560">
              My Professional Background
            </h3>

            <div className="lilac-accordion lilac-accordion-center" data-reveal="up" data-reveal-delay="660">
              <details className="lilac-accordion-item">
                <summary>Education</summary>
                <div className="lilac-accordion-content">
                  <p>
                    Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia
                    false artemesia moluccella gladiolus cirsium trollius anthurium prunus
                    delphinium achillea.
                  </p>
                </div>
              </details>
              <details className="lilac-accordion-item">
                <summary>Licensure</summary>
                <div className="lilac-accordion-content">
                  <p>
                    Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia
                    false artemesia moluccella gladiolus cirsium trollius anthurium prunus
                    delphinium achillea.
                  </p>
                </div>
              </details>
              <details className="lilac-accordion-item">
                <summary>Certifications</summary>
                <div className="lilac-accordion-content">
                  <p>
                    Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia
                    false artemesia moluccella gladiolus cirsium trollius anthurium prunus
                    delphinium achillea.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-dark-cta lilac-center">
          <div className="lilac-shell lilac-cta-inner" data-reveal="up" data-reveal-delay="560">
            <h3>Get started today.</h3>
            <p>
              Ready to take the first step towards a happier, healthier you? <br />
              Contact me to book your first session. I look forward to starting this
              therapeutic journey with you.
            </p>
            <a
              className={`lilac-button lilac-button-primary ${ctaFocus}`}
              href="/contact"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer>
        <section className="lilac-section lilac-footer-main">
          <div className="lilac-shell lilac-footer-grid" data-reveal="up" data-reveal-delay="500">
            <div>
              <h3>Lilac Template</h3>
              <p>
                123 Example Road
                <br />
                Minneapolis, MN
                <br />
                <br />
                <a href="http://squarespace.com" target="_blank" rel="noreferrer">
                  email@example.com
                </a>
                <br />
                <a href="http://squarespace.com" target="_blank" rel="noreferrer">
                  (555) 555-5555
                </a>
              </p>
            </div>

            <div>
              <h4>Hours</h4>
              <p>
                Monday - Friday
                <br />
                10am - 6pm
              </p>
            </div>

            <div className="lilac-footer-find">
              <h4>Find</h4>
              <p>
                <a href="/home">Home</a>
                <br />
                <a href="/contact">Contact</a>
                <br />
                <a href="/blog">Blog</a>
              </p>
            </div>
          </div>
        </section>

        <section className="lilac-footer-legal lilac-center">
          <div className="lilac-shell" data-reveal="up" data-reveal-delay="460">
            <p>
              <a href="/privacy-policy">Privacy &amp; Cookies Policy</a>{" "}
              <a href="/good-faith-estimate">Good Faith Estimate</a>{" "}
              <a href="/terms-conditions">Website Terms &amp; Conditions</a>{" "}
              <a href="/disclaimer">Disclaimer</a>
            </p>
            <p>
              Website Template Credits:{" "}
              <a href="https://www.gobloomcreative.com/" target="_blank" rel="noreferrer">
                Go Bloom Creative
              </a>
            </p>
            <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
          </div>
        </section>
      </footer>
    </div>
  );
}




