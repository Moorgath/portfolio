import React from 'react'
import './projects.sass'

let header = ''

const projects = (props) => { 
    if (props.lang === 'en') header='Projects'
    else if (props.lang === 'pl') header='Projekty'
    else if (props.lang === 'de') header='Projekte'

    return (
    <React.Fragment>
    <h3>{header}</h3>
    <span>
        Coming soon :) 
    </span>
    </React.Fragment>
)}

export default projects