// We're wrapping everything in our Providers so we can consume them on all pages

import React, { Fragment, useContext } from 'react'
import { ModalProvider, ModalContext } from './src/context/ModalContext'
import Modal from './src/components/common/Modal'
import OfferModal from './src/components/common/Modal/OfferModal'

import './global.css'

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <Modal>
      <OfferModal />
    </Modal>{' '}
    {element}
  </ModalProvider>
)
