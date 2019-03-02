import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import { connect } from 'react-redux'
import './folio-image.sass'

class FolioImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoaded: false,
    }
    this.lazyLoadImage()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageData !== this.props.imageData) {
      this.setState({ imageLoaded: false })
      this.lazyLoadImage()
    }
  }

  getMobileImages() {
    return this.props.imageData.filter(image => image.resolution === 'mobile')
  }

  getDesktopImages() {
    return this.props.imageData.filter(image => image.resolution === 'desktop')
  }

  getWebpImage(images) {
    return images.filter(image => image.type === 'webp')
  }

  getImage() {
    let image = this.props.isMobile && this.getMobileImages().length > 0 ?
       this.getMobileImages() :
       this.getDesktopImages()

    image = this.props.isWebp && this.getWebpImage(image).length === 1 ?
      this.getWebpImage(image)[0] :
      image = image[0]

    return image
  }

  calcImageRatio(image) {
    return (image.height / image.width) * 100 + '%'
  }

  lazyLoadImage() {
    if (typeof Image !== 'undefined') {
      let img = new Image()
      let newImg = this.getImage()
      img.onload = () => this.setState({imageLoaded: true})
      img.src = `/images/folio/${newImg.name}`
    }
  }

  render() {
    let image = this.getImage()

    return (
      <div
        className={`FolioImage ${this.state.imageLoaded ? 'image-loaded' : 'image-not-loaded' }`}
        style={{paddingTop: this.calcImageRatio(image)}}>
        <img
          src={withPrefix(`/images/folio/${image.name}`)}
          className="respond"
          alt={this.props.title} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isWebp: state.isWebp,
    isMobile: state.isMobile,
  }
}

export default connect(mapStateToProps)(FolioImage)
