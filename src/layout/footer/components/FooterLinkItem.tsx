import React from 'react'

interface IProps{
    label: string
}

const FooterLinkItem = ({label} : IProps) => {
    return <a href="#" className="footer__link__list__item">{label}</a>
}

export default FooterLinkItem