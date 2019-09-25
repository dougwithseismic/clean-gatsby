import React from 'react'
import PropTypes from 'prop-types'

import footerStyles from './style.css'
import vnautLogo from '../../../images/vouchernaut_logo_dark.svg'

const Footer = (props) => {
  return (
    <div className="footer">
      Footer!
      <div className="footerLogo">
        <picture>
          <source srcset={vnautLogo} type="image/svg" />
          <img alt={`The Logo`} src={vnautLogo} width="100%" height="100%" />
        </picture>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
