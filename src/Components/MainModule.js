import React from 'react'
import './MainModule.sass'
import ContentModule from './ContentModule'
import AsideModule from './AsideModule'

const MainModule = (props) => (
    <main>
        <AsideModule txt={props.txt}></AsideModule>
        <ContentModule lang={props.txt.lang}></ContentModule>
    </main>
)

export default MainModule