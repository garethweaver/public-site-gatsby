import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOW_MOB_MENU, HIDE_MOB_MENU } from 'store/actions'
import MenuItem from 'components/menu-item/menu-item'
import MENU_DATA from 'data/menu'
import Logo from './logo'
import iconBars from 'images/icons/bars.svg'
import iconTimes from 'images/icons/times.svg'
import './site-header.sass'

class SiteHeader extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeClass: 'SiteHeader--is-scrolled-top',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let activeClass =
      window.pageYOffset > 0 ?
        'SiteHeader--is-scrolled' :
        'SiteHeader--is-scrolled-top'
    if (this.state.activeClass !== activeClass) {
      this.setState({ activeClass })
    }
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

  render() {
    return (
      <header className={`SiteHeader ${this.state.activeClass}`}>
        <div className="SiteHeader__bg" />
        <div className="u-wrap">
          <div className="SiteHeader__flex">
            <Logo />
            <button
              onClick={this.toggleMobileMenu}
              className="SiteHeader__toggle d-md-none"
              aria-label="Toggle mobile menu open closed">
              <img
                className="SiteHeader__toggle-icon"
                src={this.props.mobileMenu ? iconTimes : iconBars}
                alt="icon" />
            </button>
            <nav className={`SiteHeader__nav ${this.props.mobileMenu ? 'SiteHeader__nav--open' : 'SiteHeader__nav--closed'}`}>
              <ul className="u-list-unstyled">{this.getMenuItems()}</ul>
            </nav>
          </div>
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
