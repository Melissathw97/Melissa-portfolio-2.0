import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/images/logowhiteoutline.png'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src={logo}
        alt="Navbar logo"
        className={styles.navbarLogo} />
      <p className={styles.navbarName}>MELISSA</p>
    </div>
  )
}

export default Navbar
