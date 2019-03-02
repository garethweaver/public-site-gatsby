import React, { Component } from 'react'
import FolioSubfooter from './folio-subfooter'
import FolioImage from '../image/folio-image'
import './folio-detail.sass'

class FolioDetail extends Component {

  getItemImages() {
    return this.props.folioItem.images.map((imageObj, i) => {
      return (
        <div key={i} className="image-wrapper folio-block">
          <FolioImage
            imageData={imageObj}
            title={this.props.folioItem.title + ' ' + (i + 1)} />
        </div>
      )
    })
  }

  getItemMeta() {
    return (
      <ul className="folio-meta">
        <li dangerouslySetInnerHTML={{__html: this.props.folioItem.type}} />
        <li>{this.props.folioItem.tools}</li>
        <li>{this.props.folioItem.year}</li>
      </ul>
    )
  }

  render() {
    const item = this.props.folioItem

    return (
      <div className="FolioDetail wrap">
        <div className="inner">
          <div className="folio-text folio-block">
            <h1 dangerouslySetInnerHTML={{__html: item.title}} />
            {this.getItemMeta(item)}
            <div dangerouslySetInnerHTML={{__html: item.description}} />
          </div>
          {this.getItemImages()}
          <FolioSubfooter item={item} />
        </div>
      </div>
    )
  }

}

export default FolioDetail
