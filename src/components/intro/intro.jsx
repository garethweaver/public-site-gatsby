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
      <div id="Intro">
        <div className="flex-wrap">
          <div className="flex-box">
            <h1>Code &amp;<br />Development</h1>
            <h2>
              Let’s talk about websites, apps, rugby or just the weather.
              I’m a front-end developer and I live in London, UK.
            </h2>
            <a
              onClick={this.scrollToFolio}
              href="#portfolio-anchor"
              className="scroll"
              aria-label="Scroll page to portolio section">
              View Portfolio
              <img
                className="icon-down"
                src={iconDown}
                alt="Icon scroll down" />
            </a>
          </div>
        </div>
        <div className="desk-wrap">
          <IntroImage className="desk" />
          <div className="desk-bg" />
          <div id="portfolio-anchor" />
        </div>
      </div>
    )
  }

}

export default Intro
