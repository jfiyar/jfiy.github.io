import React from 'react'
import styles from './index.less'
import { Heart } from 'styled-icons/evil'

const ShowLoveBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.loveText}>I LOVE YOU</div>
        <div className={styles.loverName}>
          <span>JLK</span>
          <span className={styles.loveEmoji}>
            <Heart size="4vw" />
          </span>
          <span>WLH</span>
        </div>
      </div>
    </div>
  )
}

export default ShowLoveBanner
