import React, { useCallback } from 'react'

export const useScroll = (
  headerElement: HTMLHeadingElement | null
) => {
  const scroll = useCallback((targetElement: HTMLElement) => {
    const offset = headerElement?.clientHeight ?? 0
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = targetElement.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }, [headerElement])

  return { scroll }
}
