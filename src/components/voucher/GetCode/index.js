import React, { useState, useEffect } from 'react'

import './style.css'

const GetCodeButton = (props) => {
  const handleRedemption = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'Code Redemption',
      merchant: props.merchant.name
    })

   // If it's a PPC link, we should know about the GCLID so we can pass it onto the affiliate network.
   
    var urlParams = new URLSearchParams(window.location.search)
    let gclid = urlParams.getAll('gclid').length > 0 ? urlParams.getAll('gclid')[0] : ''
    let handle = window.open(`/${props.merchant.slug}?codeRedeem=1`)

    handle.blur()
    window.focus()
    let split = props.merchant.siteUrl.split('&')
    split.splice(1, 0, `clickref=${gclid}`)
    let url = split.join('&')
    window.location = url
  }

  const [ isRedemption, setIsRedemption ] = useState(false)

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search)
    let isRedemption = urlParams.getAll('codeRedeem').length > 0 ? true : false
    setIsRedemption(isRedemption)
  }, [])

  if (isRedemption) {
    return (
      <div className="voucher-details">
        <h3>Your Discount Code</h3>
        <div className="voucher-code">{props.offer.code ? props.offer.code : 'Deal Activated'}</div>
      </div>
    )
  } else {
    return (
      <div className="offer-button" onClick={() => handleRedemption()}>
        Get Code
      </div>
    )
  }
}

export default GetCodeButton
