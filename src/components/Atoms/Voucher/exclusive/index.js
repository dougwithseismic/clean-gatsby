import React from 'react'
import exclusiveIcon from '../../../../images/exclusive_icon.svg'

const exclusiveTag = (props) => {
  return (
    <picture>
    <img
    alt="The vouchernaut Exclusive Badge"
      src={exclusiveIcon}
      style={{
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    />

    </picture>
  )
}

export default exclusiveTag
