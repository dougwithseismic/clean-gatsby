import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

const MerchantMarkdown = (props) => {
  const merchant = props.merchant
  return <ReactMarkdown>{merchant.markdown}</ReactMarkdown>
}

MerchantMarkdown.propTypes = {}

export default MerchantMarkdown
