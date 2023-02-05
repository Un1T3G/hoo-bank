import React from 'react'
import FeaturesHeader from './components/FeaturesHeader'
import FeaturesCommentList from './components/FeaturesCommentList'
import FeaturesPartnerList from './components/FeaturesPartnerList'

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="features__row">
          <FeaturesHeader />
          <FeaturesCommentList/>
          <FeaturesPartnerList/>
        </div>
      </div>
    </div>
  )
}

export default Features
