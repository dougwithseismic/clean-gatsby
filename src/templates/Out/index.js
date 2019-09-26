import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../../components/_int/seo'
import './out.css'

// This page cloaks all links and forwards them to their correct destination, performing analytics along the way.
const merchantPage = (props) => {

  return (
    <Fragment>
      <SEO />
    </Fragment>
  )
}

merchantPage.propTypes = {}

export default merchantPage
export const pageQuery = graphql`
  query Oohlala($slug: String!) {
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
