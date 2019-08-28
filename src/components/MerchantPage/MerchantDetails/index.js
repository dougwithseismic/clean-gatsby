import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './style.css'

const MerchantDetails = (props) => {
  const merchant = props.merchant
  return (
    <Fragment>
      <section className="merchant-details">
      <div className="container">
        <div className="merchant-category">
          Entertainment & Dining
        </div>
        <h1>
          {merchant.name} {merchant.discountTerm}s 2019
        </h1>
        </div>
      </section>
    </Fragment>
  )
}

MerchantDetails.propTypes = {}

export default MerchantDetails
