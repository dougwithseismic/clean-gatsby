import React from 'react'
import PropTypes from 'prop-types'

import './smallOfferBox.css'

const SmallOfferBox = (props) => {

    const handleRedemption = () => {
        console.log("DONE")
    }
  return (
    <div className="small-offer-box" onClick={handleRedemption}>
      <div className="small-box-left" />
      <div className="small-box-detail">
        <div className="detail-holder">
          <div className="detail-type">voucher code</div>
          <div className="detail-title">20% Off full Price Sneakers & Title That's Way too long. Period</div>
        </div>

        <div className="button fuschia button-redeem" />
      </div>
    </div>
  )
}

SmallOfferBox.propTypes = {}

export default SmallOfferBox
