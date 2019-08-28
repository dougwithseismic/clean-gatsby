import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import VoucherDetails from '../components/voucher/VoucherDetails'
import MerchantHeader from '../components/merchant/MerchantHeader'

let merchant = {
  name: 'Theatre Tickets Direct',
  siteUrl: 'https://www.awin1.com/cread.php?awinmid=1936&awinaffid=322637'
}

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Theatre Tickets Direct Discount Codes" />
      <div className="content">
        <p>
          We've been partnered with Theatre Tickets Direct to offer an exclusive code not available anywhere else
          online. We don't have a fancy site, we don't ask for emails and we don't spam your inbox - all we do is
          deliver working discount codes as fast as possible.
        </p>
      </div>
    </Fragment>
  )
}

export default IndexPage
