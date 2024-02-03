import React from 'react'
import './ContactMe.css'
import ConctactInfoCard from './ContactInfoCard/ConctactInfoCard'
import mailIcon from '../../assets/mail.png';
import gitIcon from '../../assets/github.png';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contactame</h5>
        <div className='contact-content'>
            <div style={{ flex: 1 }}>
            <ConctactInfoCard
            iconUrl={mailIcon}
            text= "nicolasviruel@gmail.com"
            />
            <ConctactInfoCard
            iconUrl= {gitIcon}
            text= "https://github.com/NicolasViruel/NicolasViruel"
            />
            </div>
            
            <div style={{ flex: 1 }}>
                <ContactForm/>
            </div>
        </div>

    </section>
  )
}

export default ContactMe