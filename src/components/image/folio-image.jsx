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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageData !== this.props.imageData) {
      this.setState({
        useImage: this.getImageForRes()
      })
    }
  }

  handleResize = (e) => {
    this.setState({
      useImage: this.getImageForRes()
    })
  }

  getImageForRes() {
    return this.props.imageData.mobile && window.innerWidth < this.breakPoint  ?
      this.props.imageData.mobile :
      this.props.imageData
  }

  calcImageRatio() {
    return (this.state.useImage.height / this.state.useImage.width) * 100 + '%'
  }

  imageTag() {
    let image = this.props.imageData.mobile ?
      (
        <>
          <source srcSet={withPrefix(`/images/folio/${this.props.imageData.name}`)} media="(min-width: 768px)" />
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
      <div className={`FolioImage ${this.state.imageLoaded ? 'image-loaded' : 'image-not-loaded' }`}
        style={{paddingTop: this.calcImageRatio()}}>
        {this.imageTag()}
      </div>
    )
  }

}

export default FolioImage
