import React, {Component} from 'react'
import getObserver from './intersection-observer'
import './folio-image.sass'

class FolioImage extends Component {

  constructor(props){
    super(props)
    // this.ref = React.createRef()
  }

  // componentDidMount() {
  //   getObserver(this.onIntersectChange)
  //   // getObserver() ?
  //   //   getObserver().observe(this.ref.current) :
  //   //   this.loadImage(this.ref.current)
  // }

  // onIntersectChange = (changes, observer) => {
  //   changes.forEach((item) => {
  //     if (item.isIntersecting) {
  //       // this.loadImage(item.target)
  //       console.log(item)
  //       // observer.unobserve(item.target);
  //     }
  //   })
  // }

  // loadImage(element) {
  //   let img = new Image()
  //   img.className = 'respond'
  //   img.alt = element.dataset.title
  //   img.onload = () => element.append(img)
  //   img.src = element.dataset.image
  // }

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

  // imageTag() {
  //   return (
  //     <img
  //       src={`/images/folio/sm-${this.props.imageData.image}`}
  //       srcSet={`/images/folio/sm-${this.props.imageData.image} 800w, /images/folio/lg-${this.props.imageData.image} 1000w`}
  //       sizes='95vw'
  //       className="respond"
  //       alt={this.props.title} />
  //   )
  // }

  render() {
    /*src={this.state.loaded ? `/images${this.props.imageData.image}` : this.props.imageData.base64}*/

    /*
      <img
        src={`/images${this.props.imageData.image}`}
        className="respond"
        alt={this.props.title} />

      <div
        className="FolioImage"
        style={{paddingTop: (this.props.imageData.height/this.props.imageData.width * 100) +  '%'}}
        ref={this.ref}
        data-image={`/images${this.props.imageData.image}`}
        data-title={this.props.title} />
    */

    return (
      //  style={{paddingTop: (this.props.imageData.height/this.props.imageData.width * 100) +  '%'}}
      <div
        className="FolioImage">
        {this.imageTag()}
      </div>
    )
  }

}

export default FolioImage
