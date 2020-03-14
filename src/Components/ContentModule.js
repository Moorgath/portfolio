import React from 'react';
import technologies from'./technologies'
import './ContentModule.sass';
import {Route, Switch, withRouter} from 'react-router-dom'

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