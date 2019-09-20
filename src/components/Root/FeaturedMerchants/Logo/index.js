import React from 'react'
import './style.css'
import { Link } from 'gatsby'

// Circular logos featured on '/' in the Featured Merchant section
const FeaturedMerchantLogo = (props) => {
  const merchant = props.merchant
  const logoSrc = `https://media.graphcms.com/resize=w:80,h:80,fit:scale//output=format:webp/${merchant.logo.handle}`

  return (
    <Link to={merchant.slug}>
      <img className="featured-merchant-logo" alt={`The ${merchant.name} Logo`} src={logoSrc} />
    </Link>
  )
  
}

export default FeaturedMerchantLogo
