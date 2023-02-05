import React, { useEffect, useState } from 'react'

interface IProps {
  children: JSX.Element | JSX.Element[] | undefined
  className?: string
  amplitude: number
  speed: number
  initialStep: number
}

const FloatingElement = ({
  children,
  className,
  amplitude,
  speed,
  initialStep = 0,
}: IProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let interval: number
    let angle = initialStep
    const time = 1000 / 60

    interval = setInterval(() => {
      const delta = time / 1000

      const x = Math.sin(angle) * amplitude
      const y = Math.cos(angle) * amplitude

      angle += delta * speed
      if (angle >= 360) {
        angle = 0
      }

      setPosition({ x, y })
    }, time)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [speed, amplitude, initialStep])

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default FloatingElement
