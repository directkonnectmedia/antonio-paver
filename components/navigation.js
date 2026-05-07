import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <span className="section-title">
                    Ramiro Camacho Pavers LLC
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-links-desktop">
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </a>
              </Link>
              <a href="#services">
                <div className="navigation-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#portfolio">
                <div className="navigation-link">
                  <span>Portfolio</span>
                </div>
              </a>
              <a href="#testimonials">
                <div className="navigation-link">
                  <span>Testimonials</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn btn-sm btn-primary">
                  <span>Get a Quote</span>
                </div>
              </a>
            </div>
            <button
              id="mobile-toggle"
              aria-label="Toggle navigation"
              aria-expanded="false"
              className="navigation-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <span className="section-title">
                    Ramiro Camacho Pavers LLC
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobile-close"
              aria-label="Close navigation"
              className="navigation-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </Link>
              <a href="#services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#portfolio">
                <div className="navigation-mobile-link">
                  <span>Portfolio</span>
                </div>
              </a>
              <a href="#testimonials">
                <div className="navigation-mobile-link">
                  <span>Testimonials</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn-lg btn btn-primary navigation-mobile-cta">
                  <span>Get a Quote</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <p className="section-content">
                Arizona&apos;s Premium Paver Craftsmanship
              </p>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-link, .navigation-link::after, .navigation-mobile-link {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const body = document.body

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    mobileToggle.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const nav = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      nav.style.boxShadow = "0 4px 20px rgba(106, 63, 46, 0.08)"
      nav.style.padding = "var(--spacing-xs) 0"
    } else {
      nav.style.boxShadow = "none"
      nav.style.padding = "0"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
