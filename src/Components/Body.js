import React from 'react';
import HeaderModule from './HeaderModule'
import MainModule from './MainModule'
import FooterModule from './FooterModule'
import "./fontello/css/fontello.css"
import './Body.sass';

function Body() {
  return (
    <React.Fragment>
    <HeaderModule></HeaderModule>
    <MainModule></MainModule>
    <FooterModule></FooterModule>
    </React.Fragment>
  );
}

export default Body;
