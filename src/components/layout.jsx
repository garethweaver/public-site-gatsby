import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import SiteHeader from './site-header/site-header'
import SiteFooter from './site-footer/site-footer'
import Modal from './modal/modal'
import '../style/screen.sass'

function Layout({ children, modal}) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <CSSTransition
        in={modal}
        unmountOnExit
        timeout={400}
        classNames="a-modal">
          <Modal />
      </CSSTransition>
    </>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(Layout)
