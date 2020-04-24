import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styles from './Mainpage2.module.css'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logowhiteoutline.png'
import nextAcademy from '../assets/images/nextAcademy.jpg'
import cccsm from '../assets/images/cccSM.jpg'
import obd from '../assets/images/obd.jpg'
import imu from '../assets/images/imu.jpg'
import pharmacy from '../assets/images/pharmacy.jpg'

const Mainpage2 = ({ ScrollToTop }) => {
  const [overlay, setOverlay] = useState(false);
  const [overlayPage, setOverlayPage] = useState(0);

  const showOverlay = (e) => {
    setOverlayPage(e.target.id);
    setOverlay(true);
  }

  const hideOverlay = () => {
    setOverlay(false);
  }

  const pages = [
    (
      <>
        <h6>A group project</h6>
        <h4 className={styles.projectTitle}>5 | Hive</h4>
        <p>A fitness buddy mobile app</p>
        <h6>Features:</h6>
        <div className={styles.projectFeatures}>
          <ul>
            <li>Sign up & log in</li>
            <li>Look for a buddy/mentor</li>
            <li>See nearby users</li>
            <li>Match like tinder</li>
            <li>Chat with other users</li>
            <li>Watch trending fitness videos</li>
          </ul>
        </div>
        <div className={styles.projectResponsibility}>
          <p>Managed UI/UX design using React</p>
        </div>
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/Melissathw97/5-Hive"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            git repo
            <i className={`fab fa-github ${styles.projectIcon}`} />
          </a>
        </div>
      </>
    ),
    (
      <>
        <h4 className={styles.projectTitle}>My Next-agram</h4>
        <p>A web imitation of Instagram</p>
        <h6>Features:</h6>
        <div className={styles.projectFeatures}>
          <ul>
            <li>Sign up & log in</li>
            <li>Update profile info</li>
            <li>Upload posts</li>
            <li>Follow & unfollow users</li>
            <li>Make donations to posts</li>
          </ul>
        </div>
        <div className={styles.projectResponsibility}>
          <p>Python</p>
          <p>AWS for media storage</p>
        </div>
        <div className={styles.projectLinks}>
          <a
            href="https://nextagram-melissa.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            website
            <i className={`fas fa-link ${styles.projectIcon}`} />
          </a>
          <a
            href="https://github.com/Melissathw97/Next-agram"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            git repo
            <i className={`fab fa-github ${styles.projectIcon}`} />
          </a>
        </div>
      </>
    ),
    (
      <>
        <h4 className={styles.projectTitle}>My Tic-tac-toe</h4>
        <p>A web version of the traditional game</p>
        <h6>How to play:</h6>
        <div className={styles.projectFeatures}>
          <ul>
            <li>Play as both players</li>
            <li>Join 3 of the same to win <br />(horizontally, vertically, diagonally)</li>
            <li>Have fun! :3</li>
          </ul>
        </div>
        <div className={styles.projectResponsibility}>
          <p>React (hooks)</p>
          <p>Styled components</p>
        </div>
        <div className={styles.projectLinks}>
          <a
            href="https://mel-tictactoe.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            website
            <i className={`fas fa-link ${styles.projectIcon}`} />
          </a>
          <a
            href="https://github.com/Melissathw97/my-tic-tac-toe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            git repo
            <i className={`fab fa-github ${styles.projectIcon}`} />
          </a>
        </div>
      </>
    )
  ]

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
                      top: '27vh',
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
                      top: '49vh',
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
            duration={700}
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
            duration={500}
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
          <div id="trigger3" className={styles.trigger3} />
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
          <div id="trigger4" className={styles.trigger4} />
          <Scene
            duration={700}
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
          <div id="trigger5" className={styles.trigger5} />
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
          <div id="trigger6" className={styles.trigger6} />
          <Scene
            duration={500}
            triggerElement="#trigger6"
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
                <p>2018</p>
                <p className={styles.period}>( Jan - Jun 2016; Jun 2018; Nov 2018 )</p>
                <p>Pharmacy Assistant</p>
                <p>Pharmahome Pharmacy, Penang</p>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </div>
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
    </div >
  )
}

export default Mainpage2
