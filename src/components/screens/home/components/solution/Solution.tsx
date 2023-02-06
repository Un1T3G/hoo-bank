import React from 'react'
import SolutionLeftColumn from './components/SolutionLeftColumn'
import SolutionRightColumn from './components/SolutionRightColumn'

const Solution = () => {
  return (
    <div className="solution" data-scroll="Solution">
      <div className="container">
        <div className="solution__row">
          <SolutionLeftColumn />
          <SolutionRightColumn />
        </div>
      </div>
    </div>
  )
}

export default Solution
