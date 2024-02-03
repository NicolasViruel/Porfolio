import React from 'react'
import './ConctactInfoCard.css'

const ConctactInfoCard = ( { iconUrl, text }) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img className='contact-icon' src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

export default ConctactInfoCard