import React from 'react'
import AboutUsFirstBlock from './components/first/AboutUsFirstBlock'
import AboutUsSecondBlock from './components/second/AboutUsSecondBlock'
import AboutUsThirdBlock from './components/third/AboutUsThirdBlock'

const AboutUs = () => {
  return (
    <div className="about-us" data-scroll="About Us">
      <AboutUsFirstBlock />
      <AboutUsSecondBlock />
      <AboutUsThirdBlock />
    </div>
  )
}

export default AboutUs
