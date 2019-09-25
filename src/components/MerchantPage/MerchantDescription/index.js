import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import './style.css'

const MerchantDescription = (props) => {
  const merchant = props.merchant
  return (
    <div className="merchant-description-content">
      <h1>
        {merchant.name} {merchant.discountTerm}s 2019
      </h1>
      <p>{merchant.description ? merchant.description : <Fragment />}</p>
      <div className="separator" />
      <div className="title-small">Useful Links</div>
      <div className="button indigo">Visit website</div>
      <div className="button fuchsia">Read {merchant.name} Reviews</div>
    </div>
  )
}

MerchantDescription.propTypes = {}

export default MerchantDescription
