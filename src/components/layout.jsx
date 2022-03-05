import React from 'react'
import SiteHeader from './site-header/site-header'
import SiteFooter from './site-footer/site-footer'
import Modal from './modal/modal'
import ModalAnimationWrapper from './modal/modal-animation-wrapper'
import '../style/screen.sass'

const Layout = ({ children }) => (
  <>
    <SiteHeader />
    {children}
    <SiteFooter />
    <ModalAnimationWrapper>
      <Modal />
    </ModalAnimationWrapper>
  </>
)

export default Layout
