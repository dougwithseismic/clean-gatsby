import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import MMStyle from './merchantMarkdown.module.css'

const MerchantMarkdown = (props) => {
  const scaledImage = (props) => {
    return <img {...props} style={{ maxWidth: '100%' }} />
  }

  const merchant = props.merchant
  return (
    <div className={MMStyle.merchantMarkdown}>
      <h3>More About {merchant.name}</h3>
      <div className="separator" />
      <ReactMarkdown renderers={{ image: scaledImage }}>{merchant.markdown}</ReactMarkdown>
    </div>
  )
}

MerchantMarkdown.propTypes = {}

export default MerchantMarkdown
