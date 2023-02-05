import React from 'react'
import AboutUsSecondLeftColumn from './AboutUsSecondLeftColumn'
import AboutUsSecondRightColumn from './AboutUsSecondRightColumn'

const AboutUsSecondBlock = () => {
  return (
    <div className="about-us__block">
      <div className="container">
        <div className="about-us__row">
          <AboutUsSecondLeftColumn />
          <AboutUsSecondRightColumn />
        </div>
      </div>
    </div>
  )
}

export default AboutUsSecondBlock
