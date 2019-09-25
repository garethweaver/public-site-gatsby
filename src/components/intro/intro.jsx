import React, { Component } from 'react'
import IntroImage from 'images/img-desk.inline.svg'
import iconDown from 'images/icons/level-down.svg'
import './intro.sass'

class Intro extends Component {

  scrollToFolio(event) {
    event.preventDefault()
    let elem = document.getElementById('portfolio-anchor')
    elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  render() {
    return (
      <div className="Intro">
        <div className="Intro__flex">
          <div className="Intro__flex-center">
            <h1>
              Code &amp;<br />Development
            </h1>
            <h2>
              Let’s talk about websites, apps, rugby or just the weather.
              I’m a front-end developer and I live in London, UK.
            </h2>
            <a
              className="Intro__scroll-anchor"
              onClick={this.scrollToFolio}
              href="#portfolio-anchor"
              aria-label="Scroll page to portolio section">
              View Portfoliodesk
              <img
                className="Intro__scroll-icon"
                src={iconDown}
                alt="Icon scroll down" />
            </a>
          </div>
        </div>
        <div className="DeskWrap">
          <IntroImage className="DeskWrap__desk" />
          <div className="DeskWrap__bg" />
          <div id="portfolio-anchor" />
        </div>
      </div>
    )
  }

}

export default Intro
