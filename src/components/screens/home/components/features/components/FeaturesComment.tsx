import React from 'react'
import { quotes } from '../../../../../../assets/img'

interface IProps {
  text: string
  user: {
    name: string
    jobTitle: string
    iconUrl: string
  }
}

const FeaturesComment = ({ text, user }: IProps) => {
  return (
    <div className="features__comment">
      <div className="features__comment__bg"></div>
      <img src={quotes} alt="quotes" className="features__comment__img" />
      <p className="features__comment__text">{text}</p>
      <div className="features__comment__user">
        <img
          src={user.iconUrl}
          alt="avatar"
          className="features__comment__user__avatar"
        />
        <div className="features__comment__user__block">
          <div className="features__comment__user__name">{user.name}</div>
          <div className="features__comment__user__job-title">
            {user.jobTitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesComment
