import React from 'react'
import './HeaderModule.sass'
import logo from './icons/logo.png'

const HeaderModule = () => (
    <header>
        <img src={logo} alt='logo' class='logo'/>
    </header>
)

export default HeaderModule