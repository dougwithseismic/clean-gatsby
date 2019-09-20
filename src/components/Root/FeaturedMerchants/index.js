import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import PropTypes from 'prop-types'
import './style.css'

import FeaturedMerchantLogo from './Logo'

const FeaturedMerchants = (props) => {
  const data = useStaticQuery(graphql`
    query featuredMerchants {
      gcms {
        merchants(where: { isFeatured: True }) {
          id
          slug
          name
          logo {
            height
            width
            url
            handle
          }
        }
      }
    }
  `)
  console.log(data)
  const featuredMerchantList = data.gcms.merchants
  featuredMerchantList.length = 9

  return (
    <section className="featured-merchants">
      <div className="container">
        <h3>Featured merchants</h3>
        <div className="featured-merchants-view-all">View all merchants</div>
        <div className="merchant-box">
          {/* Multiplying it because I dont have 4 merchants in db */}
          {featuredMerchantList.map((merchant, index) => <FeaturedMerchantLogo merchant={merchant} key={index} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
          {featuredMerchantList.map((merchant) => <FeaturedMerchantLogo merchant={merchant} />)}
        </div>
      </div>
    </section>
  )
}

FeaturedMerchants.propTypes = {}

export default FeaturedMerchants
