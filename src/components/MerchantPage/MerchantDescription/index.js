import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const MerchantDescription = (props) => {
  const merchant = props.merchant
  return (
    <div className="merchant-description-content">
      <h1>
        {merchant.name} {merchant.discountTerm}s 2019
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in.
      </p>
      <div className="separator" />
      <div className="title-small">Useful Links</div>
      <div className="button indigo">Visit website</div>
      <div className="button fuchsia">Read {merchant.name} Reviews</div>
    </div>
  )
}

MerchantDescription.propTypes = {}

export default MerchantDescription
