import React, { useRef } from 'react'
import Logo from '../../ui/Logo'
import NavigationBar from './components/NavigationBar'
import Hamburger from './components/Hamburger'
import './Header.scss'
import { HeaderNavigationProvider } from './models/headerNavigationContext'
import useHeaderPosition from './models/useHeaderPosition'
import classNames from 'classnames'

const Header = () => {
  const ref = useRef<HTMLHeadingElement>(null)
  const { isFixed } = useHeaderPosition(ref)

  return (
    <HeaderNavigationProvider>
      <header ref={ref} className={classNames('header', { fixed: isFixed })}>
        <div className="container">
          <div className="header__row">
            <Logo />
            <NavigationBar />
            <Hamburger />
          </div>
        </div>
      </header>
    </HeaderNavigationProvider>
  )
}

export default Header
