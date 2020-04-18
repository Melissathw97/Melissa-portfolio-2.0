import React from 'react'
import styles from './Mainpage.module.css'
import logo from '../assets/images/logowhiteoutline.png'
import Navbar from '../components/Navbar.js'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import nextAcademy from '../assets/images/nextAcademy.jpg'
import cccsm from '../assets/images/cccSM.jpg'
import obd from '../assets/images/obd.jpg'
import imu from '../assets/images/imu.jpg'
import pharmacy from '../assets/images/pharmacy.jpg'

const mainpage = ({ ScrollToTop }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene
          duration={600}
          pin
        >
          {(progress) => (
            <div className={styles.welcomePage}>
              <p className={styles.welcome}>Welcome to</p>
              <img
                src={logo}
                alt="Melissa's logo"
                className={styles.logo} />
              <p className={styles.melissaTeh}>MELISSA TEH</p>
              <Timeline totalProgress={progress} paused>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>A medical biotech graduate.</p>
                  <p>An amateur graphic designer.</p>
                  <p>A certified web developer.</p>
                  <p>A ui/ux design enthusiast.</p>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={400}
          pin
        >
          {(progress) => (
            <div className={styles.page2}>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.parallax} />} >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 6,
                  }}
                >
                  <img src={nextAcademy} className={styles.nextAcademyPic} id="image" />
                </Tween>
              </Timeline>
              <Timeline duration={0} totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>2020</p>
                  <p>Next Academy</p>
                  <p>Full-stack Web Development</p>
                  <p className={styles.skills}>HTML, CSS, Javascript, React, Python Flask</p>
                  <div className={styles.box} />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={500}
          pin
        >
          {(progress) => (
            <div className={styles.page3}>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.parallax} />} >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 6,
                  }}
                >
                  <img src={cccsm} className={styles.nextAcademyPic} id="image" />
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>2015 - present</p>
                  <p>Calvary Church, CCC</p>
                  <p>Deputy Stage Manager</p>
                  <div className={styles.box} />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={500}
          pin
        >
          {(progress) => (
            <div className={styles.page3}>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.parallax} />} >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 6,
                  }}
                >
                  <img src={obd} className={styles.nextAcademyPic} id="image" />
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>2019</p>
                  <p>OBD Garden Tower</p>
                  <p>Administrative Assistant</p>
                  <div className={styles.box} />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={500}
          pin
        >
          {(progress) => (
            <div className={styles.page3}>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.parallax} />} >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 6,
                  }}
                >
                  <img src={imu} className={styles.nextAcademyPic} id="image" />
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>2016 - 2019</p>
                  <p>International Medical University (IMU)</p>
                  <p>BSc (Hons) Medical Biotechnology</p>
                  <div className={styles.box} />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={40}
          pin
          reverse={false}
        >
          {(progress) => (
            <div>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween>
                  <p>2019</p>
                  <p>Fisher Scientific (M) Sdn Bhd</p>
                  <p>Customer Service Intern</p>
                  <div className={styles.box} />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={500}
          pin
        >
          {(progress) => (
            <div className={styles.page3}>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.parallax} />} >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 6,
                  }}
                >
                  <img src={pharmacy} className={styles.nextAcademyPic} id="image" />
                </Tween>
              </Timeline>
              <Timeline totalProgress={progress} paused wrapper={<div className={styles.nextAcademyBox} />}>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>2016 - 2018</p>
                  <p>Pharmacy Assistant</p>
                  <p>Pharmahome Pharmacy, Penang</p>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      <p className={styles.myContactInfo}>my contact info</p>
      <div className={styles.footer}>
        <div className={styles.contactInfo}>
          <p>
            <i class={`fas fa-phone-square-alt ${styles.contactIcon}`}></i>+6012-213 1997
          </p>
          <p>
            <i class={`fas fa-envelope ${styles.contactIcon}`}></i>melissathw97@gmail.com
          </p>
          <p>
            <a href="https://github.com/Melissathw97" target="_blank">
              <i className={`fab fa-github ${styles.contactIcon}`}></i>
              github.com/Melissathw97
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/Melissathw/" target="_blank">
              <i className={`fab fa-linkedin ${styles.contactIcon}`}></i>
              linkedin.com/in/Melissathw
            </a>
          </p>
        </div>
        <div onClick={ScrollToTop}>back to top</div>
      </div>
    </div >
  )
}

export default mainpage
