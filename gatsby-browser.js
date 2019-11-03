// We're wrapping everything in our Providers so we can consume them on all pages

import React, { Fragment, useContext } from 'react'
import './global.css'

export const wrapRootElement = ({ element }) => (
  <div className="content">
    {element}
  </div>
)
