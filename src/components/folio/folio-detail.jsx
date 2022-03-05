import React from 'react'
import FolioSubfooter from './folio-subfooter'
import FolioImage from 'components/image/folio-image'
import './folio-detail.sass'

const getItemImages = data => {
  return data.images.map((imageObj, i) => {
    return (
      <div
        key={i}
        className="FolioDetail__image-wrap FolioDetail__block">
        <FolioImage
          imageData={imageObj}
          title={data.title + ' ' + (i + 1)} />
      </div>
    )
  })
}

const getItemMeta = data => {
  return (
    <ul className="FolioDetail__meta">
      <li dangerouslySetInnerHTML={{__html: data.type}} />
      <li>{data.tools}</li>
      <li>{data.year}</li>
    </ul>
  )
}

const FolioDetail = ({ data }) => {
  return (
    <div className="FolioDetail u-wrap">
      <div className="u-inner">
        <div className="FolioDetail__text FolioDetail__block">
          <h1
            className="FolioDetail__title"
            dangerouslySetInnerHTML={{__html: data.title}} />
          {getItemMeta(data)}
          <div
            className="FolioDetail__body"
            dangerouslySetInnerHTML={{__html: data.html}} />
        </div>
        {getItemImages(data)}
        <FolioSubfooter item={data} />
      </div>
    </div>
  )
}

export default FolioDetail
