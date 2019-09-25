import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import './folio-image.sass'

class FolioImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageLoaded: false,
      imagePadding: '100%',
    }
  }

  componentDidMount() {
    this.lazyLoadImage()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageData !== this.props.imageData ||
      prevProps.isMobile !== this.props.isMobile
    ) {
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
    let image = this.props.isMobile && this.getMobileImages().length > 0
      ? this.getMobileImages()
      : this.getDesktopImages()

    image = this.props.isWebp && this.getWebpImage(image).length === 1
      ? this.getWebpImage(image)[0]
      : image = image[0]

    return image
  }

  calcImageRatio(image) {
    let imagePadding = typeof window !== 'undefined'
      ? (image.height / image.width) * 100 + '%'
      : '100%'
     this.setState({ imagePadding })
  }

  lazyLoadImage() {
    if (typeof Image !== 'undefined') {
      let img = new Image()
      let newImg = this.getImage()
      this.calcImageRatio(newImg)
      img.onload = () => this.setState({ imageLoaded: true })
      img.src = `/images/folio/${newImg.name}`
    }
  }

  render() {
    let image = this.getImage()

    return (
      <div
        className="FolioImage"
        style={{paddingTop: this.state.imagePadding}}>
        <CSSTransition
          in={this.state.imageLoaded}
          unmountOnExit
          timeout={300}
          classNames="a-image">
          <img
            src={withPrefix(`/images/folio/${image.name}`)}
            className="FolioImage__image"
            alt={this.props.title} />
        </CSSTransition>
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
