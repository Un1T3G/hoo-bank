import React from 'react'
import { AboutUsListData } from './AboutUsListData'
import AboutUsListItem from './AboutUsListItem'

const AboutUsRightColumn = () => {
  return (
    <div className="about-us__column right list">
      {AboutUsListData.map((e, i) => (
        <AboutUsListItem
          key={i}
          title={e.title}
          text={e.text}
          iconUrl={e.iconUrl}
        />
      ))}
    </div>
  )
}

export default AboutUsRightColumn
