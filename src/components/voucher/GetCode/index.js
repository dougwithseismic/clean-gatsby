import React, { useState, useEffect } from 'react'

import './style.css'

const GetCodeButton = (props) => {
  const handleRedemption = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'Code Redemption',
      merchant: 'Theatre Tickets Direct'
    })

    console.log('!')
    var urlParams = new URLSearchParams(window.location.search)
    let gclid = urlParams.getAll('gclid').length > 0 ? urlParams.getAll('gclid')[0] : ''
    let handle = window.open('/?codeRedeem=1')
    handle.blur()
    window.focus()
    window.location = `https://www.awin1.com/cread.php?awinmid=1936&awinaffid=322637&clickref=${gclid}&p=%5B%5Bhttps%3A%2F%2Fwww.theatreticketsdirect.co.uk%2Fbasket%5D%5D`
  }

  const [ isRedemption, setIsRedemption ] = useState(false)
  console.log(isRedemption)

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search)
    let isRedemption = urlParams.getAll('codeRedeem').length > 0 ? true : false
    setIsRedemption(isRedemption)
  }, [])

  if (isRedemption) {
    return (
      <div className="voucher-details">
        <h3>Your Discount Code</h3>
        <div className="voucher-code">VOUCHNAUT9</div>
      </div>
    )
  } else {
    return (
      <div className="offer-button" onClick={handleRedemption}>
        Get Code
      </div>
    )
  }
}

export default GetCodeButton
