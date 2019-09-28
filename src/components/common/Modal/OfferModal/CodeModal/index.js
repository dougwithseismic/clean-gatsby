import React, { useContext, Fragment } from 'react'
import ModalContext from '../../../../../context/ModalContext'
import { handleStoreVisit } from '../../../../../utility/redemptions/Helpers'

import './style.css'

const CodeModal = (props) => {
  const modalContext = useContext(ModalContext)
  const offer = modalContext.dealContent

  return (
    <Fragment>
      <div className="offer-modal-content">
        <div className="offer-modal-detail">
          <div className="offer-modal-type">
            {offer.isExclusive ? `Exclusive ${offer.offerType}` : offer.offerType}{' '}
          </div>
          <h1>{`${offer.title} at ${offer.merchant.name}`}</h1>
          <p>Copy the code below and enter at checkout to save at {offer.merchant.name}</p>
          <div className="code-capture">{offer.code}</div>

          {offer.description ? <p>{offer.description}</p> : <Fragment />}
        </div>

        <div className="offer-modal-buttons">
          <a href={`/out/store/${offer.merchant.id}`} className="redeem-link center" target="_blank" rel="noopener">
            <div className="button fuschia">Go to store</div>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

CodeModal.propTypes = {}

export default CodeModal
