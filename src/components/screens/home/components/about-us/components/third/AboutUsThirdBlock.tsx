import React from 'react'
import AboutUsThirdLeftColumn from './AboutUsThirdLeftColumn'
import AboutUsThirdRightColumn from './AboutUsThirdRightColumn'

const AboutUsThirdBlock = () => {
  return (
    <div className="about-us__block">
      <div className="container">
        <div className="about-us__row">
          <AboutUsThirdLeftColumn />
          <AboutUsThirdRightColumn />
        </div>
      </div>
    </div>
  )
}

export default AboutUsThirdBlock
