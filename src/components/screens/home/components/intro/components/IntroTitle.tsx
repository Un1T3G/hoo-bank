import React from 'react'
import IntroButton from './IntroButton'

const IntroTitle = () => {
  return (
    <h1 className="intro__title">
      <span>The Next</span>
      <span className="colored">Generation</span>
      <span>Payment Method.</span>
      <IntroButton/>
    </h1>
  )
}

export default IntroTitle
