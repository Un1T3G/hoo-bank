import React from 'react'

interface IProps {
  url: string
}

const FeaturesPartner = ({ url }: IProps) => {
  return (
    <div className="features__partner">
      <img src={url} alt="partner" />
    </div>
  )
}

export default FeaturesPartner
