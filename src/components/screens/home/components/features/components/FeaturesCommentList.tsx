import React from 'react'
import { FeaturesCommentsData } from './FeaturesCommentsData'
import FeaturesComment from './FeaturesComment'

const FeaturesCommentList = () => {
  return (
    <div className="features__comment__list">
      {FeaturesCommentsData.map((e, i) => (
        <FeaturesComment key={i} text={e.text} user={e.user} />
      ))}
    </div>
  )
}

export default FeaturesCommentList
