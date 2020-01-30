import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import SiteHeader from './site-header/site-header'
import SiteFooter from './site-footer/site-footer'
import Modal from './modal/modal'
import '../style/screen.sass'

class Layout extends Component {
  render() {
    return (
      <>
        <SiteHeader />
        {this.props.children}
        <SiteFooter />
        <CSSTransition
          in={this.props.modal}
          unmountOnExit
          timeout={400}
          classNames="a-modal">
            <Modal />
        </CSSTransition>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(Layout)
