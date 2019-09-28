import React, { useState, useEffect, Fragment } from 'react'
import { Router, navigate } from '@reach/router'
import axios from 'axios'

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
      console.log(result)
      if (result.data.data.offer !== null) {
        setOfferDetails(result.data.data.offer)
        setLoading(false)
        // do GA events etc
      } else {
        console.log('DIDNT FIND')
        window.history.back()
      }
    })
  }, [])

  if (loading) {
    return <Fragment />
  }

  setTimeout(navigate(offerDetails.merchant.siteUrl, { replace: true }), 2500)

  return <div>Cool - We're redirecting you to {offerDetails.merchant.name} </div>
}

const Details = () => {
  return <div>Details</div>
}

const OutLink = (props) => {
  return (
    <Router>
      <OfferOut path="/out/:id" />
      <Details path="/out/store/:id" />
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
