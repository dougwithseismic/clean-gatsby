import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const MerchantHero = (props) => {
  const merchant = props.merchant

  const logoSrcWebp = `https://media.graphcms.com/resize=width:250,height:250/output=format:webp/${merchant.logo
    .handle}`
  const logoSrcPng = `https://media.graphcms.com/resize=width:250,height:250/output=format:png/${merchant.logo.handle}`

  return (
    <div className="merchant-hero">
      <div className="container">
        <div className="merchant-hero-logo">
          <picture>
            <source srcSet={logoSrcWebp} type="image/webp" />
            <img alt={`The ${merchant.name} Logo`} src={logoSrcPng} width="100%" height="100%" />
          </picture>
        </div>
        <div className="merchant-hero-details">
          <h1 className="merchant-hero-title">{merchant.name}</h1>
          <h3 className="merchant-hero-category">Entertainment / Fun</h3>
        </div>
      </div>
      <div className="container bottom">
        <div className="tab-group">
          <div className="tab selected">Offers</div>
          <div className="tab">Reviews</div>
          <div className="tab">Feed</div>
        </div>
      </div>
    </div>
  )
}

MerchantHero.propTypes = {}

export default MerchantHero
