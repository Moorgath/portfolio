import React, {Component} from 'react'
import MainModule from './MainModule'
import "./fontello/css/fontello.css"
import './Body.sass'
import PL from './flags/PL-flag.gif'
import EN from './flags/UK-flag.gif'
import DE from './flags/GM-flag.gif'
import { BrowserRouter } from 'react-router-dom'

const Languages = (props) => {
  return (
  <React.Fragment>
    <span className="languages">
    <img onClick={props.handleClick} src={PL} alt="PL" />
    <img onClick={props.handleClick} src={EN} alt="EN" />
    <img onClick={props.handleClick} src={DE} alt="DE" />
  </span>
  </React.Fragment>
  )
}

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
        this.txt.lang = 'en'
    }

    else if (lang === 'PL')
    {
        this.txt.about = 'O MNIE'
        this.txt.tech = 'TECHNOLOGIE'
        this.txt.proj = 'PROJEKTY'
        this.txt.cont = 'KONTAKT'
        this.txt.lang = 'pl'
    }

    else if (lang === 'DE')
    {
        this.txt.about = 'ÜBER MICH'
        this.txt.tech = 'TECHNOLOGIEN'
        this.txt.proj = 'PROJEKTE'
        this.txt.cont = 'KONTAKT'
        this.txt.lang = 'de'
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
        <Languages handleClick={this.handleLangClick.bind(this)}></Languages>
        <MainModule txt={this.txt}></MainModule>
      </BrowserRouter>
    </React.Fragment>
  );
}}

export default Body;
