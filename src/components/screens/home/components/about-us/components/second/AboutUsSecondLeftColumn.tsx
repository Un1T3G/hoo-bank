import React from 'react'
import Title from '../../../../../../../ui/Title'
import Text from '../../../../../../../ui/Text'
import Button from '../../../../../../../ui/Button'
import { apple, google } from '../../../../../../../assets/img'

const AboutUsSecondLeftColumn = () => {
  return (
    <div className="about-us__column left">
      <Title className="about-us__title">
        Easily control your billing & invoicing.
      </Title>
      <Text className="about-us__text">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </Text>
      <div className="about-us__link__row">
        <button className="about-us__link__btn">
          <img src={google} alt="play-market" />
        </button>
        <button className="about-us__link__btn">
          <img src={apple} alt="app-store" />
        </button>
      </div>
    </div>
  )
}

export default AboutUsSecondLeftColumn
