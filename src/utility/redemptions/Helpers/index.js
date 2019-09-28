import { useContext } from 'react'

export const handleRedemption = (modalContext, offer) => {
  // GTM Event

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'Code Redemption',
    merchant: offer.merchant.name,
    offerId: offer.id
  })

  console.log('Redeeming %s - %s', offer.id, offer.merchant.name)
  modalContext.setDealContent(offer)
  modalContext.toggleModal()
}
