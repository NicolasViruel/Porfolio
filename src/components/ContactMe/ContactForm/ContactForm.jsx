import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form action="">
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='Nombre' />
                <input type="text" name='lastname' placeholder='Apellido' />
            </div>
            
            <input type="text" name='email' placeholder='Email' />
            <textarea name="message" type="text" placeholder='Mensaje' rows={3}/>

            <button>Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm