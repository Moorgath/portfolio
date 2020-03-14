import React from 'react'
import './technologies.sass'
import html5 from './icons/html.png'
import css3 from './icons/css3.png'
import sass from './icons/sass.png'
import javascript from './icons/js.png'
import jquery from './icons/jquery.png'
import react from './icons/react.png'
import nodejs from './icons/nodejs.png'
import git from './icons/git.png'
import figma from './icons/figma.png'
import s1 from './icons/1.png'
import s2 from './icons/2.png'
import s3 from './icons/3.png'
import s4 from './icons/4.png'
import s5 from './icons/5.png'

const spanStyle = {
    'font-size': '0.7em',
    'display': 'block',
    'width': '100%',
    'text-align': 'center',
}

const handleHover = e => {
    console.log(e.target)
    //{const div = document.createElement('span')}
    const div = document.querySelector('span.techZero')
    div.classList.add('TechInfo')
    div.classList.remove('techZero')

    switch(e.target.alt) {
        case 'html5':
            div.innerHTML = `
                <strong>HTML5</strong></br>
                <img src=${s5} alt='html5' />
            `
        break;

        case 'css3':
            div.innerHTML = `
                <strong>CSS3</strong></br>
                <img src=${s4} alt='css3' />
            `
        break;
        
        case 'sass':
            div.innerHTML = `
                <strong>Sass</strong></br>
                <img src=${s4} alt='sass' />
            `
        break;

        case 'javascript':
            div.innerHTML = `
                <strong>JavaScript</strong></br>
                <img src=${s4} alt='javascript' />
            `
        break;

        case 'jquery':
            div.innerHTML = `
                <strong>jQuery</strong></br>
                <img src=${s3} alt='jquery' />
            `
        break;

        case 'react':
            div.innerHTML = `
                <strong>React</strong></br>
                <img src=${s4} alt='react' />
            `
        break;

        case 'nodejs':
            div.innerHTML = `
                <strong>Node.js</strong></br>
                <img src=${s2} alt='nodejs' />
            `
        break;

        case 'git':
            div.innerHTML = `
                <strong>Git</strong></br>
                <img src=${s3} alt='git' />
            `
        break;

        case 'figma':
            div.innerHTML = `
                <strong>Figma</strong></br>
                <img src=${s2} alt='figma' />
            `
        break;

        default:
        break;
    }
    
}

const handleDel = e => {
    const div = document.querySelector('span.TechInfo')
    //{document.body.removeChild(div)}
    div.classList.remove('TechInfo')
    div.classList.add('techZero')
    div.innerHTML = ''
}

const technologies = () => { 
    return (
    <React.Fragment>
    <h3>TECHNOLOGIES</h3>
    <span className="techZero"></span>
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
    <span style={spanStyle}>All icons downloaded from <a target="_blank" href="https://icons8.com/">Icons8.com</a></span> 
    </React.Fragment>
)}

export default technologies