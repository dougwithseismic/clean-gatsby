import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import ExclusiveBadge from '../../Atoms/Voucher/exclusive'

const MainOffer = (props) => {
  const merchant = props.merchant
  const isExclusive = true

  return (
    <div className="main-offer-box">
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
        <div>
          <div className="main-offer-type">voucher code</div>
          <div className="main-offer-title">Save 6% Off All Bookings at {merchant.name}</div>
          {/* <div className="main-offer-description">
            Use this code at checkout to Save 6% Off All Bookings at {merchant.name}
          </div> */}
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
