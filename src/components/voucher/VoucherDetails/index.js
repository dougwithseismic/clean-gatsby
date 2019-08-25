import React from 'react'
import './style.css'
import GetCodeButton from '../GetCode'

const VoucherDetails = (props) => {
  return (
    <div className="offer-container">
      <div className="offer-content">
        <div className="media">
          <div className="media-detail">
            <p className="is-exclusive">Exclusive Code</p>
            <h3 className="offer-title">Save 6% Off at TheatreTicketsDirect.co.uk</h3>
            <p className="offer-description">
              This exclusive code will save you 6% Off all orders at TheatreTicketsDirect.co.uk - Grab the code using
              the button below and enter it at checkout. You won't find a better working code than this one! Valid until
              31st Dec. 2019
            </p>
            <p>Expires 31.12.19</p>
            <div className="get-code-button">
              <GetCodeButton url="https://www.awin1.com/cread.php?awinmid=1936&awinaffid=322637" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherDetails
