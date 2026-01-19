import React from 'react'
import './Mobile.css'
import Logo from "../../../assets/image/logo1.jpg"

const Mobile = ( {isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick = {toggleMenu}
    >
        <div className='mobile-menu-container'>
            <img className="logo" src={Logo} alt="" />
            <ul>
                <li>
                    <a className='menu-item' href="#inicio">Inicio</a>
                </li>
                <li>
                    <a className='menu-item' href="#habilidades">Habilidades</a>
                </li>
                <li>
                    <a className='menu-item' href="#experiencia">Experiencia</a>
                </li>
                <li>
                    <a className='menu-item' href="#proyectos">Proyectos</a>
                </li>
                <li>
                    <a className='menu-item' href="#contacto">Contact</a>
                </li>

                <button className='contact-btn' onClick={() =>{} }>Contratame</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Mobile