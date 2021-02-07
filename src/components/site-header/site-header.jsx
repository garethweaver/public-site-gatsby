import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SHOW_MOB_MENU, HIDE_MOB_MENU } from 'store/actions'
import MenuItem from 'components/menu-item/menu-item'
import MENU_DATA from 'data/menu'
import Logo from './logo'
import iconBars from 'images/icons/bars.svg'
import iconTimes from 'images/icons/times.svg'
import './site-header.sass'

const getMenuItems = () => {
  return MENU_DATA.map((item, i) => {
    return (
      <li key={i}>
        <MenuItem data={item} showIcon={true} />
      </li>
    )
  })
}

const SiteHeader = props => {
  const [ isScrolled, setIsScrolled ] = useState(false)

  useEffect(() => {
    const handleOnScroll = e => {
      e.target.documentElement.scrollTop > 0
        ? setIsScrolled(true)
        : setIsScrolled(false)
    }
    window.addEventListener('scroll', handleOnScroll);
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
            className="SiteHeader__toggle d-md-none"
            aria-label="Toggle mobile menu open closed">
            <img
              className="SiteHeader__toggle-icon"
              src={props.mobileMenu ? iconTimes : iconBars}
              alt="icon" />
          </button>
          <nav className={`SiteHeader__nav ${props.mobileMenu ? 'SiteHeader__nav--open' : 'SiteHeader__nav--closed'}`}>
            <ul className="u-list-unstyled">{getMenuItems()}</ul>
          </nav>
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
