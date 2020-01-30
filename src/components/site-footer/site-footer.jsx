import React, { Component } from 'react'
import MenuItem from 'components/menu-item/menu-item'
import MENU_DATA from 'data/menu'
import './site-footer.sass'

class SiteFooter extends Component {

  getMenuItems() {
    return MENU_DATA.map((item, i) => {
      return (
        <li key={i}>
          <MenuItem data={item} />
        </li>
      )
    })
  }

  render() {
    return (
      <footer className="SiteFooter u-wrap">
        <nav>
          <ul className="SiteFooter__list u-list-unstyled">
            {this.getMenuItems()}
            <li>
              <span className="SiteFooter__copyright">
                &copy; G.Weaver {new Date().getFullYear()}
              </span>
            </li>
          </ul>
        </nav>
      </footer>
    )
  }

}

export default SiteFooter
