import React, {Component} from 'react'
import HeaderModule from './HeaderModule'
import MainModule from './MainModule'
import FooterModule from './FooterModule'
import "./fontello/css/fontello.css"
import './Body.sass';
import PL from './flags/PL-flag.gif'
import EN from './flags/UK-flag.gif'
import DE from './flags/GM-flag.gif'
import { BrowserRouter } from 'react-router-dom'

class Body extends Component {
  state = {
    lang: 'EN',
  }

  txt = {}

  setTxt(lang){
    if (lang === 'EN')
    {
        this.txt.about = 'ABOUT ME'
        this.txt.tech = 'TECHNOLOGIES'
        this.txt.proj = 'PROJECTS'
        this.txt.cont = 'CONTACT'
    }

    else if (lang === 'PL')
    {
        this.txt.about = 'O MNIE'
        this.txt.tech = 'TECHNOLOGIE'
        this.txt.proj = 'PROJEKTY'
        this.txt.cont = 'KONTAKT'
    }

    else if (lang === 'DE')
    {
        this.txt.about = 'ÜBER MICH'
        this.txt.tech = 'TECHNOLOGIEN'
        this.txt.proj = 'PROJEKTE'
        this.txt.cont = 'KONTAKT'
    }
  }

  handleLangClick(e){
    this.setState({
      lang: e.target.alt
    })
    this.setTxt(e.target.alt)
  }

  componentWillMount(){
    this.setTxt('EN')
  }

  render() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderModule></HeaderModule>
        <span className="languages">
          <img onClick={this.handleLangClick.bind(this)} src={PL} alt="PL" />
          <img onClick={this.handleLangClick.bind(this)} src={EN} alt="EN" />
          <img onClick={this.handleLangClick.bind(this)} src={DE} alt="DE" />
        </span>
        <MainModule txt={this.txt}></MainModule>
        <FooterModule></FooterModule>
      </BrowserRouter>
    </React.Fragment>
  );
}}

export default Body;
