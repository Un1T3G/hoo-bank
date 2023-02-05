import React from 'react'

interface IProps {
  location: string
  iconUrl: string
}

const FooterSocialLink = ({ location, iconUrl }: IProps) => {
  return (
    <a href={location} className="footer__social__link">
      <img src={iconUrl} alt="icon" />
    </a>
  )
}

export default FooterSocialLink
