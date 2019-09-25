import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import NavBar from '../../components/Layout/NavBar'
import MerchantHero from '../../components/MerchantPage/Hero'
import MerchantDescription from '../../components/MerchantPage/MerchantDescription'
import MainOfferBox from '../../components/MerchantPage/MainOfferBox'
import MerchantMarkdown from '../../components/MerchantPage/MerchantMarkdown'
import Footer from '../../components/Layout/Footer'

import './merchantPage.css'

const merchantPage = (props) => {
  console.log(props.data.gcms.merchant)
  const merchant = props.data.gcms.merchant
  return (
    <Fragment>
      <NavBar />
      <MerchantHero merchant={merchant} />
      <div className="merchant-offer-content">
        <div className="container">
          <MerchantDescription merchant={merchant} />

          <div className="offers-content container">
            <div className="offers-list">
              <MainOfferBox merchant={merchant} />
              <div className="all-offers">
                <div className="offer-headers">
                  <div className="header-left">Latest Voucher Codes</div>
                  <div className="header-right">Live Offers: {merchant.offers.length}</div>
                </div>

                {merchant.markdown ? (
                  <div className="merchant-markdown">
                    <MerchantMarkdown merchant={merchant} />
                  </div>
                ) : (
                  <Fragment />
                )}
              </div>
            </div>

            {/* Exclusive */}
            {/* Rest */}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

merchantPage.propTypes = {}

export default merchantPage
export const pageQuery = graphql`
  query MerchantBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    gcms {
      merchant(where: { slug: $slug }) {
        id
        name
        slug
        siteUrl
        siteName
        description
        richContent
        discountTerm
        markdown
        logo {
          height
          width
          url
          handle
        }
        offers {
          id
          title
          description
          startDate
          endDate
          offerUrl
          useCount
          code
          isExclusive
          merchant {
            id
            name
            siteUrl
          }
        }
      }
    }
  }
`
