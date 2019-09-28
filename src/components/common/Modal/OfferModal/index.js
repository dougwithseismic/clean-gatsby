import React, { useContext, Fragment } from 'react'

import ModalContext from '../../../../context/ModalContext'

const OfferModal = () => {
  const modalContext = useContext(ModalContext)
  const offer = modalContext.dealContent

  const handleVisitShop = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'Visit Store Click',
      merchant: offer.merchant.name,
      offerId: offer.id
    })
    window.location.href = offer.merchant.siteUrl
  }

  return (
    <div className="offer-modal-content">
      {offer.isExclusive ? <span className="exclusive">Exclusive</span> : <Fragment />}
      <h3>
        {`${offer.title} at ${offer.merchant.name}`}
      </h3>

      {offer.code ? (
        <Fragment>
          <span className="use-details">Copy the code below and enter it at checkout</span>
          <span className="show-code">{offer.code}</span>
        </Fragment>
      ) : (
        <span className="show-code">Deal Activated!</span>
      )}

      <div className="visit-shop" onClick={() => handleVisitShop()}>
        Visit Shop
      </div>
    </div>
  )
}

OfferModal.propTypes = {}

export default OfferModal
