import React from 'react'
import './contact.sass'
import mobile from './icons/mobile.png'
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import whatsapp from './icons/whatsapp.png'
import github from './icons/github.png'

const spanStyle = {
    'font-size': '0.7em',
    'display': 'block',
    'width': '100%',
    'text-align': 'center',
}

const contact = () => { 
    return (
    <React.Fragment>
    <h3>CONTACT</h3>
    <div className='contact'>
        <span className='cell'>
            <img src={email} alt='email' /> <span className='text'><a href="mailto:wfydrych@gmail.com">wfydrych@gmail.com</a> </span>
        </span>
        <span className='cell'>
            <img src={linkedin} alt='linkedin' /> <span className='text'><a target="_blank" href="https://www.linkedin.com/in/wojciech-fydrych-26153919a/">Wojciech Fydrych</a></span>
        </span>
        <span className='cell'>
            <img src={whatsapp} alt='whatsapp' /> <span className='text'>+41779542330</span>
        </span>
        <span className='cell'>
            <img src={github} alt='github' /> <span className='text'><a target="_blank" href="https://github.com/wfydrych">wfydrych</a></span>
        </span>
        <span className='cell'>
            <img src={mobile} alt='mobile' /> <span className='text'>+48791240333</span>
        </span>
        <span className='cell'>
            <img src={mobile} alt='mobile' /> <span className='text'>+41779542330</span>
        </span>
    </div>
    <span style={spanStyle}>All icons downloaded from <a target="_blank" href="https://icons8.com/">Icons8.com</a></span>
    </React.Fragment>
)}

export default contact