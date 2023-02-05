import React from 'react'
import FooterLinkItem from './FooterLinkItem'

interface IProps {
  label: string
  links: { label: string }[]
}

const FooterLinkList = ({ label, links }: IProps) => {
  return (
    <div className="footer__link__list__container">
      <div className="footer__link__list__label">{label}</div>
      <ul className="footer__link__list">
        {links.map((e) => (
          <FooterLinkItem key={e.label} label={e.label} />
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkList
