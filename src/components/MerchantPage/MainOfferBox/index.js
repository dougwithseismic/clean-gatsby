import React, { Fragment, useContext } from 'react'
import { Link } from '@reach/router'
import './style.css'
import ModalContext from '../../../context/ModalContext'

import ExclusiveBadge from '../../Atoms/Voucher/exclusive'

const MainOffer = ({ offer }) => {
  const { id, merchant, isExclusive, title, offerType } = offer
  const modalContext = useContext(ModalContext)


  const handleRedemption = () => {
    modalContext.toggleModal()
    console.log('Redeeming %s - %s', id, merchant.name)
  }

  return (
    <div className="main-offer-box" onClick={handleRedemption}>
      <a href={`/out/${id}`} className="redeem-link" target="_blank">
        <div className="main-offer-box-top">
          {isExclusive ? (
            <div className="exclusive-badge">
              <ExclusiveBadge />
            </div>
          ) : (
            <Fragment />
          )}

          <div className="box-top-details">{isExclusive ? <span>exclusive</span> : <Fragment />}</div>
          <div className="redeem-button" />
        </div>
        <div className="main-offer-box-detail">
          <div style={{ flex: 1 }}>
            <div className="main-offer-type">
              {isExclusive ? 'Exclusive ' : ''}
              {offerType}
            </div>
            <div className="main-offer-title">
              {title} at {merchant.name}
            </div>
          </div>
          <div className="main-offer-box-button">
            <div className="button fuschia button-redeem" />
          </div>
        </div>
      </a>
    </div>
  )
}

MainOffer.propTypes = {}

export default MainOffer
