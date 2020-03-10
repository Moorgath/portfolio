import React from 'react';
import './AsideModule.sass';
import {NavLink, withRouter} from 'react-router-dom'

const AsideModule = (props) => 
    (
    <nav>
        <ul>
            <NavLink to='/about'><li><i className="icon-user"/> {props.txt.about}</li></NavLink>
            <NavLink to='/technologies'><li><i className="icon-cog-alt"/> {props.txt.tech}</li></NavLink>
            <NavLink to='/projects'><li><i className="icon-picture"/> {props.txt.proj}</li></NavLink>
            <NavLink to='/contact'><li><i className="icon-mail-alt"/> {props.txt.cont}</li></NavLink>
        </ul>
    </nav>
)

export default withRouter(AsideModule)