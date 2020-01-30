import React, { Component } from 'react'
import FolioSubfooter from './folio-subfooter'
import FolioImage from 'components/image/folio-image'
import './folio-detail.sass'

class FolioDetail extends Component {

  getItemImages() {
    return this.props.data.images.map((imageObj, i) => {
      return (
        <div
          key={i}
          className="FolioDetail__image-wrap FolioDetail__block">
          <FolioImage
            imageData={imageObj}
            title={this.props.data.title + ' ' + (i + 1)} />
        </div>
      )
    })
  }

  getItemMeta() {
    return (
      <ul className="FolioDetail__meta">
        <li dangerouslySetInnerHTML={{__html: this.props.data.type}} />
        <li>{this.props.data.tools}</li>
        <li>{this.props.data.year}</li>
      </ul>
    )
  }

  render() {
    const item = this.props.data

    return (
      <div className="FolioDetail u-wrap">
        <div className="u-inner">
          <div className="FolioDetail__text FolioDetail__block">
            <h1
              className="FolioDetail__title"
              dangerouslySetInnerHTML={{__html: item.title}} />
            {this.getItemMeta(item)}
            <div dangerouslySetInnerHTML={{__html: item.html}} />
          </div>
          {this.getItemImages()}
          <FolioSubfooter item={item} />
        </div>
      </div>
    )
  }

}

export default FolioDetail
