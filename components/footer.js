import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-brand-column">
                <h2 className="footer-brand-title">Ramiro Camacho</h2>
                <span className="footer-brand-subtitle">
                  Master Paver Craftsmanship
                </span>
                <p className="footer-description">
                  Elevating Arizona landscapes with luxury paver installations.
                  We blend high-end desert aesthetics with unmatched durability
                  to create timeless outdoor sanctuaries.
                </p>
                <div className="footer-social-wrapper">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-9 8a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m6 0a3 3 0 0 0-1.168.236l-.125.057A1 1 0 0 0 11 11v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0-3-3M8 7a1 1 0 0 0-.993.883L7 8.01a1 1 0 0 0 1.993.117L9 8a1 1 0 0 0-1-1"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-column footer-column">
                <h3 className="footer-column-title">Quick Links</h3>
                <nav className="footer-nav">
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="Homepage">
                        <div className="footer-nav-link">
                          <span>Home</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Portfolio</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Our Services</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>The Process</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Request Quote</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column footer-contact-column">
                <h3 className="footer-column-title">Get In Touch</h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      Phoenix, Arizona &amp; Surrounding Valleys
                    </span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <a href="tel:+16025550123">
                      <div className="footer-contact-link">
                        <span>(602) 555-0123</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href="mailto:hello@ramirocamacho.com?subject=">
                      <div className="footer-contact-link">
                        <span>hello@ramirocamacho.com</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  &amp;copy; 2026 Ramiro Camacho Pavers. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-texture-overlay"></div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-parallax">
(function(){
  const footerSection = document.querySelector(".footer-section")
  const textureOverlay = document.querySelector(".footer-texture-overlay")

  if (footerSection && textureOverlay) {
    window.addEventListener(
      "scroll",
      () => {
        const scrollPosition = window.pageYOffset
        const footerOffset = footerSection.offsetTop
        const viewportHeight = window.innerHeight

        if (scrollPosition > footerOffset - viewportHeight) {
          const relativeScroll = scrollPosition - (footerOffset - viewportHeight)
          const parallaxValue = relativeScroll * 0.15
          textureOverlay.style.transform = \`translateY(\${parallaxValue}px)\`
        }
      },
      { passive: true }
    )
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
