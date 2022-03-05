import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SHOW_MOB_MENU, HIDE_MOB_MENU } from 'store/actions'
import SiteNav from 'components/site-nav/site-nav'
import Logo from './logo'
import iconBars from 'images/icons/bars.svg'
import iconTimes from 'images/icons/times.svg'
import './site-header.sass'

const SiteHeader = props => {
  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    if (document.documentElement.scrollTop > 0)
      setIsScrolled(true)

    const handleOnScroll = e => {
      e.target.documentElement.scrollTop > 0
        ? setIsScrolled(true)
        : setIsScrolled(false)
    }
    window.addEventListener('scroll', handleOnScroll)
  }, [])

  const toggleMobileMenu = () => props.mobileMenu
    ? props.hideMobileMenu()
    : props.showMobileMenu()

  return (
    <header className={`SiteHeader ${isScrolled ? 'SiteHeader--is-scrolled' : 'SiteHeader--is-scrolled-top'}`}>
      <div className="SiteHeader__bg" />
      <div className="u-wrap">
        <div className="SiteHeader__flex">
          <Logo />
          <button
            onClick={toggleMobileMenu}
            className="SiteHeader__toggle"
            aria-label="Toggle mobile menu open closed">
            <img
              className="SiteHeader__toggle-icon"
              src={props.mobileMenu ? iconTimes : iconBars}
              alt="icon" />
          </button>
          <SiteNav />
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    mobileMenu: state.mobileMenu,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showMobileMenu: () => dispatch(SHOW_MOB_MENU),
    hideMobileMenu: () => dispatch(HIDE_MOB_MENU),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader)
