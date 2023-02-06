import React from 'react'
import { Data } from './NavigationData'
import NavigationLink from './NavigationLink'
import { useHeaderNavigation } from '../models/headerNavigationContext'
import classNames from 'classnames'
import { useNavigationActive } from '../models/useNavigationActive'
import { useScroll } from '../models/useScroll'

const NavigationBar = () => {
  const { isShow } = useHeaderNavigation()
  const { active } = useNavigationActive('Home')
  const { scroll } = useScroll(
    document.querySelector<HTMLHeadingElement>('.header')
  )

  const onClickHandle = (label: string) => {
    if (label === active) {
      return
    }

    document.querySelectorAll<HTMLElement>('[data-scroll]').forEach((e) => {
      const value = e.dataset['scroll'] ?? ''

      if (value === label) {
        scroll(e)
      }
    })
  }

  return (
    <nav className={classNames('nav', { show: isShow })}>
      <ul className="nav__list">
        {Data.map((e, i) => (
          <NavigationLink
            key={e.label}
            label={e.label}
            isActive={active === e.label}
            onClick={onClickHandle}
          />
        ))}
      </ul>
    </nav>
  )
}

export default NavigationBar
