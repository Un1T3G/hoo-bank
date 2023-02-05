import react, { useState } from 'react'
import { useResize } from '../../../hooks/useResize'
import { useHeaderNavigation } from '../models/headerNavigationContext'
import classNames from 'classnames'

const Hamburger = () => {
  const { isShow, setIsShow } = useHeaderNavigation()

  const handleOnClick = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <button onClick={handleOnClick} className={classNames('hamburger', { active: isShow })}>
      <span></span>
    </button>
  )
}

export default Hamburger
