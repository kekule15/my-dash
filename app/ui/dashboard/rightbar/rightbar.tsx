import React from 'react'
import Image from 'next/image'
import styles from '../rightbar/rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const RightBarWidget = () => {
  return (
    <div className={styles.container}>

      <div className={styles.items}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut_1.jpg" alt='Background image' fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}> Takes 4 minutes to learn </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={styles.items}>

        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming up  </h3>
          <span className={styles.subtitle}> Boost your productivity </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>

    </div>
  )
}

export default RightBarWidget