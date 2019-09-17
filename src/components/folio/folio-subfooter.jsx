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
        <nav>
          {this.props.item.live_site &&
            <a
              href={this.props.item.live_site}
              target="_blank"
              rel="noopener noreferrer">
                <IconGlobe className="icon" />
                Visit
            </a>
          }
          {this.props.item.repository &&
            <a
              href={this.props.item.repository}
              target="_blank"
              rel="noopener noreferrer">
                <IconGithub className="icon" />
                Repo
            </a>
          }
          {this.props.item.next_page &&
            <Link to={`/folio${this.props.item.next_page}`}>
                <IconArrow className="icon" />
                Next
            </Link>
          }
        </nav>
      </footer>
    )
  }

}

export default FolioSubfooter
