import React from 'react'

interface IProps {
  children: string | undefined
  className?: string
}

const Title = ({ children, className }: IProps) => {
  return (
    <h1 className={`title${className ? ` ${className}` : ''}`}>{children}</h1>
  )
}

export default Title
