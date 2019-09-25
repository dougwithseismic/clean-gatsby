// We're wrapping everything in our Providers so we can consume them on all pages

import React from 'react'
import { ModalProvider } from './src/context/ModalContext'
import './global.css'

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <div
      style={{
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          paddingBottom: '300px'
        }}
      >
        {element}
      </div>
    </div>
  </ModalProvider>
)
