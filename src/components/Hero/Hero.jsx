import React from 'react'
import './Hero.css'
import reacLogo from '../../assets/image/reactjs-icon.svg'
import perfil from '../../assets/image/imagenPerfil.jpg'
import angular from '../../assets/image/angular-icon.svg'
import nest from '../../assets/image/nestjs-icon.svg'
import nodejs from '../../assets/image/nodejs-icon.svg'
import javascript from '../../assets/image/javascript.svg'
import typescrip from '../../assets/image/typescrip.svg'
import html from '../../assets/image/w3_html5-icon.svg'
import mongodb from '../../assets/image/mongodb-icon.svg'
import css from '../../assets/image/w3_css-icon.svg'


const Hero = () => {


  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate For Develop Full Stack | Transforming Ideas Into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>
        <div className='hero-img'>
            
            <div>
                
                
                <div className='tech-icon-react'>
                    <img src={nodejs} alt="nodejs" title="Node.js" />
                    
                </div>
                
                <img src={perfil} className='perfil' alt="imagen de perfil" />
                <div className='tech-icon-react'>
                    <img src={nodejs} alt="nodejs" title="Node.js" />
                </div>
            </div>
        <div>
            <div className='tech-icon'>
                <img src={nest} alt="nestjs" />
            </div>
            <div className='tech-icon'>
                <img src={angular} alt="angular" />
            </div>
            <div className='tech-icon'>
                <img className='react' src={reacLogo} alt="Logo React" />
            </div>
            <div className='tech-icon'>
                <img src={typescrip} alt="TypeScript" />
            </div>
            {/* <div className='tech-icon'>
                <img src={css} alt="css" />
            </div> */}
            <div className='tech-icon'>
                <img className='javascript' src={javascript} alt="css" />
            </div>
        </div>

        </div>
    </section>
  )
}


export default Hero