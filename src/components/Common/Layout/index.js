import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './style.css'

import NavBar from '../NavBar'

const Layout = (props) => {
  return (
      <div className="main-holder">
        <NavBar />
        {props.children}
      </div>
  )
}

Layout.propTypes = {}

export default Layout
