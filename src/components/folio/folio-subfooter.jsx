import React, { Component } from 'react'
import { Link } from 'gatsby'
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
              <span className="fa fa-globe" />
              Visit
            </a>
          }
          {this.props.item.repository &&
            <a
              href={this.props.item.repository}
              target="_blank"
              rel="noopener noreferrer">
              <span className="fa fa-github-alt" />
              Repo
            </a>
          }
          {this.props.item.next_page &&
            <Link to={`/folio${this.props.item.next_page}`}>
              <span className="fa fa-arrow-circle-o-right" />
              Next
            </Link>
          }
        </nav>
      </footer>
    )
  }

}

export default FolioSubfooter
