import React from 'react'
import {
  card,
  payment01,
  payment02,
  payment03,
} from '../../../../../../../assets/img'

const AboutUsThirdRightColumn = () => {
  return (
    <div className="about-us__column right">
      <div className="about-us__payments">
        <img className="a" src={payment01} alt="payment" />
        <img className="b" src={payment02} alt="payment" />
        <img className="c" src={payment03} alt="payment" />
      </div>
    </div>
  )
}

export default AboutUsThirdRightColumn
