import React from 'react'
import './style.css'
import GetCodeButton from '../GetCode'

const VoucherDetails = (props) => {
  return (
    <div className="offer-container">
      <div className="offer-content">
        <div className="media">
          <div className="media-detail">
            {/* <p className="is-exclusive">Exclusive Code</p> */}
            <h3 className="offer-title">
              {props.offer.title} at {props.merchant.name}
            </h3>
            <p className="offer-description">
              {props.offer.description}
            </p>
            {/* <p>Expires {props.offer.endDate}</p> */}
            <div className="get-code-button">
              <GetCodeButton merchant={props.merchant} offer={props.offer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherDetails
