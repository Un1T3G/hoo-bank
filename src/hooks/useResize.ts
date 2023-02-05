import React, { useEffect, useState } from 'react'

interface IProps {
  value: number
  target: 'width' | 'height'
  onMax: boolean
  callback: () => void
  inverseCallback: () => void
}

export const useResize = ({
  value,
  target,
  onMax,
  callback,
  inverseCallback,
}: IProps) => {
  useEffect(() => {
    let called = false

    const handleOnResize = () => {
      const v = target === 'width' ? window.innerWidth : window.innerHeight

      if (onMax) {
        if (v >= value && !called) {
          callback()
          called = true
        } else if (v < value && called) {
          inverseCallback()
          called = false
        }
      } else {
        if (v <= value && !called) {
          callback()
          called = true
        } else if (v > value && called) {
          inverseCallback()
          called = false
        }
      }
    }

    window.addEventListener('resize', handleOnResize)

    callback()

    return () => {
      window.removeEventListener('resize', handleOnResize)
    }
  }, [])
}
