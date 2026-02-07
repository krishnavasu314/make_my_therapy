import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Image from "next/image";
import LilacMotion from "../clone/LilacMotion";
import MayaHeader from "./MayaHeader";
import "../clone/clone.css";
import "./redesign.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA",
  description:
    "Evidence-based anxiety and trauma therapy in Santa Monica, CA with secure telehealth across California for panic, burnout, and perfectionism.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapist California",
    "burnout counseling Santa Monica",
    "telehealth therapist California",
  ],
};

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--maya-display",
  weight: ["400", "500", "600"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--maya-body",
  weight: ["400", "500", "600"],
});

const images = {
  hero: "/images/therapy-e.jpg",
  split: "/images/therapy-f.jpg",
  service1: "/images/therapy-a.jpg",
  service2: "/images/therapy-c.jpg",
  service3: "/images/therapy-b.jpg",
  support: "/images/therapy-b.jpg",
  aboutMain: "/images/maya.png",
  aboutCircle: "/images/therapy-f.jpg",
  office1: "/images/office1.jpeg",
  office2: "/images/office2.jpeg",
  faqs: "/images/therapy-a.jpg",
};

const ctaFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[currentColor]";

export default function RedesignPage() {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} lilac-page maya-page`}>
      <LilacMotion />
      <MayaHeader />

      <main>
        <section className="lilac-section lilac-hero" id="home">
          <div className="lilac-shell lilac-hero-grid">
            <div className="lilac-arch-image lilac-hero-image" data-reveal="left" data-reveal-delay="520">
              <Image src={images.hero} alt="Therapy session in a calm office" fill priority sizes="(max-width: 980px) 94vw, 46vw" />
            </div>

            <div className="lilac-hero-copy lilac-center" data-reveal="right" data-reveal-delay="600">
              <h1>
                Anxiety and Trauma Therapy
                <br />
                in Santa Monica, CA
              </h1>
              <p>
                Evidence-based, compassionate care for adults navigating anxiety, panic,
                burnout, and trauma. In-person in Santa Monica and online across California.
              </p>
              <a
                className={`lilac-button lilac-button-primary ${ctaFocus}`}
                href="#contact"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-split-section lilac-light-bg">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-split-copy" data-reveal="left" data-reveal-delay="600">
              <h2>Feel steady and supported again.</h2>
              <p>
                You may look successful on the outside while feeling overwhelmed on the inside.
                Therapy can help you slow down, regulate, and understand the patterns keeping you stuck.
              </p>
              <p>
                Sessions are collaborative, practical, and tailored to your goals so you can
                build lasting change in your daily life and relationships.
              </p>
              <a
                className={`lilac-button lilac-button-secondary lilac-button-lg ${ctaFocus}`}
                href="#services"
              >
                Explore Services
              </a>
            </div>

            <div className="lilac-rect-image" data-reveal="right" data-reveal-delay="680">
              <Image src={images.split} alt="Comfortable counseling office with natural light" fill sizes="(max-width: 980px) 94vw, 46vw" />
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-specialties" id="services">
          <div className="lilac-shell">
            <p className="lilac-section-kicker" data-reveal="up" data-reveal-delay="560">
              Therapy Services
            </p>

            <div className="lilac-specialty-grid">
              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="620">
                <h3>Anxiety and Panic Therapy</h3>
                <p>
                  For adults who feel constantly on edge, overthink, or struggle to quiet racing
                  thoughts. Build skills for emotional regulation and nervous system stability.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.service1} alt="Client and therapist discussing emotions" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>

              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="700">
                <h3>Trauma Recovery and EMDR</h3>
                <p>
                  Trauma-focused care that helps reduce emotional reactivity, process painful
                  memories safely, and strengthen your sense of internal safety.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.service2} alt="Therapist supporting a client through distress" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>

              <article className="lilac-specialty-card" data-reveal="up" data-reveal-delay="780">
                <h3>Burnout and Perfectionism Counseling</h3>
                <p>
                  Support for high-achieving adults exhausted by pressure, people-pleasing, and
                  relentless self-criticism. Learn a healthier and more sustainable pace.
                </p>
                <div className="lilac-circle-image">
                  <Image src={images.service3} alt="Therapy conversation focused on stress recovery" fill sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 24vw" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-bright-bg">
          <div className="lilac-shell lilac-split-grid">
            <div className="lilac-rect-image" data-reveal="left" data-reveal-delay="600">
              <Image src={images.support} alt="Client receiving support in therapy" fill sizes="(max-width: 980px) 94vw, 46vw" />
            </div>

            <div className="lilac-split-copy" data-reveal="right" data-reveal-delay="680">
              <h2>
                You don&apos;t have to handle this <em>alone</em>.
              </h2>
              <p>You might relate to:</p>
              <ul>
                <li>Persistent anxiety, panic, or emotional overwhelm</li>
                <li>Difficulty sleeping, concentrating, or slowing your thoughts</li>
                <li>Burnout, exhaustion, or constant pressure to perform</li>
                <li>Trauma patterns that affect relationships and self-trust</li>
                <li>Feeling disconnected from yourself and your needs</li>
              </ul>
              <p>
                Therapy offers a safe, structured space to process, heal, and build practical
                tools that support long-term emotional resilience.
              </p>
              <a
                className={`lilac-button lilac-button-secondary lilac-button-lg ${ctaFocus}`}
                href="#contact"
              >
                Start Therapy
              </a>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-light-bg" id="about">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-split-copy" data-reveal="left" data-reveal-delay="600">
              <h2>Hi, I&apos;m Dr. Maya Reynolds.</h2>
              <p>
                I&apos;m a licensed clinical psychologist offering therapy for adults in Santa Monica
                and throughout California via telehealth.
              </p>
              <p>
                My approach combines CBT, EMDR, mindfulness, and body-based practices. Sessions
                are warm, collaborative, and grounded in evidence-based care.
              </p>
              <a
                className={`lilac-button lilac-button-primary ${ctaFocus}`}
                href="#office"
              >
                View Our Office
              </a>
            </div>

            <div className="lilac-about-image-wrap" data-reveal="right" data-reveal-delay="680">
              <div className="lilac-arch-image lilac-about-arch">
                <Image src={images.aboutMain} alt="Portrait of Dr. Maya Reynolds" fill sizes="(max-width: 980px) 94vw, 42vw" />
              </div>
              <div className="lilac-about-circle" data-reveal="scale" data-reveal-delay="860">
                <Image src={images.aboutCircle} alt="Calm therapy environment" fill sizes="(max-width: 767px) 45vw, 19vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-light-bg maya-office-section" id="office">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-split-copy" data-reveal="left" data-reveal-delay="600">
              <h2>Our Office</h2>
              <p>
                A warm and private therapy space in Santa Monica designed for comfort, calm,
                and confidentiality.
              </p>
              <p>
                In-person and hybrid sessions are available at 123th Street 45 W,
                Santa Monica, CA 90401.
              </p>
              <a
                className={`lilac-button lilac-button-secondary ${ctaFocus}`}
                href="#contact"
              >
                Book an In-Person Session
              </a>
            </div>

            <div className="maya-office-gallery" data-reveal="right" data-reveal-delay="680">
              <div className="lilac-rect-image">
                <Image src={images.office1} alt="Private therapy office seating area" fill sizes="(max-width: 980px) 94vw, 46vw" />
              </div>
              <div className="lilac-rect-image">
                <Image src={images.office2} alt="Bright counseling space with soft natural light" fill sizes="(max-width: 980px) 94vw, 46vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="lilac-section" id="faqs">
          <div className="lilac-shell lilac-split-grid reverse-mobile">
            <div className="lilac-arch-image lilac-faqs-image" data-reveal="left" data-reveal-delay="600">
              <Image src={images.faqs} alt="Therapy conversation between clinician and client" fill sizes="(max-width: 980px) 94vw, 40vw" />
            </div>

            <div data-reveal="right" data-reveal-delay="680">
              <h2 className="lilac-faq-title">FAQs</h2>
              <div className="lilac-accordion">
                <details className="lilac-accordion-item">
                  <summary>Do you offer in-person therapy in Santa Monica?</summary>
                  <div className="lilac-accordion-content">
                    <p>Yes. In-person sessions are available at my private Santa Monica office.</p>
                  </div>
                </details>
                <details className="lilac-accordion-item">
                  <summary>Do you provide online therapy in California?</summary>
                  <div className="lilac-accordion-content">
                    <p>Yes. I provide secure telehealth therapy for adults located across California.</p>
                  </div>
                </details>
                <details className="lilac-accordion-item">
                  <summary>What issues do you most often help with?</summary>
                  <div className="lilac-accordion-content">
                    <p>
                      I specialize in anxiety, trauma, panic, burnout, and perfectionism for adults
                      who feel overwhelmed, exhausted, or emotionally stuck.
                    </p>
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
                <summary>Clinical Focus</summary>
                <div className="lilac-accordion-content">
                  <p>
                    Anxiety, trauma, panic, burnout, and perfectionism with adults in high-pressure
                    personal or professional environments.
                  </p>
                </div>
              </details>
              <details className="lilac-accordion-item">
                <summary>Therapy Modalities</summary>
                <div className="lilac-accordion-content">
                  <p>
                    CBT, EMDR, mindfulness-based interventions, and body-oriented techniques tailored
                    to your needs and treatment goals.
                  </p>
                </div>
              </details>
              <details className="lilac-accordion-item">
                <summary>Session Format</summary>
                <div className="lilac-accordion-content">
                  <p>
                    In-person sessions in Santa Monica and secure telehealth therapy for clients
                    throughout California.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="lilac-section lilac-dark-cta lilac-center" id="contact">
          <div className="lilac-shell lilac-cta-inner" data-reveal="up" data-reveal-delay="560">
            <h3>Get started today.</h3>
            <p>
              If you&apos;re ready to begin anxiety or trauma therapy in Santa Monica, reach out for a
              consultation. I&apos;d be honored to support your next step.
            </p>
            <a
              className={`lilac-button lilac-button-primary ${ctaFocus}`}
              href="#contact"
            >
              Contact Dr. Maya Reynolds
            </a>
          </div>
        </section>
      </main>

      <footer>
        <section className="lilac-section lilac-footer-main">
          <div className="lilac-shell lilac-footer-grid" data-reveal="up" data-reveal-delay="500">
            <div>
              <h3>Dr. Maya Reynolds, PsyD</h3>
              <p>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div>
              <h4>Session Format</h4>
              <p>
                In-person therapy
                <br />
                Santa Monica office
                <br />
                Telehealth across California
              </p>
            </div>

            <div className="lilac-footer-find">
              <h4>Find</h4>
              <p>
                <a href="#home">Home</a>
                <br />
                <a href="#contact">Contact</a>
                <br />
                <a href="#services">Services</a>
              </p>
            </div>
          </div>
        </section>

        <section className="lilac-footer-legal lilac-center">
          <div className="lilac-shell" data-reveal="up" data-reveal-delay="460">
            <p className="maya-legal-links">
              <a href="/privacy-policy">Privacy &amp; Cookies Policy</a>
              <a href="/good-faith-estimate">Good Faith Estimate</a>
              <a href="/terms-conditions">Website Terms &amp; Conditions</a>
              <a href="/disclaimer">Disclaimer</a>
            </p>
            <p>All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.</p>
          </div>
        </section>
      </footer>
    </div>
  );
}







