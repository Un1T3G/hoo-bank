import React from 'react'
import { FooterSocialData } from './FooterSocialData'
import FooterSocialLink from './FooterSocialLink'

const FooterSocials = () => {
  return (
    <div className="footer__social">
      {FooterSocialData.map((e, i) => (
        <FooterSocialLink key={i} location={e.location} iconUrl={e.iconUrl} />
      ))}
    </div>
  )
}

export default FooterSocials
