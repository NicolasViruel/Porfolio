import React from 'react'
import './SkillCard.css'

const SkillCard = ( { title, iconUrl, isActive, onclick} ) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
        onclick= {() => onclick()}
    >
    <div className='skill-icon'>
        <img src={iconUrl} alt={title} className='iconos' />
    </div>

    <span>{title}</span>
        
    </div>
  )
}

export default SkillCard