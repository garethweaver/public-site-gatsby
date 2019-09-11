import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'
import './folio-item.sass'

class FolioItem extends Component {

  getImageType(type) {
    return this.props.folioItem.frontmatter.thumb.filter(img => img.type === type)[0] || false
  }

  thumbnail() {
    return this.getImageType('jpg') ?
      <picture>
        <source
          type="image/webp"
          srcSet={withPrefix(`/images/thumb/${this.getImageType('webp').name}`)} />
        <img
          className="respond"
          src={withPrefix(`/images/thumb/${this.getImageType('jpg').name}`)}
          alt={this.props.folioItem.frontmatter.title} />
      </picture>
      :
      <picture>
        <img
          className="respond"
          src={withPrefix(`/images/thumb/${this.getImageType('gif').name}`)}
          alt={this.props.folioItem.frontmatter.title} />
      </picture>
  }

  externalLink() {
    return (
      <a
        href={this.props.folioItem.frontmatter.url}
        target="_blank"
        rel="noopener noreferrer">
        {this.thumbnail()}
        <span className="FolioItem__exteral">
          <span
            className="fa fa-codepen"
            aria-hidden="true">
          </span>
        </span>
      </a>
    )
  }

  internalLink() {
    return (
      <Link to={this.props.folioItem.frontmatter.url}>
        {this.thumbnail()}
      </Link>
    )
  }

  render() {
    return (
      <div className="FolioItem">
        {this.props.folioItem.frontmatter.external ?
          this.externalLink() :
          this.internalLink()
        }
      </div>
    )
  }

}

export default FolioItem
