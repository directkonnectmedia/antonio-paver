import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Honorable Ruddy Beaver</title>
          <meta property="og:title" content="Honorable Ruddy Beaver" />
        </Head>
        <Navigation></Navigation>
        <section className="hero-parallax-wrapper">
          <div className="home-thq-hero-bg-layer-elm hero-bg-layer"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content-container">
            <div className="hero-text-block">
              <h1 className="hero-title home-hero-title">
                Crafting Desert Elegance
              </h1>
              <p className="hero-subtitle">
                Premium paver installations inspired by the raw beauty of
                Arizona&apos;s landscape. From dusty earth to immaculate outdoor
                living.
              </p>
              <div className="hero-cta-group">
                <a href="#consultation">
                  <div className="btn-lg btn btn-primary">
                    <span>View Transformation</span>
                  </div>
                </a>
                <a href="#portfolio">
                  <div className="btn-lg btn btn-outline">
                    <span>Our Portfolio</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-slider-container">
              <div className="slider-comparison">
                <div className="home-thq-slider-image-before-elm slider-image-before">
                  <span className="slider-label">Before</span>
                </div>
                <div className="home-thq-slider-image-after-elm slider-image-after">
                  <span className="slider-label">After</span>
                </div>
                <div className="slider-handle">
                  <div className="handle-line"></div>
                  <div className="handle-circle">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 8 4 4-4 4M6 8l-4 4 4 4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-grid-section">
          <div className="container-inner">
            <div className="section-header-centered">
              <h2 className="section-title">Signature Services</h2>
              <p className="section-content">
                Concise, luxury-focused summary of core paver services with
                terracotta-accent icons and short benefit statements emphasizing
                materials, durability, and custom finishes.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">Grand Driveways</h3>
                <p className="section-content">
                  Durable, high-load paving systems that make a lasting first
                  impression.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">Luxury Patios</h3>
                <p className="section-content">
                  Custom-designed social hubs using premium travertine and
                  natural stone.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6 4-4"></path>
                    <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Artisan Walkways</h3>
                <p className="section-content">
                  Graceful pathways that guide movement through your desert
                  oasis.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Custom Finishes</h3>
                <p className="section-content">
                  Bespoke textures and patterns tailored to your home&apos;s
                  unique architecture.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Pool Decks</h3>
                <p className="section-content">
                  Heat-resistant materials that stay cool under the intense
                  Arizona sun.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Lifetime Durability</h3>
                <p className="section-content">
                  Engineered installation techniques that withstand shifting
                  desert soils.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="project-showcase-split">
          <div className="showcase-visual-column">
            <img
              alt="Luxury Scottsdale Estate Paver Project"
              src="https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="showcase-image"
            />
            <button id="openShowcaseLightbox" className="lightbox-trigger">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
              </svg>
              <span>View Full Gallery</span>
            </button>
          </div>
          <div className="showcase-content-column">
            <div className="showcase-content-inner">
              <span className="category-tag">Spotlight Project</span>
              <h2 className="section-title">The Scottsdale Oasis</h2>
              <p className="section-content">
                A comprehensive transformation of a 5,000 sq. ft. estate,
                blending modern geometry with traditional Arizona textures. This
                project highlights our ability to navigate complex drainage
                requirements while maintaining aesthetic purity.
              </p>
              <div className="project-highlights">
                <div className="highlight-item">
                  <strong>Materials:</strong>
                  <span>Premium Tumbled Travertine, Desert Bronze Borders</span>
                </div>
                <div className="highlight-item">
                  <strong>Timeline:</strong>
                  <span>3 Weeks Completion</span>
                </div>
                <div className="highlight-item">
                  <strong>Technique:</strong>
                  <span>
                    High-Density Compaction &amp; Custom Grout Matching
                  </span>
                </div>
              </div>
              <a href="#consultation">
                <div className="btn btn-accent">
                  <span>Inquire About Similar Designs</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="testimonials-rail-section">
          <div className="container-inner">
            <div className="section-header">
              <h2 className="section-title">Client Experiences</h2>
              <p className="section-content">
                Curated quotes from satisfied upscale clients who value
                precision and desert-inspired craftsmanship.
              </p>
            </div>
            <div className="testimonial-rail">
              <div className="testimonial-card">
                <div className="rating-stars">
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="testimonial-quote">
                  &quot;Antonio&apos;s team transformed our backyard into a
                  five-star resort. The attention to detail in the paver
                  alignment is simply unmatched in Arizona.&quot;
                </p>
                <div className="testimonial-author">
                  <img
                    alt="Sarah J."
                    src="https://images.pexels.com/photos/15352567/pexels-photo-15352567.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="author-thumb"
                  />
                  <div className="author-info">
                    <span className="author-name">Sarah Jenkins</span>
                    <span className="author-location">Paradise Valley, AZ</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="rating-stars">
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="testimonial-quote">
                  &quot;Professionalism from start to finish. They recommended a
                  burnt sienna palette that perfectly complements our desert
                  landscape.&quot;
                </p>
                <div className="testimonial-author">
                  <img
                    alt="Michael R."
                    src="https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="author-thumb"
                  />
                  <div className="author-info">
                    <span className="author-name">Michael Ross</span>
                    <span className="author-location">Scottsdale, AZ</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="rating-stars">
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewbox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="testimonial-quote">
                  &quot;The durability is impressive. After a heavy monsoon
                  season, our driveway still looks as pristine as the day it was
                  installed.&quot;
                </p>
                <div className="testimonial-author">
                  <img
                    alt="Elena V."
                    src="https://images.pexels.com/photos/14869677/pexels-photo-14869677.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    className="author-thumb"
                  />
                  <div className="author-info">
                    <span className="author-name">Elena Vasquez</span>
                    <span className="author-location">Gilbert, AZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="materials-features-section">
          <div className="features-grid">
            <div className="feature-column">
              <div className="feature-image-wrapper">
                <img
                  alt="Tactile Paver Texture"
                  src="https://images.pexels.com/photos/17366756/pexels-photo-17366756.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="feature-image"
                />
              </div>
              <div className="feature-text-content">
                <h3 className="section-subtitle">Premium Materials</h3>
                <p className="section-content">
                  We source only the finest pavers that echo Arizona&apos;s
                  natural geology, ensuring your project feels like a natural
                  extension of the landscape.
                </p>
                <div className="swatch-group">
                  <div
                    title="Terracotta"
                    className="home-thq-swatch-elm1 swatch"
                  ></div>
                  <div
                    title="Burnt Sienna"
                    className="home-thq-swatch-elm2 swatch"
                  ></div>
                  <div
                    title="Sandy Beige"
                    className="home-thq-swatch-elm3 swatch"
                  ></div>
                </div>
              </div>
            </div>
            <div className="feature-column">
              <div className="feature-image-wrapper">
                <img
                  alt="Installation Precision"
                  src="https://images.pexels.com/photos/19893408/pexels-photo-19893408.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="feature-image"
                />
              </div>
              <div className="feature-text-content">
                <h3 className="section-subtitle">Master Installation</h3>
                <p className="section-content">
                  Our multi-layer sub-base technique prevents sinking and
                  shifting, providing a foundation that lasts for decades, not
                  just seasons.
                </p>
                <ul className="feature-list">
                  <li>
                    <span>Precision Edge Restraints</span>
                  </li>
                  <li>
                    <span>Polymeric Sand Sealing</span>
                  </li>
                  <li>
                    <span>Laser-Leveled Gradation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="feature-column">
              <div className="feature-image-wrapper">
                <img
                  alt="Outdoor Living Detail"
                  src="https://images.pexels.com/photos/10855255/pexels-photo-10855255.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="feature-image"
                />
              </div>
              <div className="feature-text-content">
                <h3 className="section-subtitle">Lifetime Warranty</h3>
                <p className="section-content">
                  We stand behind our craftsmanship with a comprehensive
                  warranty that covers both materials and structural integrity.
                </p>
                <div className="warranty-badge">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Certified Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-carousel-section">
          <div className="portfolio-header">
            <h2 className="section-title">Signature Arizona Projects</h2>
            <p className="section-content">
              A curated gallery emphasizing desert palettes and finished
              details.
            </p>
          </div>
          <div className="portfolio-rail">
            <div className="portfolio-item">
              <img
                alt="Project A"
                src="https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-title">Modern Mesa Estate</span>
                <a href="#">
                  <div className="btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Project B"
                src="https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-title">Sonoran Sun Terrace</span>
                <a href="#">
                  <div className="btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Project C"
                src="https://images.pexels.com/photos/23928963/pexels-photo-23928963.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-title">Red Rock Walkway</span>
                <a href="#">
                  <div className="btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Project D"
                src="https://images.pexels.com/photos/10855255/pexels-photo-10855255.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <span className="portfolio-title">Phoenix Patio Hub</span>
                <a href="#">
                  <div className="btn-link">
                    <span>View Details</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="consultation" className="cta-consultation-section">
          <div className="container-inner">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">Elevate Your Landscape</h2>
                <p className="section-content">
                  Schedule your private consultation today. We offer free
                  estimates and clear project timelines to ensure your vision
                  becomes a reality.
                </p>
                <div className="cta-benefits">
                  <div className="benefit-tag">
                    <span>Free Estimates</span>
                  </div>
                  <div className="benefit-tag">
                    <span>Premium Sourcing</span>
                  </div>
                  <div className="benefit-tag">
                    <span>Expert Crew</span>
                  </div>
                </div>
              </div>
              <div className="cta-form-wrapper">
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="82bd4c7d-336f-4ea8-ab04-726460cf7f21"
                  className="consultation-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="thq_textinput_hePz"
                      name="textinput"
                      required="true"
                      placeholder="Full Name"
                      data-form-field-id="thq_textinput_hePz"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="thq_textinput_D3ma"
                      name="textinput"
                      required="true"
                      placeholder="Email Address"
                      data-form-field-id="thq_textinput_D3ma"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      id="thq_select_drnZ"
                      name="select"
                      required="true"
                      data-form-field-id="thq_select_drnZ"
                      className="form-input"
                    >
                      <option disabled="true" selected="true">
                        Select Service
                      </option>
                      <option value="driveway">Driveway Installation</option>
                      <option value="patio">Patio Design</option>
                      <option value="pool">Pool Decking</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_1tzJ"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_1tzJ"
                    className="btn-lg btn-full btn btn-primary"
                  >
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <dialog id="showcaseLightbox" className="lightbox-dialog">
          <div className="lightbox-content">
            <button id="closeLightbox" className="lightbox-close">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewbox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
            <img
              alt="High-res Showcase Image"
              src="https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1500"
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <h3 className="section-subtitle">Scottsdale Oasis Detail</h3>
              <p className="section-content">
                Precision-cut travertine borders meeting custom charcoal pavers.
              </p>
            </div>
          </div>
        </dialog>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="hero-interaction">
