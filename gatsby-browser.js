// We're wrapping everything in our Providers so we can consume them on all pages

import React, {Fragment} from 'react'
import { ModalProvider } from './src/context/ModalContext'
import Modal from './src/components/common/Modal'

import './global.css'

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <Modal>
      <div className="oka">OKAY!</div>{' '}
    </Modal>{' '}
    {element}
  </ModalProvider>
)
