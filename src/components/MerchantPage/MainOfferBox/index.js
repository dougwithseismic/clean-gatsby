import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import ExclusiveBadge from '../../Atoms/Voucher/exclusive'

const MainOffer = ({ offer }) => {
  const { id, merchant, isExclusive, title, offerType } = offer

  const handleRedemption = () => {
    console.log('Redeeming %s - %s', id, merchant.name)
  }

  return (
    <div className="main-offer-box" onClick={handleRedemption}>
      <div className="main-offer-box-top">
        {isExclusive ? (
          <div className="exclusive-badge">
            <ExclusiveBadge />
          </div>
        ) : (
          <Fragment />
        )}

        <div className="box-top-details">{isExclusive ? <span>exclusive</span> : <Fragment />}</div>
        <div className="redeem-button" />
      </div>
      <div className="main-offer-box-detail">
        <div style={{ flex: 1 }}>
          <div className="main-offer-type">{isExclusive ? 'Exclusive ' : ''}{offerType}</div>
          <div className="main-offer-title">
            {title} at {merchant.name}
          </div>
        </div>
        <div className="main-offer-box-button">
          <div className="button fuschia button-redeem" />
        </div>
      </div>
    </div>
  )
}

MainOffer.propTypes = {}

export default MainOffer
