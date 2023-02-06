import React, {useState, useEffect} from "react";

export const useNavigationActive = (initialValue: string) => {
    const [active, setActive] = useState(initialValue)

    useEffect(() => {
      const sections = document.querySelectorAll<HTMLElement>('[data-scroll]');
  
      const onScroll = () => {
        const scrollY = window.scrollY
  
        sections.forEach(e => {
          const value = e.dataset['scroll']?.toString()
  
          if (scrollY >= e.offsetTop && scrollY <= e.offsetTop + e.clientHeight && active !== value){
            setActive(value ?? '')
          }
        })
      }
  
      window.addEventListener('scroll', onScroll)
  
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [active])

    return {active}
}