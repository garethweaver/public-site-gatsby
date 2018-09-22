import React, {Component} from 'react'
import './folio-image.sass'

class FolioImage extends Component {

  imageTag() {
    let image = this.props.imageData.mobile ?
      (
        <>
          <source srcSet={`/images/folio/${this.props.imageData.name}`} media="(min-width: 768px)" />
          <img
            src={`/images/folio/${this.props.imageData.mobile.name}`}
            className="respond"
            alt={this.props.title} />
        </>
      ) :
        <img
          src={`/images/folio/${this.props.imageData.name}`}
          className="respond"
          alt={this.props.title} />

    return (
        <picture>
          {image}
        </picture>
    )
  }

  render() {
    return (
      <div className="FolioImage">
        {this.imageTag()}
      </div>
    )
  }

}

export default FolioImage
