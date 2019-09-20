import React from 'react'
import { Link } from 'gatsby'

import './style.css'

import vnautLogo from '../../../images/vouchernaut_logo.svg'

const NavBar = (props) => {
  return (
    <div className="navigation-main">
      <div className="container">
        <div className="left-content">
          <Link to="/">
            <img className="navigation-logo" src={vnautLogo} alt="vouchernaut logo" />
          </Link>
        </div>
        <div className="right-content">
          <div className="nav-item">Merchants</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
