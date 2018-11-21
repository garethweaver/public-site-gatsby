import React, {Component} from 'react'
import {Link} from 'gatsby'
import MenuItem from '../menu-item/menu-item'
import MENU_DATA from '../../data/menu'
import store from '../../store/store'
import './site-header.sass'

class SiteHeader extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeClass: 'is-scrolled-top',
      mobileMenu: store.getState().mobileMenu
    }
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        mobileMenu: store.getState().mobileMenu
      })
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    this.unsubscribeStore()
  }

  handleScroll = (event) => {
    let className =
      window.pageYOffset > 0 ?
        'is-scrolled' :
        'is-scrolled-top'
    this.setState({activeClass: className})
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
    this.state.mobileMenu ?
      store.dispatch({type: 'HIDE_MOB_MENU'}) :
      store.dispatch({type: 'SHOW_MOB_MENU'})
  }

  mobileMenuClasses() {
    return `
      mobile-menu-toggle MenuItem d-md-none fa
      ${this.state.mobileMenu ?
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
          <nav className={`menu ${this.state.mobileMenu ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
            <ul>{this.getMenuItems()}</ul>
          </nav>
        </div>
      </header>
    )
  }

}

export default SiteHeader
