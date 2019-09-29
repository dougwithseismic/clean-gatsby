import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import mascotPng from '../../../images/astronaut.png'
import mascotSvg from '../../../images/astronaut.svg'

const MerchantHero = (props) => {
  const merchant = props.merchant

  const logoSrcWebp = merchant.logo
    ? `https://media.graphcms.com/resize=width:250,height:250/output=format:webp/${merchant.logo.handle}`
    : '/'
  const logoSrcPng = merchant.logo
    ? `https://media.graphcms.com/resize=width:250,height:250/output=format:png/${merchant.logo.handle}`
    : '/'

  return (
    <div className="merchant-hero">
      <div className="container">
        <div className="merchant-left-content">
          <div className="merchant-hero-logo">
            <picture>
              <source srcSet={logoSrcWebp} type="image/webp" />
              <img alt={`The ${merchant.name} Logo`} src={logoSrcPng} width="100%" height="100%" />
            </picture>
          </div>
          <div className="merchant-hero-details">
            <h1 className="merchant-hero-title">{merchant.name}</h1>
            <h3 className="merchant-hero-category">
              {merchant.category ? merchant.category : 'Live & Tested Promo Codes'}{' '}
            </h3>
            <h3 className="merchant-hero-site">
              Official Website: <a href={`/out/store/${merchant.id}`}>{merchant.siteName}</a>{' '}
            </h3>
          </div>
        </div>
        {/* <div className="merchant-right-content">
          <div className="merchant-mascot">
            <picture>
              <source srcSet={mascotPng} type="image/png" />
              <img alt="Vouchernaut Mascot" src={mascotSvg} />
            </picture>
          </div>
        </div> */}
      </div>
    </div>
  )
}

MerchantHero.propTypes = {}

export default MerchantHero
