import React from 'react'
import './style.css'
import { Link } from 'gatsby'

// Circular logos featured on '/' in the Featured Merchant section
const FeaturedMerchantLogo = (props) => {
  const merchant = props.merchant
  const logoSrcWebp = `https://media.graphcms.com/resize=width:150,height:150/output=format:webp/${merchant.logo
    .handle}`
  const logoSrcPng = `https://media.graphcms.com/resize=width:150,height:150/output=format:png/${merchant.logo.handle}`

  return (
    <li className="featured-merchant-logo">
      <Link to={merchant.slug}>
        <picture>
          <source srcset={logoSrcWebp} type="image/webp" />
          <img alt={`The ${merchant.name} Logo`} src={logoSrcPng} width="100%" height="100%" />
        </picture>
      </Link>
    </li>
  )
}

export default FeaturedMerchantLogo
