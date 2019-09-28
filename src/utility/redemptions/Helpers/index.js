export const handleRedemption = (modalContext, offer) => {
  // GTM Event
  //    Object
  // event:"Code Redemption"
  // merchant:"Theatre Tickets Direct"
  // offerId:"ck0qqeq5fvjeb0b59bo4kgo19"

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

export const handleStoreVisit = (offer) => {
  // GTM Event
  //    Object
  // event:"Store Visit Link"
  // merchant:"Theatre Tickets Direct"

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'Store Visit Link',
    merchant: offer.merchant.name,
  })


  window.location.href = `/out/store/${offer.merchant.id}`
  console.log('handle store visit')
}
