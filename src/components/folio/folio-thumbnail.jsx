import React from 'react'
import { withPrefix } from 'gatsby'

const getImageType = (thumb, type) => {
  return thumb.filter(img => img.type === type)[0] || false
}

const FolioThumbnail = ({ data }) => {
  return getImageType(data.thumb, 'jpg') ?
    <picture>
      <source
        type="image/webp"
        srcSet={withPrefix(`/images/thumb/${getImageType(data.thumb, 'webp').name}`)} />
      <img
        className="u-respond"
        src={withPrefix(`/images/thumb/${getImageType(data.thumb, 'jpg').name}`)}
        alt={data.title} />
    </picture>
    :
    <picture>
      <img
        className="u-respond"
        src={withPrefix(`/images/thumb/${getImageType(data.thumb, 'gif').name}`)}
        alt={data.title} />
    </picture>
}

export default FolioThumbnail
