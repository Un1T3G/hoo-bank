import React from 'react'
import Title from '../../../../../../ui/Title'
import Text from '../../../../../../ui/Text'

const FeaturesHeader = () => {
  return (
    <div className="features__header">
      <div className="features__header__column left">
        <Title className="features__title">
          What people are saying about us
        </Title>
      </div>
      <div className="features__header__column right">
        <Text className="features__text">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </Text>
      </div>
    </div>
  )
}

export default FeaturesHeader
