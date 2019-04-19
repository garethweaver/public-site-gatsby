import React, { Component } from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { SHOW_MOB_MENU, HIDE_MOB_MENU } from '../../store/actions'
import MenuItem from '../menu-item/menu-item'
import MENU_DATA from '../../data/menu'
import './site-header.sass'

class SiteHeader extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeClass: 'is-scrolled-top',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let className =
      window.pageYOffset > 0 ?
        'is-scrolled' :
        'is-scrolled-top'
    this.setState({ activeClass: className })
  }

  getMenuItems() {
    return MENU_DATA.map((item, i) => {
      return (
        <li key={i}>
          <MenuItem data={item} showIcon={true} />
        </li>
      )
    })
  }

  toggleMobileMenu = (event) => {
    event.preventDefault()
    this.props.mobileMenu ?
      this.props.hideMobileMenu() :
      this.props.showMobileMenu()
  }

  mobileMenuClasses() {
    return `
      mobile-menu-toggle MenuItem d-md-none fa
      ${this.props.mobileMenu ?
        'fa-times' :
        'fa-bars'}
    `
  }

  render() {
    return (
      <header className={`SiteHeader ${this.state.activeClass}`}>
        <div className="background" />
        <div className="wrap">
          <Link to="/" className="logo MenuItem">
            garethweaver.com
            <span className="fa fa-code" />
          </Link>
          <button
            onClick={this.toggleMobileMenu}
            className={this.mobileMenuClasses()}
            aria-label="Toggle mobile menu open closed" />
          <div className="clearfix d-md-none" />
          <nav className={`menu ${this.props.mobileMenu ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
            <ul>{this.getMenuItems()}</ul>
          </nav>
        </div>
      </header>
    )
  }

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
