// We're wrapping everything in our Providers so we can consume them on all pages

import React from 'react'
import { ModalProvider } from './src/context/ModalContext'
import './global.css'

require('typeface-questrial')


export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    {element}
  </ModalProvider>
)