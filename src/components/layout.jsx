import React, {Component} from 'react'
import Helmet from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from '../store/store'
import SiteHeader from './site-header/site-header'
import SiteFooter from './site-footer/site-footer'
import Modal from './modal/modal'
import '../style/screen.sass'

class Layout extends Component {

  constructor(props){
    super(props)
    this.state = {
      modal: store.getState().modal
    }
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        modal: store.getState().modal
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeStore()
  }

  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:800|Playfair+Display" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
          <meta name="description" content="I&#39;m a front-end web designer and developer. I&#39;m always happy to have a chat about websites, hosting, technology or rugby. Why not send me a message?" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gareth Weaver - Front-end Web Designer &amp;amp; Developer" />
          <meta property="og:url" content="http://www.garethweaver.com/" />
          <meta property="og:image" content="http://www.garethweaver.com/assets/images/img-og.jpg" />
          <meta property="og:description" content="I&#39;m a front-end web designer and developer from the UK currently based in London. I&#39;m always happy to have a chat about websites, hosting, technology or rugby. Why not send me a message?" />
        </Helmet>
        <SiteHeader />
        {this.props.children}
        <SiteFooter />
        <ReactCSSTransitionGroup
          transitionName="modal-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.state.modal &&
            <Modal />
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

export default Layout
