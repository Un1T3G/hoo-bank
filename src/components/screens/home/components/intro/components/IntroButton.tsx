import React from 'react'
import { arrowUp } from '../../../../../../assets/img'

const IntroButton = () => {
  return (
    <button className="intro__btn">
      <div className="intro__btn__text">
        <span>Get</span>
        <span>Started.</span>
        <img src={arrowUp} alt="arrow-up" className="intro__btn__icon" />
      </div>
    </button>
  )
}

export default IntroButton
