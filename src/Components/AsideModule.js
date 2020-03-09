import React from 'react';
import './AsideModule.sass';
import {NavLink, BrowserRouter} from 'react-router-dom'


const AsideModule = () => (
    <nav>
        <ul>
            <BrowserRouter>
            <NavLink to='/about'><li><i className="icon-user"/> O MNIE</li></NavLink>
            <NavLink to='/technologies'><li><i className="icon-cog-alt"/> TECHNOLOGIE</li></NavLink>
            <NavLink to='/projects'><li><i className="icon-picture"/> PROJEKTY</li></NavLink>
            <NavLink to='/contact'><li><i className="icon-mail-alt"/> KONTAKT</li></NavLink>
            </BrowserRouter>
        </ul>
    </nav>
)

export default AsideModule