import React from 'react'

interface IProps {
  label: string
  className?: string
}

const Button = ({ label, className }: IProps) => {
  return (
    <button className={`btn${className ? ` ${className}` : ''}`}>
      {label}
    </button>
  )
}

export default Button
