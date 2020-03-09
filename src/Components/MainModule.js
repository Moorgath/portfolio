import React from 'react';
import './MainModule.sass';
import ContentModule from './ContentModule'
import AsideModule from './AsideModule'

const MainModule = () => (
    <main>
        <ContentModule></ContentModule>
        <AsideModule></AsideModule>
    </main>
)

export default MainModule