import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import MMStyle from './merchantMarkdown.module.css'

const MerchantMarkdown = (props) => {
  const merchant = props.merchant
  return (
    <div className={MMStyle.merchantMarkdown}>
      <h3>More About {merchant.name}</h3>
      <div className="separator" />
      <ReactMarkdown>{merchant.markdown}</ReactMarkdown>
    </div>
  )
}

MerchantMarkdown.propTypes = {}

export default MerchantMarkdown
