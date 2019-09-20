import React from 'react'
import './style.css'
import { Link } from 'gatsby'

// Circular logos featured on '/' in the Featured Merchant section
const FeaturedMerchantLogo = (props) => {
  const merchant = props.merchant
  const logoSrc = `https://media.graphcms.com/resize=width:150,height:150/output=format:webp/${merchant.logo.handle}`

  return (
    <li className="featured-merchant-logo">
      <Link to={merchant.slug}>
        <img alt={`The ${merchant.name} Logo`} src={logoSrc} width="100%" height="100%" />
      </Link>
    </li>
  )
}

export default FeaturedMerchantLogo
