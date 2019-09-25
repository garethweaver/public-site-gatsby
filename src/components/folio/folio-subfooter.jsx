import React, { Component } from 'react'
import { Link } from 'gatsby'
import IconGlobe from 'images/icons/globe.inline.svg'
import IconGithub from 'images/icons/github-alt.inline.svg'
import IconArrow from 'images/icons/arrow-circle-o-right.inline.svg'
import './folio-subfooter.sass'

class FolioSubfooter extends Component {

  render() {
    return (
      <footer className="FolioSubfooter">
        <nav className="FolioSubfooter__nav">
          {this.props.item.live_site &&
            <a
              href={this.props.item.live_site}
              target="_blank"
              rel="noopener noreferrer">
                <IconGlobe className="FolioSubfooter__icon" />
                Visit
            </a>
          }
          {this.props.item.repository &&
            <a
              href={this.props.item.repository}
              target="_blank"
              rel="noopener noreferrer">
                <IconGithub className="FolioSubfooter__icon" />
                Repo
            </a>
          }
          {this.props.item.next_page &&
            <Link to={`/folio${this.props.item.next_page}`}>
                <IconArrow className="FolioSubfooter__icon" />
                Next
            </Link>
          }
        </nav>
      </footer>
    )
  }

}

export default FolioSubfooter
