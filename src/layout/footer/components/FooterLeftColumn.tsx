import React from 'react'
import Logo from '../../../ui/Logo'

const FooterLeftColumn = () => {
  return (
    <div className="footer__column left">
      <div className="footer__logo">
        <Logo isBig={true} />
      </div>
      <div className="footer__text">
        A new way to make the payments easy, reliable and secure.
      </div>
    </div>
  )
}

export default FooterLeftColumn
