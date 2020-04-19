import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styles from './Mainpage2.module.css'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logowhiteoutline.png'
import melissa from '../assets/images/melissa.jpg'
import nextAcademy from '../assets/images/nextAcademy.jpg'
import cccsm from '../assets/images/cccSM.jpg'
import obd from '../assets/images/obd.jpg'
import imu from '../assets/images/imu.jpg'
import pharmacy from '../assets/images/pharmacy.jpg'

const Mainpage2 = ({ ScrollToTop }) => {
  return (
    <div className={styles.fullPage}>
      <Navbar />
      <Controller>
        <Scene
          duration={600}
          pin
          triggerHook="onLeave"
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
          triggerHook="onLeave"
          duration={700}
          pin
        >
          {(progress) => (
            <div className={styles.sticky}>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{
                    opacity: '0',
                    scale: '0.3',
                  }}
                  to={{
                    left: '5vw',
                    top: '60vh',
                    opacity: '0.9',
                    scale: '1',
                    transform: 'rotate(-50deg)'
                  }}
                >
                  <img src={logo} className={styles.logo2} />
                </Tween>
                <Tween
                  from={{
                    opacity: '0',
                    scale: '0.3',
                  }}
                  to={{
                    right: '5vw',
                    top: '55vh',
                    opacity: '0.9',
                    scale: '0.5',
                    transform: 'rotate(30deg)'
                  }}
                >
                  <img src={logo} className={styles.logo3} />
                </Tween>
                <Tween
                  from={{
                    opacity: '0',
                    scale: '0.3',
                  }}
                  to={{
                    right: '10vw',
                    top: '10vh',
                    opacity: '0.9',
                    scale: '0.5',
                    transform: 'rotate(-30deg)'
                  }}
                >
                  <img src={logo} className={styles.logo3} />
                </Tween>
              </Timeline>
              <div className={styles.contactInfo}>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    staggerFrom={{
                      opacity: 0,
                    }}
                    stagger={0.1}
                  >
                    <p className={styles.contactTitle}>My Contact</p>
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
                  </Tween>
                </Timeline>
              </div>
            </div>
          )}
        </Scene>
        <h4 className={styles.timelineTitle}>My timeline.</h4>
        <Scene
          duration={700}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className={styles.parallax} />}
          >
            <Tween
              position="0"
              from={{
                yPercent: -20,
                scale: 1,
              }}
              to={{
                yPercent: 3,
                scale: 1.1
              }}
            >
              <img src={nextAcademy} className={styles.image} id="image" />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2020</p>
              <p>Next Academy</p>
              <p>Full-stack Web Development</p>
              <p className={styles.skills}>HTML, CSS, Javascript, React, Python Flask</p>
              <div className={styles.box} />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className={styles.parallax} />}
          >
            <Tween
              position="0"
              from={{
                yPercent: -20,
                scale: 1,
              }}
              to={{
                yPercent: 3,
                scale: 1.1
              }}
            >
              <img src={cccsm} className={styles.image} id="image" />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2015 - 2019</p>
              <p>Calvary Church, CCC</p>
              <p>Deputy Stage Manager</p>
              <div className={styles.box} />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className={styles.parallax} />}
          >
            <Tween
              position="0"
              from={{
                yPercent: -20,
                scale: 1,
              }}
              to={{
                yPercent: 3,
                scale: 1.1
              }}
            >
              <img src={obd} className={styles.image} id="image" />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2019</p>
              <p>OBD Garden Tower</p>
              <p>Administrative Assistant</p>
              <div className={styles.box} />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className={styles.parallax} />}
          >
            <Tween
              position="0"
              from={{
                yPercent: -20,
                scale: 1,
              }}
              to={{
                yPercent: 3,
                scale: 1.1
              }}
            >
              <img src={imu} className={styles.image} id="image" />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={700}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2016 - 2019</p>
              <p>International Medical University (IMU)</p>
              <p>BSc (Hons) Medical Biotechnology</p>
              <div className={styles.box} />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={300}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content2} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2019</p>
              <p>Fisher Scientific (M) Sdn Bhd</p>
              <p>Customer Service Intern</p>
              <div className={styles.box} />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={500}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className={styles.parallax} />}
          >
            <Tween
              position="0"
              from={{
                yPercent: -20,
                scale: 1,
              }}
              to={{
                yPercent: 3,
                scale: 1.1
              }}
            >
              <img src={pharmacy} className={styles.image} id="image" />
            </Tween>
          </Timeline>
        </Scene>
        <Scene
          duration={300}
          triggerHook="onEnter"
          reverse={false}
        >
          <Timeline wrapper={<div className={styles.content} />}>
            <Tween
              staggerFrom={{
                opacity: 0,
              }}
              stagger={0.1}
            >
              <div className={styles.diamond} />
              <p>2016 - 2018</p>
              <p>Pharmacy Assistant</p>
              <p>Pharmahome Pharmacy, Penang</p>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
      <p
        onClick={ScrollToTop}
        className={styles.back2Top}
      >
        back to top
      </p>
      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <p>
            credits to :
          <a href="https://scrollmagic.io/">
              scrollmagic
          </a>
          </p>
          <p>
            inspired by :
          <a href="https://www.rezo-zero.com/">
              rezo zero
          </a>
          </p>
        </div>
        <p>
          <i class="fas fa-copyright"></i>
          2020 melissa teh
        </p>
      </div>
    </div >
  )
}

export default Mainpage2
