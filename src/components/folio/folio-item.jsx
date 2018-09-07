import React, {Component} from 'react'
import {Link} from 'gatsby'
import './folio-item.sass'

class FolioItem extends Component {

  thumbnail() {
    return (
      <img
        className="respond"
        src={`/images/thumb/${this.props.folioItem.thumb.name}`}
        alt={this.props.folioItem.title} />
    )
  }

  externalLink() {
    return (
      <a
        href={this.props.folioItem.url}
        target="_blank"
        rel="noopener noreferrer">
        {this.thumbnail()}
      </a>
    )
  }

  internalLink() {
    return (
      <Link to={`/folio${this.props.folioItem.url}`}>
        {this.thumbnail()}
      </Link>
    )
  }

  render() {
    return (
      <div className="FolioItem">
        {this.props.folioItem.external ?
          this.externalLink() :
          this.internalLink()
        }
      </div>
    )
  }

}

export default FolioItem
