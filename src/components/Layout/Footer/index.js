import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="first-line">
          <div className="logo">
          </div>
          <div className="links">
            <a href="#" className="">
              Merchants
            </a>
            <a href="#" className="">
              About
            </a>
            <a href="#" className="">
              Contact
            </a>
          </div>
          <div className="social">
            <div className="facebook" />
            <div className="instagram" />
            <div className="twitter" />
          </div>
        </div>
        <div className="second-line">
          <div className="logo">&nbsp;</div>
          <div className="copyright-container">
            <div className="links">
              <a href="#" className="">
                Privacy Notice
              </a>
              <a href="#" className="">
                Cookie Notice
              </a>
              <a href="#" className="">
                Terms and Conditions
              </a>
            </div>
            <div className="copyright">Copyright &copy; 2019 VOUCHERNAUT.COM. All Rights Reserved.</div>
          </div>
          <div className="a-seismic-product" />
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
