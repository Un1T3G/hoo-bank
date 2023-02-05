import React from 'react'

interface IProps {
  children: string | undefined
  className?: string
}

const Text = ({ children, className }: IProps) => {
  return <p className={`text${className ? ` ${className}` : ''}`}>{children}</p>
}

export default Text
