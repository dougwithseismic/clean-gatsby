import React, { useState, useContext, Fragment } from 'react'
import PropTypes from 'prop-types'

import MerchantDetails from '../../components/MerchantPage/MerchantDetails'
import OfferBox from '../../components/MerchantPage/OfferBox'
import OfferModal from '../../components/Common/Modal/OfferModal'
import Modal from '../../components/Common/Modal'

import ModalContext from '../../context/ModalContext'

const componentTest = (props) => {
  const filters = [ 'all', 'code', 'deal' ]
  const modalContext = useContext(ModalContext)

  const merchant = {
    name: 'Theatre Tickets Direct',
    discountTerm: 'Promo Code'
  }

  const offers = [
    {
      title: 'Save 6% Off',
      description:
        'Our exclusive TheatreTicketsDirect.co.uk promo code grabs you a massive 6% off all orders. You wont find better than that.',
      isExclusive: true,
      merchant: {
        name: 'TheatreTicketsDirect.co.uk'
      },
      useCount: 23,
      type: 'code'
    },
    {
      title: '3% Off',
      description: 'A boring generic code that everyone else has. 3% Peasant talk. Dont bother using it.',
      isExclusive: false,

      merchant: { name: 'TheatreTicketsDirect.co.uk' },
      useCount: 1,
      type: 'code'
    },
    {
      title: 'Up to 50% Off Lion King at Pontins',
      description: 'Literally not going to do anytthing ith this offer, not even sort out the spelling shit.',
      isExclusive: false,

      merchant: { name: 'TheatreTicketsDirect.co.uk' },
      useCount: 23,
      type: 'deal'
    }
  ]

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
    <div>
      <MerchantDetails merchant={merchant} />
      <div
        className="rgf"
        onClick={() => {
          modalContext.spitGarbage()
        }}
      >
        EROGKEROGK SHIT SPLIT
      </div>

      {filters.map((filter) => {
        return (
          <div key={filter} onClick={() => handleFilter(filter)}>
            Filter Button: {filter}
          </div>
        )
      })}

      {filteredOffers.map((offer) => {
        return <OfferBox offer={offer} />
      })}

      <Modal>
        <OfferModal />
      </Modal>
    </div>
  )
}

componentTest.propTypes = {}

export default componentTest
