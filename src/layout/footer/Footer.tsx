import React from 'react'
import FooterLeftColumn from './components/FooterLeftColumn'
import FooterRightColumn from './components/FooterRightColumn'
import FooterSocials from './components/FooterSocials'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row top">
          <FooterLeftColumn />
          <FooterRightColumn />
        </div>
        <div className="footer__row bottom">
          <div className="footer__copy-right-text">
            <span>Copyright</span> 2021 HooBank. All Rights Reserved.
          </div>
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
}

export default Footer
