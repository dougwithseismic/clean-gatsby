import React, { useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import './merchantPage.css'

import Layout from '../../components/Common/Layout'
import SEO from '../../components/seo'

import MerchantDetails from '../../components/MerchantPage/MerchantDetails'
import OfferBox from '../../components/MerchantPage/OfferBox'
import OfferModal from '../../components/Common/Modal/OfferModal'
import Modal from '../../components/Common/Modal'

import ModalContext from '../../context/ModalContext'

const MerchantPageTemplate = (props) => {
  console.log('these are props', props)
  const filters = [ 'all', 'codes' ]

  const merchant = props.data.gcms.merchant
  const offers = merchant.offers

  // This logic allows us to filter our codes by their type - A prerequisite for vouchersites according to some governing body
  const [ currentFilter, setCurrentFilter ] = useState('all')

  let filteredOffers =
    currentFilter !== 'all'
      ? offers.filter((obj) => {
          return obj.type === currentFilter
        })
      : offers

  const handleFilter = (key) => {
    setCurrentFilter(key)
  }

  return (
    <Fragment>
      <Layout>
        <SEO title={`${merchant.name} ${merchant.discountTerm}s 2019`} />

        <MerchantDetails merchant={merchant} />

        <section className="main-offer-content">
          <div className="left-content">
            <div className="offer-stats">
              <div className="available-offers content-box">{merchant.offers.length} Deals Live</div>

              {filters.map((filter) => {
                return (
                  <div className="filter-box content-box" key={filter} onClick={() => handleFilter(filter)}>
                    {filter}
                  </div>
                )
              })}
            </div>

            {filteredOffers.map((offer) => {
              return <OfferBox offer={offer} />
            })}
          </div>
          <div className="right-content">
            <div className="merchant-description white-box">
              <h3>
                Active {merchant.name} Discount Codes / {merchant.discountTerm}s live in Sept 2019{' '}
              </h3>
              <span className="author">By Sarah - Brand Expert</span>
              <p>
                Taking in a West End show, a beautifully-performed ballet, or a play can be one of the best ways to
                spend an evening in London. With Theatre Tickets Direct, you can get some exceptional deals on highly
                sought after West End performances, including hugely popular shows like The Lion King, Wicked and Book
                of Mormon.
              </p>

              <p>
                Good seats can come even cheaper when you use a Theatre Tickets Direct promo code to make your booking
                online! Whether you want to see a critically acclaimed stage production or a fun musical your family
                will love, you will find the best tickets at the best prices at Theatre Tickets Direct.
              </p>
            </div>
            <div className="trivia-box white-box">

              <h3>Did you know?</h3>
              <p>
                If you are planning a trip to London, you can book with Theatre Tickets Direct to have your tickets left
                with the concierge at your hotel. You can pick them up as you check in, to be sure you'll have them
                ready for that special evening! Alternatively, tickets can be sent to your home by special delivery.{' '}
              </p>
            </div>
          </div>
        </section>

        <Modal>
          <OfferModal />
        </Modal>
      </Layout>
    </Fragment>
  )
}

MerchantPageTemplate.propTypes = {}

export default MerchantPageTemplate

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
