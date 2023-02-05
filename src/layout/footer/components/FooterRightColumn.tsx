import React from 'react'
import { FooterLinkData } from './FooterLinkData'
import FooterLinkList from './FooterLinkList'

const FooterRightColumn = () => {
  return (
    <div className="footer__column right">
      {FooterLinkData.map((e) => (
        <FooterLinkList key={e.label} label={e.label} links={e.links} />
      ))}
    </div>
  )
}

export default FooterRightColumn
