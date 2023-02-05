import React from 'react'
import { CounterData } from './components/CounterData'
import CounterItem from './components/CounterItem'

const Counter = () => {
  return (
    <div className="counter">
      <div className="container">
        <div className="counter__row">
          {Array.from(Array(CounterData.length * 2 - 1).keys()).map((i) => {
            const { label, text } = CounterData[Math.round(i / 2)]

            if (i % 2 == 0) {
              return <CounterItem key={i} label={label} text={text} />
            } else {
              return <div key={i} className="counter__divider"></div>
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Counter
