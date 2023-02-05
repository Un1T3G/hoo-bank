import React from 'react'
import { logo } from '../assets/img'
import classNames from 'classnames'

interface IProps {
  isBig?: boolean
}

const Logo = ({ isBig }: IProps) => {
  return (
    <img
      src={logo}
      alt="logo"
      className={classNames('logo', { 'is-big': isBig })}
    />
  )
}

export default Logo
