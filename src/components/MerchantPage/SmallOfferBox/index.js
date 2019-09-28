import React, { useContext } from 'react'
import { handleRedemption } from '../../../utility/redemptions/Helpers'
import ModalContext from '../../../context/ModalContext'

import './smallOfferBox.css'

const SmallOfferBox = ({ offer }) => {
  const { id, isExclusive, offerType, title, code, merchant } = offer
  const modalContext = useContext(ModalContext)

  return (
    <div className="small-offer-box" onClick={() => handleRedemption(modalContext, offer)}>
      <a href={`/out/${id}`} className="redeem-link" target="_blank">
      <div className="small-box-left" />
      <div className="small-box-detail">
        <div className="detail-holder">
          <div className="detail-type">
            {isExclusive ? 'Exclusive ' : ''}
            {offerType}
          </div>
          <div className="detail-title">
            {title} at {merchant.name}
          </div>
        </div>

        <div className="button fuschia button-redeem" />
      </div>
      </a>
    </div>
  )
}

SmallOfferBox.propTypes = {}

export default SmallOfferBox
