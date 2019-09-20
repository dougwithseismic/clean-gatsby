import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import NavBar from '../../components/Layout/NavBar'

const merchantPage = (props) => {
  return (
    <Fragment>
      <NavBar />

      {/* Hero Banner - Merchant */}

      <div className="merchant-hero">
        <div className="merchant-details">
          <div className="merchant-logo">LOGO</div>
          <h1 className="merchant-name">Adidas</h1>
          <h3 className="category">Category</h3>
        </div>
      </div>
      {/* Section Offers */}
      <div className="offers-section">
        <div className="hero-offer">HERO OFFER COMPONENT</div>
        <h3>Latest Voucher Codes</h3>
        <div className="offer-count">14 Live</div>
        <div className="voucher-offers-box">
          <div className="voucher-offers">1</div>
          <div className="voucher-offers" />
          <div className="voucher-offers">3</div>
          <div className="voucher-offers">4</div>
          <div className="voucher-offers">5</div>
          <div className="voucher-offers">6</div>
        </div>
        <div className="deals-offers-box">
          <div className="deals-offers">1</div>
          <div className="deals-offers" />
          <div className="deals-offers">3</div>
          <div className="deals-offers">4</div>
          <div className="deals-offers">5</div>
          <div className="deals-offers">6</div>
        </div>
      </div>

      <div className="merchant-description">
        <h1>Adidas.co.uk Promo Codes & Discounts September 2019</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
        </p>
      </div>


      {/* Latest voucher Codes */}
      {/* Latest Deals */}

      {/* Rich content */}
      {/* MErchant Description */}
      {/* Useful Linmks */}
      {/* Footer */}
    </Fragment>
  )
}

merchantPage.propTypes = {}

export default merchantPage
