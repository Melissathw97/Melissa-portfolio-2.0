import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styles from './Mainpage.module.css';
import Navbar from '../components/Navbar';
import overlayPages from '../utils/overlayPages';
import Footer from '../components/Footer';
import logo from '../assets/images/logowhiteoutline.png'
import nextAcademy from '../assets/images/nextAcademy.jpg'
import cccsm from '../assets/images/cccSM.jpg'
import obd from '../assets/images/obd.jpg'
import imu from '../assets/images/imu.jpg'
import alumniHomecoming from '../assets/images/alumniHomecoming.jpg'
import imuCup from '../assets/images/imuCup.jpg'
import pharmacy from '../assets/images/pharmacy.jpg'

const Mainpage2 = ({ ScrollToTop, overlay, overlayPage, showOverlay, hideOverlay }) => {

  const pages = overlayPages();

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
                    opacity: '0.7',
                    scale: '1',
                    transform: 'rotate(-50deg)'
                  }}
                >
                  <img
                    src={logo}
                    alt="Melissa's logo"
                    className={styles.logo2} />
                </Tween>
                <Tween
                  from={{
                    opacity: '0',
                    scale: '0.3',
                  }}
                  to={{
                    right: '5vw',
                    top: '57vh',
                    opacity: '0.9',
                    scale: '0.5',
                    transform: 'rotate(30deg)'
                  }}
                >
                  <img
                    src={logo}
                    alt="Melissa's logo"
                    className={styles.logo3} />
                </Tween>
                <Tween
                  from={{
                    opacity: '0',
                    scale: '0.3',
                  }}
                  to={{
                    right: '10vw',
                    top: '10vh',
                    opacity: '0.7',
                    scale: '0.5',
                    transform: 'rotate(-30deg)'
                  }}
                >
                  <img
                    src={logo}
                    alt="Melissa's logo"
                    className={styles.logo3} />
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
                    <h4 className={styles.sectionTitle}>My Contact</h4>
                    <p>
                      <i className={`fas fa-phone-square-alt ${styles.contactIcon}`} />
                      +6012-213 1997
                    </p>
                    <p>
                      <i className={`fas fa-envelope ${styles.contactIcon}`} />
                      melissathw97@gmail.com
                    </p>
                    <p>
                      <a
                        href="https://github.com/Melissathw97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                      >
                        <i className={`fab fa-github ${styles.contactIcon}`} />
                        github.com/Melissathw97
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/Melissathw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                      >
                        <i className={`fab fa-linkedin ${styles.contactIcon}`} />
                        linkedin.com/in/Melissathw
                      </a>
                    </p>
                  </Tween>
                </Timeline>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={600}
          pin
        >
          {(progress) => (
            <div className={`${styles.sticky} ${styles.sticky2}`}>
              <h4>My projects.</h4>
              <div className={styles.projects}>
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{
                      top: '0',
                      opacity: '0',
                    }}
                    to={{
                      top: '5vh',
                      opacity: '1',
                    }}
                  >
                    <div
                      id="0"
                      className={styles.project}
                      onClick={showOverlay}
                    >
                      5 | Hive
                  </div>
                  </Tween>
                  <Tween
                    from={{
                      top: '0',
                      opacity: '0',
                    }}
                    to={{
                      top: '29vh',
                      opacity: '1',
                    }}
                  >
                    <div
                      id="1"
                      className={`${styles.project} ${styles.project2}`}
                      onClick={showOverlay}
                    >
                      My<br />Next-agram
                  </div>
                  </Tween>
                  <Tween
                    from={{
                      top: '0',
                      opacity: '0',
                    }}
                    to={{
                      top: '53vh',
                      opacity: '1',
                    }}
                  >
                    <div
                      id="2"
                      className={`${styles.project} ${styles.project3}`}
                      onClick={showOverlay}
                    >
                      My<br /> tic-tac-toe
                  </div>
                  </Tween>
                </Timeline>
                <div style={overlay ? { display: "block" } : { display: "none" }} className={styles.projectDetails}>
                  <button
                    className={styles.closeButton}
                    onClick={hideOverlay}
                  >
                    x
                  </button>
                  {pages[overlayPage]}
                </div>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
      <h4 className={styles.sectionTitle}>My timeline.</h4>
      <div className={styles.middleLine}>
        <Controller>
          <div id="trigger" className={styles.trigger} />
          <Scene
            duration={1000}
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className={styles.parallax} />}
            >
              <Tween
                position="0"
                from={{
                  yPercent: -18,
                  scale: 1,
                }}
                to={{
                  yPercent: 3,
                  scale: 1.1
                }}
              >
                <img
                  src={nextAcademy}
                  alt="Next Academy"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger"
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
                <p className={styles.period}>( January - March )</p>
                <p>Next Academy</p>
                <p>Full-stack Web Development</p>
                <p className={styles.skills}>HTML, CSS, Javascript, React, Python Flask</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger2" className={styles.trigger2} />
          <Scene
            duration={1000}
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className={`${styles.parallax} ${styles.parallaxEven}`} />}
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
                <img
                  src={cccsm}
                  alt="Stage Management"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger2"
            reverse={false}
          >
            <Timeline wrapper={<div className={styles.contentEven} />}>
              <Tween
                staggerFrom={{
                  opacity: 0,
                }}
                stagger={0.1}
              >
                <div className={styles.diamond} />
                <p>2015 - 2019</p>
                <p className={styles.period}>( Easter & Christmas )</p>
                <p>Calvary Church, CCC</p>
                <p>Deputy Stage Manager</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger3" className={styles.trigger2} />
          <Scene
            duration={1000}
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
                <img
                  src={obd}
                  alt="OBD Garden Tower"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger3"
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
                <p className={styles.period}>( November - December )</p>
                <p>OBD Garden Tower</p>
                <p>Administrative Assistant</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger4" className={styles.trigger2} />
          <Scene
            duration={1000}
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className={`${styles.parallax} ${styles.parallaxEven}`} />}
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
                <img
                  src={imu}
                  alt="IMU Biotech"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger4"
            reverse={false}
          >
            <Timeline wrapper={<div className={styles.contentEven} />}>
              <Tween
                staggerFrom={{
                  opacity: 0,
                }}
                stagger={0.1}
              >
                <div className={styles.diamond} />
                <p>2019</p>
                <p className={styles.period}>( Sep 2016 - Nov 2019 )</p>
                <p>International Medical University (IMU)</p>
                <p>BSc (Hons) Medical Biotechnology</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger5" className={styles.trigger3} />
          <Scene
            duration={400}
            triggerElement="#trigger5"
            reverse={false}
          >
            <Timeline wrapper={<div className={styles.content2} />}>
              <Tween
                staggerFrom={{
                  opacity: 0,
                }}
                stagger={0.1}
              >
                <div className={styles.diamond2} />
                <p>2019</p>
                <p className={styles.period}>( April - October )</p>
                <p>Fisher Scientific (M) Sdn Bhd</p>
                <p>Customer Service Intern</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger6" className={styles.trigger4} />
          <Scene
            duration={1000}
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
                  yPercent: 0,
                  scale: 1.1
                }}
              >
                <img
                  src={alumniHomecoming}
                  alt="Alumni Homecoming Night"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger6"
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
                <p>2018</p>
                <p className={styles.period}>( May - November )</p>
                <p>Alumni Homecoming Night, IMU</p>
                <p>Vice President of Public Relations</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger7" className={styles.trigger2} />
          <Scene
            duration={1000}
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className={`${styles.parallax} ${styles.parallaxEven}`} />}
            >
              <Tween
                position="0"
                from={{
                  yPercent: -30,
                  scale: 1,
                }}
                to={{
                  yPercent: -15,
                  scale: 1.1
                }}
              >
                <img
                  src={imuCup}
                  alt="IMU Cup 2018"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger7"
            reverse={false}
          >
            <Timeline wrapper={<div className={styles.contentEven} />}>
              <Tween
                staggerFrom={{
                  opacity: 0,
                }}
                stagger={0.1}
              >
                <div className={styles.diamond} />
                <p>2018</p>
                <p className={styles.period}>( May - November )</p>
                <p>IMU Cup 2018, IMU</p>
                <p>Publicity Manager</p>
              </Tween>
            </Timeline>
          </Scene>
          <div id="trigger8" className={styles.trigger2} />
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
                  yPercent: -10,
                  scale: 1,
                }}
                to={{
                  yPercent: 5,
                  scale: 1.1
                }}
              >
                <img
                  src={pharmacy}
                  alt="Pharmahome Pharmacy"
                  className={styles.image}
                />
              </Tween>
            </Timeline>
          </Scene>
          <Scene
            duration={400}
            triggerElement="#trigger8"
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
                <p>2018</p>
                <p className={styles.period}>( Jan - Jun 2016; Jun 2018; Nov 2018 )</p>
                <p>Pharmahome Pharmacy, Penang</p>
                <p>Pharmacy Assistant</p>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </div>
      <Footer ScrollToTop={ScrollToTop} />
    </div >
  )
}

export default Mainpage2;
