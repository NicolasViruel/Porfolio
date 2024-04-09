// export default ContactForm
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // Estados para controlar el contenido de los campos
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='contact-form-content'>
        <form action="">
            <div className='name-container'>
                <input 
                  type="text" 
                  name='firstname' 
                  placeholder='Nombre'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={firstName ? 'filled' : ''} // Agregamos la clase 'filled' si hay contenido
                />
                <input 
                  type="text" 
                  name='lastname' 
                  placeholder='Apellido' 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={lastName ? 'filled' : ''} // Agregamos la clase 'filled' si hay contenido
                />
            </div>
            
            <input 
              type="text" 
              name='email' 
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={email ? 'filled' : ''} // Agregamos la clase 'filled' si hay contenido
            />
            <textarea 
              name="message" 
              type="text" 
              placeholder='Mensaje' 
              rows={3} 
              style={{ resize: 'none' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={message ? 'filled' : ''} // Agregamos la clase 'filled' si hay contenido
            />

            <button>Enviar</button>
        </form>
    </div>
  );
}

export default ContactForm;
