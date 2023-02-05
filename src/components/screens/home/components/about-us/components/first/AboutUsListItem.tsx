import React from 'react'

interface IProps {
  title: string
  text: string
  iconUrl: string
}

const AboutUsListItem = ({ title, text, iconUrl }: IProps) => {
  return (
    <div className="about-us__list__item">
      <div className="about-us__list__item__bg"></div>
      <div className="about-us__list__item__icon__container">
        <img src={iconUrl} alt="icon" className="about-us__item__icon" />
      </div>
      <div className="about-us__list__item__context">
        <h2 className="about-us__list__item__title">{title}</h2>
        <p className="about-us__list__item__text">{text}</p>
      </div>
    </div>
  )
}

export default AboutUsListItem
