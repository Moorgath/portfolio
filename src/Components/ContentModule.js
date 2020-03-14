import React from 'react'
import Technologies from'./technologies'
import Projects from'./projects'
import About from'./about'
import Contact from'./contact'
import './ContentModule.sass'
import {Route, Switch, withRouter} from 'react-router-dom'

const ContentModule = (props) => (
    <section className="mainContent">
    <Switch>
        <Route 
            exact path='/' 
            render = {text => <About lang={props.lang}></About>}>
        </Route>
        <Route 
            path='/about' 
            render = {text => <About lang={props.lang}></About>}>
        </Route>
        <Route 
            path='/technologies' 
            render = {text => <Technologies lang={props.lang}></Technologies>}>
        </Route>
        <Route 
            path='/projects' 
            render = {text => <Projects lang={props.lang}></Projects>}>
        </Route>
        <Route 
            path='/contact' 
            render = {text => <Contact lang={props.lang}></Contact>}>
        </Route>
    </Switch>
    </section>
)

export default withRouter(ContentModule)