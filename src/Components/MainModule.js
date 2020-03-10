import React from 'react';
import './MainModule.sass';
import ContentModule from './ContentModule'
import AsideModule from './AsideModule'

const MainModule = (props) => (
    <main>
        <ContentModule></ContentModule>
        <AsideModule txt={props.txt}></AsideModule>
    </main>
)

export default MainModule