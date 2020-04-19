import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/images/logowhiteoutline.png'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.navMenu}>
        <p className={styles.navbarName}>M</p>
        <img
          src={logo}
          alt="Navbar logo"
          className={styles.navbarLogo} />
        <p className={styles.navbarT}>T</p>
      </span>
    </div>
  )
}

export default Navbar
