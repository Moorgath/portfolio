import React from 'react'
import './contact.sass'
import mobile from './icons/mobile.png'
import email from './icons/email.png'
import linkedin from './icons/linkedin.png'
import whatsapp from './icons/whatsapp.png'
import github from './icons/github.png'

let header = ''

const contact = (props) => { 
    if (props.lang === 'en') header = 'Contact'
    else if (props.lang === 'pl') header = 'Kontakt'
    else if (props.lang === 'de') header = 'Kontakt'

    return (
    <React.Fragment>
    <h3>{header}</h3>
    <div className='contact'>
        <span className='cell'>
            <a href="mailto:wfydrych@gmail.com"><img src={email} alt='email' /> <span className='text'>wfydrych@gmail.com </span></a>
        </span>
        <span className='cell'>
            <a target="_blank" href="https://www.linkedin.com/in/wojciech-fydrych-26153919a/"><img src={linkedin} alt='linkedin' /> <span className='text'>Wojciech Fydrych</span></a>
        </span>
        <span className='cell'>
            <img src={whatsapp} alt='whatsapp' /> <span className='text'>+41779542330</span>
        </span>
        <span className='cell'>
            <a target="_blank" href="https://github.com/wfydrych"><img src={github} alt='github' /> <span className='text'>wfydrych</span></a>
        </span>
        <span className='cell'>
            <img src={mobile} alt='mobile' /> <span className='text'>+48791240333</span>
        </span>
        <span className='cell'>
            <img src={mobile} alt='mobile' /> <span className='text'>+41779542330</span>
        </span>
    </div>
    <span className='spanStyle'>All icons downloaded from <a target="_blank" href="https://icons8.com/">Icons8.com</a></span>
    </React.Fragment>
)}

export default contact