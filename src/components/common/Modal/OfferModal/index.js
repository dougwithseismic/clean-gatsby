import React, { useContext, Fragment } from 'react'

import ModalContext from '../../../../context/ModalContext'
import CodeModal from './CodeModal'
import DealModal from './DealModal'
import './style.css'

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

  if (offer.offerType === 'Code') return <CodeModal />
  if (offer.offerType === 'Deal') return <DealModal />

  return <div>shouldnt be seen</div>
}

OfferModal.propTypes = {}

export default OfferModal
