import React, { Component } from 'react'
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
            <h1>Design &amp;<br />Development</h1>
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
              <span className="fa fa-level-down" />
            </a>
          </div>
        </div>
        <div className="desk-wrap">
          <img
            src="/images/img-desk.svg"
            alt="Gareth Weaver sitting at a computer desk" />
          <div className="desk-bg" />
          <div id="portfolio-anchor" />
        </div>
      </div>
    )
  }

}

export default Intro
