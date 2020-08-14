import React from 'react'
import './AsideModule.sass'
import HeaderModule from './HeaderModule'
import FooterModule from './FooterModule'
import {NavLink, withRouter} from 'react-router-dom'

const AsideModule = (props) => 
    (
    <React.Fragment>
    <HeaderModule></HeaderModule>
    <nav className="navComp">
        <ul>
        <NavLink to='/about'><li><i className="icon-user"/> {props.txt.about}</li></NavLink>
        <NavLink to='/technologies'><li><i className="icon-cog-alt"/> {props.txt.tech}</li></NavLink>
        <NavLink to='/projects'><li><i className="icon-picture"/> {props.txt.proj}</li></NavLink>
        <NavLink to='/contact'><li><i className="icon-mail-alt"/> {props.txt.cont}</li></NavLink>
        </ul>
    </nav>
    <nav className="navMobile">
        <NavLink to='/about'><i className="icon-user"/></NavLink>
        <NavLink to='/technologies'><i className="icon-cog-alt"/></NavLink>
        <NavLink to='/projects'><i className="icon-picture"/></NavLink>
        <NavLink to='/contact'><i className="icon-mail-alt"/></NavLink>
    </nav>
    <FooterModule></FooterModule>
    </React.Fragment>
)

export default withRouter(AsideModule)