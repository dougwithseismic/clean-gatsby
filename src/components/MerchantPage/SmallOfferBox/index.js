import React from 'react'
import PropTypes from 'prop-types'

import './smallOfferBox.css'

const SmallOfferBox = ({ offer }) => {

  const { id, isExclusive, offerType, title, code, merchant } = offer

  const handleRedemption = () => {
    console.log('Redeeming %s - %s', id, merchant.name)
  }
  return (
    <div className="small-offer-box" onClick={handleRedemption}>
      <div className="small-box-left" />
      <div className="small-box-detail">
        <div className="detail-holder">
          <div className="detail-type">{isExclusive ? 'Exclusive ' : ''}{offerType}</div>
          <div className="detail-title">{title} at {merchant.name}</div>
        </div>

        <div className="button fuschia button-redeem" />
      </div>
    </div>
  )
}

SmallOfferBox.propTypes = {}

export default SmallOfferBox
