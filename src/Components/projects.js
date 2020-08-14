import React from 'react'
import './projects.sass'
import weather from './icons/weather.png'
import todo from './icons/todo.png'
import habit from './icons/habit.png'
import krzys from './icons/krzys.png'

let header = ''

const projects = (props) => { 
    if (props.lang === 'en') header='Projects'
    else if (props.lang === 'pl') header='Projekty'
    else if (props.lang === 'de') header='Projekte'

    return (
    <React.Fragment>
    <h3>{header}</h3>
    <div className='projects'>
        <span className='cell'>
            <a target="_blank" href="https://wfydrych.github.io/WeatherApp/"><img src={weather} alt='weather' /> <span className='text'>Weather App</span></a>
        </span>
        <span className='cell'>
            <a target="_blank" href="https://to-do-list-mobile.herokuapp.com/"><img src={todo} alt='todoapp' /> <span className='text'>ToDoApp</span></a>
        </span>
        <span className='cell'>
            <img src={habit} alt='habittracker' /> <span className='text'>Habit Tracker (coming soon)</span>
        </span>
        <span className='cell'>
            <a target="_blank" href="https://guarded-fortress-34922.herokuapp.com/"><img src={krzys} alt='portfolio' /> <span className='text'>Portfolio (in progress)</span></a>
        </span>
    </div>
    </React.Fragment>
)}

export default projects