import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import ExclusiveBadge from '../../Atoms/Voucher/exclusive'

const MainOffer = (props) => {
  const offer = props.offer
  const merchant = props.offer.merchant
  const isExclusive = props.offer.isExclusive

  const handleRedemption = () => {
    console.log("done")
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
        <div style={{flex: 1}}>
          <div className="main-offer-type">voucher code</div>
          <div className="main-offer-title">
            {offer.title} at {merchant.name}
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
