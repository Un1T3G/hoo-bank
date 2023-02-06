import React from 'react'
import IntroDiscount from './components/IntroDiscount'
import IntroTitle from './components/IntroTitle'
import Text from '../../../../../ui/Text'
import IntroRobotHand from './components/IntroRobotHand'

const Intro = () => {
  return (
    <div className="intro" data-scroll="Home">
      <div className="container">
        <div className="intro__row">
          <IntroDiscount />
          <IntroTitle />
          <Text className='intro__text'>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </Text>
        </div>
      </div>
      <IntroRobotHand />
    </div>
  )
}

export default Intro
