import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ( {details }) => {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <div className='work-duration'>
            {details.date}
        </div>

        <ul>
            {details.responsabilities.map((item, index) => {
                // Si el item es un objeto con link
                if (typeof item === 'object' && item.text) {
                    return (
                        <li key={index}>
                            {item.text}{' '}
                            {item.link && (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="experience-link"
                                >
                                    {item.linkText || 'Ver más'}
                                </a>
                            )}
                        </li>
                    );
                }
                // Si es un string simple
                return <li key={index}>{item}</li>;
            })}
        </ul>
    </div>
  )
}

export default ExperienceCard
