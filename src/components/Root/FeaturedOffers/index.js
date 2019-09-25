import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import FeaturedOfferBox from '../../OfferBox/FeaturedOffer'

const FeaturedOffers = (props) => {
  return (
    <section className="featured-offers">
      <div className="container">
        <h3 className="featured-offer-header">Featured Voucher Codes & Deals</h3>
        <ul className="featured-offers-list">
          <FeaturedOfferBox isExclusive />
          <FeaturedOfferBox />
          <FeaturedOfferBox />
          <FeaturedOfferBox isExclusive />
        </ul>
      </div>
    </section>
  )
}

FeaturedOffers.propTypes = {}

export default FeaturedOffers
