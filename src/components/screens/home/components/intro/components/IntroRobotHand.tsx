import React from 'react'
import {
  card01,
  card02,
  card03,
  circle,
  robotHand,
} from '../../../../../../assets/img'
import FloatingElement from '../../../../../../ui/floating-element/FloatingElement'

const CARD_AMPLITUDE = 3.5
const CARD_SPEED = 0.75

const CIRCLE_AMPLITUDE = 5
const CIRCLE_SPEED = 1

const IntroRobotHand = () => {
  return (
    <div className="intro__robot-hand">
      <div className="intro__robot-hand__card__container">
        <FloatingElement
          amplitude={CIRCLE_AMPLITUDE}
          speed={CIRCLE_SPEED}
          initialStep={30}
        >
          <img
            src={circle}
            alt="circle"
            className="intro__robot-hand__circle big"
          />
        </FloatingElement>
        <FloatingElement
          amplitude={CIRCLE_AMPLITUDE}
          speed={CIRCLE_SPEED}
          initialStep={120}
        >
          <img
            src={circle}
            alt="circle"
            className="intro__robot-hand__circle medium"
          />
        </FloatingElement>
        <FloatingElement
          amplitude={CIRCLE_AMPLITUDE}
          speed={CIRCLE_SPEED}
          initialStep={270}
        >
          <img
            src={circle}
            alt="circle"
            className="intro__robot-hand__circle small"
          />
        </FloatingElement>
        <div className="intro__robot-hand__card a">
          <FloatingElement
            amplitude={CARD_AMPLITUDE}
            speed={CARD_SPEED}
            initialStep={0}
          >
            <img src={card01} alt="card" />
          </FloatingElement>
        </div>
        <div className="intro__robot-hand__card b">
          <FloatingElement
            amplitude={CARD_AMPLITUDE}
            speed={CARD_SPEED}
            initialStep={90}
          >
            <img src={card02} alt="card" />
          </FloatingElement>
        </div>
        <div className="intro__robot-hand__card c">
          <FloatingElement
            amplitude={CARD_AMPLITUDE}
            speed={CARD_SPEED}
            initialStep={180}
          >
            <img src={card03} alt="card" />
          </FloatingElement>
        </div>
      </div>
      <img
        src={robotHand}
        alt="robot-hand"
        className="intro__robot-hand__img"
      />
    </div>
  )
}

export default IntroRobotHand
