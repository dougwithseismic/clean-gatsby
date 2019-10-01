import React, { useState, useEffect, Fragment } from 'react'
import { Router, navigate } from '@reach/router'
import axios from 'axios'

import SEO from '../../components/_int/seo'
import NavBar from '../../components/Layout/NavBar'
import CodeRedeem from '../../components/Out/Offer/CodeRedeem'

import './style.css'

const getCID = () => {
  try {
    var trackers = window.ga.getAll()
    var i, len
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') === 'UA-146396173-1') {
        return trackers[i].get('clientId')
      }
    }
  } catch (e) {}
  return 'false'
}

const OfferOut = ({ id }) => {
  const [ loading, setLoading ] = useState(true)
  const [ offerDetails, setOfferDetails ] = useState()

  useEffect(() => {
    // Checks GraphCMS to see if the id exists and if so, launches.
    axios({
      url: 'https://api-euwest.graphcms.com/v1/cjzrdgkoh3ujn01g3gxtuckky/master',
      method: 'post',
      data: {
        query: `
      query GetData($offerId: ID!){
        offer(where: {id: $offerId}) {
            id
            title
            description
            startDate
            endDate
            offerType
            offerUrl
            useCount
            code
            isExclusive
            merchant {
              name
              siteUrl
              slug
              logo {
                height
                width
                url
                handle
              }
      
          }
        }
      }
        `,
        variables: {
          offerId: id
        }
      }
    }).then((result) => {
      if (result.data.data.offer !== null) {
        setOfferDetails(result.data.data.offer)
        setLoading(false)
      } else {
        window.history.back()
      }
    })
  }, [])

  if (loading) {
    return (
      <Fragment>
        <NavBar />
        <SEO title="Please wait..! Activating Code." />
      </Fragment>
    )
  }

  const CID = getCID()
  let finalUrl = CID
    ? offerDetails.merchant.siteUrl.split('&p=').join(`&clickref=${CID}&`)
    : offerDetails.merchant.siteUrl

  //setTimeout(navigate(finalUrl, { replace: true }), 2500)
  setTimeout(() => navigate(finalUrl, { replace: true }), 2500)

  return (
    <Fragment>
      <NavBar />
      <SEO title={`Activating Code: ${offerDetails.merchant.name} - ${offerDetails.title}`} />
      <CodeRedeem offerDetails={offerDetails} />
    </Fragment>
  )
}

const MerchantOut = ({ id }) => {
  const [ loading, setLoading ] = useState(true)
  const [ merchantDetails, setMerchantDetails ] = useState()

  useEffect(() => {
    // Checks GraphCMS to see if the id exists and if so, launches.
    axios({
      url: 'https://api-euwest.graphcms.com/v1/cjzrdgkoh3ujn01g3gxtuckky/master',
      method: 'post',
      data: {
        query: `
      query GetMerchant($merchantId: ID!){
        merchant(where: {id: $merchantId}) {
              name
              siteUrl
              slug
              logo {
                height
                width
                url
                handle
          }
        }
      }
        `,
        variables: {
          merchantId: id
        }
      }
    }).then((result) => {
      console.log(result)
      if (result.data.data.offer !== null) {
        setMerchantDetails(result.data.data.merchant)
        setLoading(false)

        const CID = getCID()
        let finalUrl = CID
          ? result.data.data.merchant.siteUrl.split('&p=').join(`&clickref=${CID}&`)
          : result.data.data.merchant.siteUrl

        setTimeout(() => navigate(finalUrl, { replace: true }), 2500)

        // do GA events etc
      } else {
        console.log('DIDNT FIND')
        window.history.back()
      }
    })
  }, [])

  if (loading) {
    return (
      <Fragment>
        <NavBar />
        <SEO title={`Visiting Store - Please wait! `} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <SEO title={`Visiting Store: ${merchantDetails.name}`} />
    </Fragment>
  )
}

const OutLink = (props) => {
  return (
    <Router>
      <OfferOut path="/out/:id" />
      <MerchantOut path="/out/store/:id" />
    </Router>
  )
}

// export const pageQuery = graphql`
//   query GetOfferId($id: ID!) {
//     gcms {
//       offer(where: { id: $id }) {
//         id
//         merchant {
//           name
//           siteUrl
//           siteName
//         }
//         code
//         offerType
//       }
//     }
//   }
// `

export default OutLink
