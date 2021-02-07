import React, { useState, useEffect } from 'react'
import { withPrefix } from 'gatsby'
import { connect } from 'react-redux'
import { getImagesByResolution, getWebpImages, getImageRatio } from './helpers'
import './folio-image.sass'

const FolioImage = props => {
  const [ imageLoaded, setImageLoaded ] = useState(false)
  const [ imagePadding, setImagePadding ] = useState('100%')
  const [ image, setImage ] = useState({})

  useEffect(() => {
    let images = getImagesByResolution(props.imageData, props.isMobile ? 'mobile' : 'desktop')
    images = getWebpImages(images)
    setImagePadding(getImageRatio(images[0]))
    if (images[0].name !== image.name) {
      setImage(images[0])
    }
  }, [ image.name, props.imageData, props.isMobile ])

  useEffect(() => {
    if (image.name) {
      let img = new Image()
      img.onload = () => setImageLoaded(true)
      img.src = `/images/folio/${image.name}`
    }
  }, [ image ])

  return (
    <div
      className="FolioImage"
      style={{paddingTop: imagePadding}}>
        <img
          src={withPrefix(`/images/folio/${image.name}`)}
          className={`FolioImage__image${imageLoaded ? ' FolioImage__image--loaded' : ''}`}
          alt={props.title} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isWebp: state.isWebp,
    isMobile: state.isMobile,
  }
}

export default connect(mapStateToProps)(FolioImage)
