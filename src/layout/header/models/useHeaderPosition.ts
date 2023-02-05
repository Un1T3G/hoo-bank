import React, { RefObject, useEffect, useState } from 'react'

const useHeaderPosition = (ref: RefObject<HTMLElement>) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const height = ref.current?.clientHeight

      if (height) {
        if (window.scrollY > height) {
          setIsFixed(true)
        } else {
          setIsFixed(false)
        }
      }
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { isFixed }
}

export default useHeaderPosition
