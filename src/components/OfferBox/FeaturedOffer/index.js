import React, { Fragment } from 'react'
import './style.css'
import imageUrl from '../../../images/merchant_adidas3.png'
import ExclusiveBadge from '../../Atoms/Voucher/exclusive'

const FeaturedOfferBox = (props) => {
  return (
    <div className="featured-offer">
      {props.isExclusive ? (
        <div className="featured-offer-is-exclusive">
          <ExclusiveBadge />
        </div>
      ) : (
        <Fragment />
      )}

      <div
        className="featured-offer-image"
        style={{
          position: 'relative',
          backgroundImage: `url(${imageUrl})`,
          height: '35%',
          width: '100%',
          backgroundPosition: 'bottom left',
          borderRadius: '10px 10px 0 0'
        }}
      >
        <div className="featured-offer-merchant-logo" />
      </div>
      <div className="featured-offer-details">
        <div className="offer-type">voucher code</div>
        <div className="offer-title">Save 10% Off At Vouchernaut</div>
      </div>
      <div className="button-redeem" />
    </div>
  )
}

export default FeaturedOfferBox
