import React from 'react'
import styles from './Mainpage.module.css'
import logo from '../assets/images/logowhiteoutline.png'
import Navbar from '../components/Navbar.js'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const mainpage = () => {
  return (
    <div className={styles.page}>
      {/* <Navbar /> */}
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene
          duration={800}
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
                  <p>A certified web developer.</p>
                  <p>An amateur graphic designer.</p>
                  <p>A ui/ux design enthusiast.</p>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene
          duration={900}
          pin
        >
          {(progress) => (
            <div className={styles.page2}>
              <Timeline totalProgress={progress} paused>
                <Tween
                  staggerFrom={{
                    opacity: 0,
                  }}
                  stagger={0.1}
                >
                  <p>My timeline.</p>
                  <p>2020</p>
                  <div className={styles.nextAcademy}>
                    <p>Jan - Mar 2020</p>
                    <p>Full-Stack Web Development</p>
                  </div>
                  <div className={styles.box}>
                  </div>
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
      {/* <p style={{ padding: "200px 0px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eos facere recusandae expedita voluptate asperiores. Cumque dolore quos dolorem suscipit nesciunt, architecto nisi atque non accusamus voluptatum sunt odit et!</p>
      <div className="section" />
      <Controller>
        <Scene duration={600} pin={true} enabled={true}>
          <div className="sticky"><div>Pin Test</div></div>
        </Scene>
        <Scene duration={200} pin={{ pushFollowers: false }}>
          <div className="sticky"><div>Pin Test</div></div>
        </Scene>
        <Scene duration={300} pin={true} offset={100}>
          <div className="sticky blue"><div>Pin Test</div></div>
        </Scene>
      </Controller> */}
    </div >
  )
}

export default mainpage
