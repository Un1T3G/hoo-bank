import classNames from 'classnames'
import React from 'react'

interface IProps {
  label: string
  isActive: boolean
  onClick: (labe: string) => void
}

const NavigationLink = ({ label, isActive, onClick }: IProps) => {
  return (
    <li className="nav__item">
      <a
        onClick={() => onClick(label)}
        className={classNames('nav__btn', { active: isActive })}
      >
        {label}
      </a>
    </li>
  )
}

export default NavigationLink
