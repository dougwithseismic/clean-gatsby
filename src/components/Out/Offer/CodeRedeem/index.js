import React, { Fragment } from 'react'
import './style.css'

import greenVouchernaut from '../../../../assets/green_vouchernaut.svg'

const CodeRedeem = ({ offerDetails }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1em' }}>
      <div className="redeem-out-box container">
        <div className="naut-confirm">
          <picture>
            <img
              alt="A confirmation Icon"
              src={greenVouchernaut}
              style={{
                maxWidth: '150px',
                maxHeight: '150px',
                borderRadius: '50%'
              }}
            />
          </picture>{' '}
        </div>
        <h1 className="redeem-out-title">{`Please wait, we're taking you to ${offerDetails.merchant.name}..`}</h1>
        <p>{`${offerDetails.title} at ${offerDetails.merchant.name}`}</p>

        {offerDetails.offerType === 'Code' ? (
          <Fragment>
            <div className="code-capture">{offerDetails.code}</div>
            <p className="redeem-out-info">
              Complete your purchase and add the code at checkout. Don't forget to copy the code from your vouchernaut
              tab
            </p>
          </Fragment>
        ) : (
          <Fragment />
        )}
      </div>
    </div>
  )
}

export default CodeRedeem
