import classNames from 'classnames'
import React from 'react'

interface IProps {
  label: string
  isActive: boolean
}

const NavigationLink = ({ label, isActive }: IProps) => {
  return (
    <li className="nav__item">
      <a href="#" className={classNames('nav__btn', {active: isActive})}>
        {label}
      </a>
    </li>
  )
}

export default NavigationLink
