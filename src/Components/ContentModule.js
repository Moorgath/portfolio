import React from 'react';
import './ContentModule.sass';
import html5 from './icons/icons8-html-100.png'
import css3 from './icons/icons8-css3-100.png'
import sass from './icons/icons8-sass-100.png'
import javascript from './icons/icons8-javascript-100.png'
import jquery from './icons/icons8-jquery-100.png'
import react from './icons/icons8-react-100.png'
import nodejs from './icons/icons8-nodejs-100.png'
import git from './icons/icons8-git-100.png'
import figma from './icons/icons8-figma-100.png'
import {Route, Switch, withRouter} from 'react-router-dom'

const handleHover = e => {
    console.log(e.target)
    const div = document.createElement('span')
    div.classList.add('TechInfo')
    div.innerText = 'DIV'
    document.body.appendChild(div)
}

const handleDel = e => {
    const div = document.querySelector('span.TechInfo')
    document.body.removeChild(div)
}

const about = () => { 
    return (
    <React.Fragment>
    <h3>Welcome on my page!</h3>
    <span>
        I am a junior web-developer, starting my journey with IT.
        On my page you will find projects which I've already done, and also technologies which I know so far.
        In case you would see me in my team, feel free to contact.
    </span>
    </React.Fragment>
)}

const technologies = () => { 
    return (
    <React.Fragment>
    <h3>TECHNOLOGIES</h3>
    <div className='tech'>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={html5} alt='html5'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={css3} alt='css3'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={sass} alt='sass'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={javascript} alt='javascript'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={jquery} alt='jquery'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={react} alt='react'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={nodejs} alt='nodejs'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={git} alt='git'/>
        <img onMouseOut={handleDel} onMouseOver={handleHover} src={figma} alt='figma'/>
    </div>
    </React.Fragment>
)}

const projects = () => { 
    return (
    <React.Fragment>
    <h3>PROJECTS</h3>
    <span>
        Portfolio, strona o bananie
    </span>
    </React.Fragment>
)}

const contact = () => { 
    return (
    <React.Fragment>
    <h3>CONTACT</h3>
    <span>
        LinkedIn, telefon szwajcarski
    </span>
    </React.Fragment>
)}

const ContentModule = () => (
    <section className="mainContent">
    <Switch>
        <Route exact path='/' component={about}></Route>
        <Route path='/about' component={about}></Route>
        <Route path='/technologies' component={technologies}></Route>
        <Route path='/projects' component={projects}></Route>
        <Route path='/contact' component={contact}></Route>
    </Switch>
    </section>
)

export default withRouter(ContentModule)