(function(){
  // Parallax Effect for Hero Background
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const bgLayer = document.querySelector(".hero-bg-layer")
    if (bgLayer) {
      bgLayer.style.transform = \`translateY(\${scrollY * 0.3}px)\`
    }
  })

  // Hero Before/After Slider Interaction
  const slider = document.querySelector(".slider-comparison")
  const afterImg = document.querySelector(".slider-image-after")
  const handle = document.querySelector(".slider-handle")

  if (slider) {
    const moveSlider = (e) => {
      const rect = slider.getBoundingClientRect()
      const x = (e.clientX || e.touches[0].clientX) - rect.left
      const position = Math.max(0, Math.min(x, rect.width))
      const percentage = (position / rect.width) * 100

      afterImg.style.width = \`\${percentage}%\`
      handle.style.left = \`\${percentage}%\`
    }

    slider.addEventListener("mousemove", moveSlider)
    slider.addEventListener("touchmove", moveSlider)
  }

  // Lightbox Modal Functionality
  const lightbox = document.getElementById("showcaseLightbox")
  const openBtn = document.getElementById("openShowcaseLightbox")
  const closeBtn = document.getElementById("closeLightbox")

  if (openBtn && lightbox) {
    openBtn.addEventListener("click", () => {
      lightbox.showModal()
    })

    closeBtn.addEventListener("click", () => {
      lightbox.close()
    })

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.close()
      }
    })
  }

  // Horizontal Scroll for Testimonials (Optional Enhancement)
  const testimonialRail = document.querySelector(".testimonial-rail")
  if (testimonialRail) {
    testimonialRail.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        testimonialRail.scrollLeft += e.deltaY
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-hero-bg-layer-elm {
            background-image: url('https://images.pexels.com/photos/32371655/pexels-photo-32371655.jpeg?auto=compress&cs=tinysrgb&h=1800');
          }
          .home-thq-slider-image-before-elm {
            background-image: url('https://images.pexels.com/photos/13119344/pexels-photo-13119344.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .home-thq-slider-image-after-elm {
            background-image: url('https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=1500');
          }
          .home-thq-swatch-elm1 {
            background: #a95420;
          }
          .home-thq-swatch-elm2 {
            background: #9a6f44;
          }
          .home-thq-swatch-elm3 {
            background: #8b7d74;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
