import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'

import ModalContext from '../../../context/ModalContext'
import './style.css'

const OfferBox = (props) => {
  const modalContext = useContext(ModalContext)
  const offer = props.offer

  const handleRedemption = (offer) => {
    console.log('do it')
    modalContext.toggleModal()
    modalContext.setDealContent(offer)

    let win = window.open(offer.merchant.siteUrl, '_blank')
    win.focus()
  }

  // Apologies for True string. :()
  return (
    <div className="offer-content-box">
      <div class="offer-content">
        {offer.isExclusive === 'True' ? <div className="exclusive show">Exclusive</div> : <Fragment />}
        <h3>
          {offer.title} at {offer.merchant.name}
        </h3>
        <div className="offer-desc">{offer.description}</div>
      </div>
      <div
        className="redeem-button"
        onClick={(e) => {
          handleRedemption(offer)
        }}
      >
        Get Code
      </div>
    </div>
  )
}

OfferBox.propTypes = {}

export default OfferBox
