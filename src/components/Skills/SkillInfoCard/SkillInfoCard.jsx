import React from 'react'
import './SkillInfoCard.css'

const SkillInfoCard = ( {heading, skills}) => {
  return (
      <div className='skills-info-card'>
        <h5>{heading}</h5>

        <div className='skill-info-content'>
            {/* {skills.map((item, index) => ( */}
            {skills && skills.map((item, index) => (
                <React.Fragment key = { `skill_${index}` }>
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className='skill-progress-bg'>
                        <div className='skill-progress' style={{width: item.percentage}}>
                        
                        </div>
                    </div>
                </React.Fragment>
            ))}

        </div>

    </div>
  )
}

export default SkillInfoCard