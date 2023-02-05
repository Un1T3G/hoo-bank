import React from 'react'

interface IProps {
  label: string
  text: string
}

const CounterItem = ({ label, text }: IProps) => {
  return (
    <div className="counter__item">
      <span className="counter__item__label">{label}</span>
      <span className="counter__item__text">{text}</span>
    </div>
  )
}

export default CounterItem
