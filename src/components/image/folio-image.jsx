import React, {Component} from 'react'
import {withPrefix} from 'gatsby'
import './folio-image.sass'

class FolioImage extends Component {

  constructor(props) {
    super(props)
    this.breakPoint = 768
    this.state = {
      useImage: this.getImageForRes(),
      imageLoaded: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.lazyLoadImage()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageData !== this.props.imageData) {
      this.setState({
        useImage: this.getImageForRes(),
        imageLoaded: false
      })
      this.lazyLoadImage()
    }
  }

  handleResize = (e) => {
    let img = this.getImageForRes()
    if (img !== this.state.useImage){
      this.setState({
        useImage: img
      })
    }
  }

  getImageForRes() {
    return (
      this.props.imageData.mobile &&
      typeof window !== 'undefined' &&
      window.innerWidth < this.breakPoint ?
        this.props.imageData.mobile :
        this.props.imageData
    )
  }

  calcImageRatio() {
    return (this.state.useImage.height / this.state.useImage.width) * 100 + '%'
  }

  lazyLoadImage() {
    let newImg = this.getImageForRes()
    let img = new Image()
    img.onload = () => {
      this.setState({imageLoaded: true})
    }
    img.src = `/images/folio/${newImg.name}`
  }

  imageTag() {
    let image = this.props.imageData.mobile ?
      (
        <>
          <source
            srcSet={withPrefix(`/images/folio/${this.props.imageData.name}`)}
            media="(min-width: 768px)" />
          <img
            src={withPrefix(`/images/folio/${this.props.imageData.mobile.name}`)}
            className="respond"
            alt={this.props.title}
            key={withPrefix(`/images/folio/${this.props.imageData.name}`)} />
        </>
      ) :
        <img
          src={withPrefix(`/images/folio/${this.props.imageData.name}`)}
          className="respond"
          alt={this.props.title}
          key={withPrefix(`/images/folio/${this.props.imageData.name}`)} />

    return (
      <picture>{image}</picture>
    )
  }

  render() {
    return (
      <div
        className={`FolioImage ${this.state.imageLoaded ? 'image-loaded' : 'image-not-loaded' }`}
        style={{paddingTop: this.calcImageRatio()}}>
        {this.imageTag()}
      </div>
    )
  }

}

export default FolioImage
