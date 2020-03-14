import React from 'react'
import './FooterModule.sass'

const classToggle = () => {
    document.querySelector('#foot').classList.toggle('fontcolor')
}

setInterval(classToggle,500)

const FooterModule = () => (
    <footer>&copy; Copyright 2020, Wojciech Fydrych<span id="foot" className="fontcolor">_</span></footer>
)

export default FooterModule