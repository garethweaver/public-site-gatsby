import React from 'react'
import { connect } from 'react-redux'
import Collapse from 'react-css-collapse'
import MenuItem from 'components/menu-item/menu-item'
import MENU_DATA from 'data/menu'
import './site-nav.sass'

const getMenuItems = () => (
  MENU_DATA.map((item, i) => (
    <li key={i}>
      <MenuItem data={item} showIcon={true} />
    </li>
  ))
)

const SiteNav = props => {
  return (
    <nav className={`SiteNav ${props.isMobile ? 'SiteNav--mobile' : 'SiteNav--desktop'}`}>
      {props.isMobile ? (
        <Collapse isOpen={props.mobileMenu}>
          <ul className="u-list-unstyled">
            {getMenuItems()}
          </ul>
        </Collapse>
      ) : (
        <ul className="u-list-unstyled">
          {getMenuItems()}
        </ul>
      )}
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    mobileMenu: state.mobileMenu,
    isMobile: state.isMobile,
  }
}

export default connect(mapStateToProps)(SiteNav)
