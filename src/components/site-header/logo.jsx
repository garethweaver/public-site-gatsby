import React from 'react'
import { Link } from 'gatsby'
import IconCode from 'images/icons/code.inline.svg'
import './logo.sass'

const Logo = () => {
  return (
    <Link to="/" className="Logo">
      garethweaver.com
      <IconCode className="Logo__icon" />
    </Link>
  )
}

export default Logo
