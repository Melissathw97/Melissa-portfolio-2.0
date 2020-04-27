import React from 'react';
import styles from './overlayPages.module.css'

const overlayPages = () => {
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
  ];
  return pages;
};

export default overlayPages;