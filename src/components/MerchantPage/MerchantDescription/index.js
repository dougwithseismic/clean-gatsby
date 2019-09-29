import React, { Fragment } from 'react'
import { handleStoreVisitMerchant } from '../../../utility/redemptions/Helpers'

import './style.css'

const MerchantDescription = (props) => {
  const merchant = props.merchant
  return (
    <div className="merchant-description-content">
      <h1>
        {merchant.name} {merchant.discountTerm}s 2019
      </h1>
      <div className="separator" />
      <p>{merchant.description ? merchant.description : <Fragment />}</p>
      <div className="title-small">Useful Links</div>
      <div className="button indigo visit-website" onClick={() => handleStoreVisitMerchant(merchant)}>
        Visit website
      </div>
      {/* <div className="button fuchsia read-reviews">Read {merchant.name} Reviews</div> */}
    </div>
  )
}

MerchantDescription.propTypes = {}

export default MerchantDescription
