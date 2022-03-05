import React from 'react'
import MenuItem from 'components/menu-item/menu-item'
import MENU_DATA from 'data/menu'
import './site-footer.sass'

const getMenuItems = () => (
  MENU_DATA.map((item, i) => (
    <li key={i}>
      <MenuItem data={item} />
    </li>
  ))
)

const SiteFooter = () => (
  <footer className="SiteFooter u-wrap">
    <nav>
      <ul className="SiteFooter__list u-list-unstyled">
        {getMenuItems()}
        <li>
          <span className="SiteFooter__copyright">
            &copy; G.Weaver {new Date().getFullYear()}
          </span>
        </li>
      </ul>
    </nav>
  </footer>
)

export default SiteFooter
