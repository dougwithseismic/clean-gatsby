import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/_int/seo'
import NavBar from '../components/Layout/NavBar'
import HeroRoot from '../components/Root/Hero'
import FeaturedMerchants from '../components/Root/FeaturedMerchants'
import FeaturedOffers from '../components/Root/FeaturedOffers'

import './style.css'

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <div className="content">
        {/* Nav Bar */}
        <NavBar />
        {/* Hero */}
        <HeroRoot />

        {/* Featured Offers */}
        <FeaturedOffers />
        
        {/* Featured Merchants */}
        <FeaturedMerchants />

        {/* Latest Vouchers */}
        <section className="latest-offers">
          <div className="container">
            <h3>Latest Voucher Codes & Deals</h3>
            <div className="latest-offer">1</div>
            <div className="latest-offer">2</div>
            <div className="latest-offer">3</div>
            <div className="latest-offer">4</div>
          </div>
        </section>

        {/* Footer */}
        <section className="footer">
          <div className="left-footer">Logo</div>
          <div className="middle-footer">
            <div>Merchants</div>
            <div>About</div>
            <div>Contact</div>
          </div>

          <div className="right-footer">
            <div className="social-link">Facebook</div>
            <div className="social-link">Instagram</div>
            <div className="social-link">Twitter</div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default IndexPage
