import React from 'react'
import Title from '../../../../../../../ui/Title'
import Text from '../../../../../../../ui/Text'
import Button from '../../../../../../../ui/Button'


const AboutUsFirstLeftColumn = () => {
  return (
    <div className="about-us__column left list">
      <Title className="about-us__title">
        You do the business, we’ll handle the money.
      </Title>
      <Text className="about-us__text">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </Text>
      <Button label="Get Started" className="about-us__btn" />
    </div>
  )
}

export default AboutUsFirstLeftColumn
