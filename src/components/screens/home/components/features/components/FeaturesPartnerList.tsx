import React from 'react'
import { FeaturesPartnersData } from './FeaturesPartnersData'
import FeaturesPartner from './FeaturesPartner'

const FeaturesPartnerList = () => {
  return (
    <div className="features__partner__list">
      {FeaturesPartnersData.map((e, i) => (
        <FeaturesPartner key={i} url={e.url} />
      ))}
    </div>
  )
}

export default FeaturesPartnerList
