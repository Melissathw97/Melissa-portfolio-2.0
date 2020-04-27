import React from 'react'
import styles from './Footer.module.css'

const Footer = ({ ScrollToTop }) => {
  return (
    <div>
      <p
        onClick={ScrollToTop}
        className={styles.back2Top}
      >
        back to top
      </p>
      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <p>
            my portfolio 1.0 (not responsive) :
            <a
              href="https://melissathw.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              melissa
            </a>
          </p>
          <p>
            credits to :
            <a
              href="https://scrollmagic.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              scrollmagic
          </a>
          </p>
          <p>
            inspired by :
            <a
              href="https://www.rezo-zero.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rezo zero
          </a>
          </p>
        </div>
        <p>
          <i className="fas fa-copyright"></i>
          2020 melissa teh
        </p>
      </div>
    </div>
  )
}

export default Footer
