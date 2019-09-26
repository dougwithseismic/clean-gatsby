import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../components/_int/seo'

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

  const metaTitlePlural = merchant.offers.length > 1 ? `${merchant.offers.length} Offers Live ` : 'One active offer'

  return (
    <Fragment>
      <SEO
        description={`Save at ${merchant.name} with our September 2019 ${merchant.discountTerm}s 👩‍🚀 - ${metaTitlePlural} - All codes are tested and live. Get our best ${merchant.name} offers today!`}
        title={`${merchant.name} ${merchant.discountTerm}s - Updated September 2019 🚀`}
      />

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
                {/* If there's markdown, show it  */}
                {merchant.markdown ? <MerchantMarkdown merchant={merchant} /> : <Fragment />}
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
