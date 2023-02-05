import React from 'react'
import { discount } from '../../../../../../assets/img'

const IntroDiscount = () => {
  return (
    <div className="intro__discount">
      <img src={discount} alt="discount" className="intro__discount__icon" />
      <div className="intro__discount__text">
        <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
      </div>
    </div>
  )
}

export default IntroDiscount
