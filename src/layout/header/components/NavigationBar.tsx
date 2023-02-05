import React from 'react'
import { Data } from './NavigationData'
import NavigationLink from './NavigationLink'
import { useHeaderNavigation } from '../models/headerNavigationContext'
import classNames from 'classnames'

const NavigationBar = () => {
  const { isShow } = useHeaderNavigation()

  return (
    <nav className={classNames('nav', { show: isShow })}>
      <ul className="nav__list">
        {Data.map((e, i) => (
          <NavigationLink key={e.label} label={e.label} isActive={i === 0} />
        ))}
      </ul>
    </nav>
  )
}

export default NavigationBar
