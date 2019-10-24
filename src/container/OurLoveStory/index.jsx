import React from 'react'
import styles from './index.less'
import { Heart } from 'styled-icons/fa-solid'

const GgHeart = ({ word }) => (
  <>
    <div className={styles.heartIsCenter}>
      <span style={{ backgroundColor: 'rgba(3, 169, 244, 0.45)' }} className={styles.heart}>
        <span>
          <Heart size="1.5vw" />
        </span>
      </span>
    </div>
    <div className={styles.ggWordInHeart}>
      <div>
        <div>{word}</div>
      </div>
    </div>
  </>
)

const MmHeart = ({ word }) => (
  <>
    <div className={styles.heartIsCenter}>
      <span className={styles.heart}>
        <span>
          <Heart size="1.5vw" />
        </span>
      </span>
    </div>
    <div className={styles.mmWordInHeart}>
      <div>
        <div>{word}</div>
      </div>
    </div>
  </>
)

const OurLoveStory = () => {
  return (
    <div className={styles.loveStory}>
      <div className={styles.loveTitle}>Our love story</div>
      <div className={styles.loveMotto}>just you,and me,the story for our love</div>
      <MmHeart
        word={
          <>
            <div>2018年3月,</div>
            <div>听说，一只蝴蝶在巴西轻拍翅膀，可以导致一个月后的德克萨斯州的一场龙卷风。</div>
            <div>那天，我只是看了你一眼，便对你情根深种。</div>
            <div>有人说，一见钟情都是见色起意，我说，你真的好美。</div>
          </>
        }
      />
      <MmHeart word="xxx" />
    </div>
  )
}

export default OurLoveStory
