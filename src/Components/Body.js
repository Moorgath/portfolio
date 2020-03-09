import React from 'react';
import HeaderModule from './HeaderModule'
import MainModule from './MainModule'
import FooterModule from './FooterModule'
import "./fontello/css/fontello.css"
import './Body.sass';
import { BrowserRouter } from 'react-router-dom';

function Body() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderModule></HeaderModule>
        <MainModule></MainModule>
        <FooterModule></FooterModule>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Body;
