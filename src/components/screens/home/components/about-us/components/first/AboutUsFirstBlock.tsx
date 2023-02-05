import React from 'react'
import AboutUsFirstLeftColumn from './AboutUsFirstLeftColumn'
import AboutUsRightColumn from './AboutUsFirstRightColumn'

const AboutUsFirstBlock = () => {
  return (
    <div className="about-us__block">
      <div className="container">
        <div className="about-us__row">
          <AboutUsFirstLeftColumn />
          <AboutUsRightColumn />
        </div>
      </div>
    </div>
  )
}

export default AboutUsFirstBlock
