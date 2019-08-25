import React from 'react'
import PropTypes from 'prop-types'

const MerchantHeader = (props) => {
  return (
    <div>
      <a href={props.merchant.siteUrl}>
        <h1>{props.merchant.name} Discount Codes 2019</h1>
      </a>
    </div>
  )
}

MerchantHeader.propTypes = {}

export default MerchantHeader
