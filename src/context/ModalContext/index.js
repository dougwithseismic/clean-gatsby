import React, { createContext, useState } from 'react'

// Make sure to reference everything in default state or when you come to build with Gatsby, you'll get a fuckload of variable undefined issues.
const defaultState = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  toggleModal: () => {},
  spitGarbage: () => {
    console.log('oertkheo;krgork')
  }
}
const ModalContext = createContext(defaultState)

const ModalProvider = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ dealContent, setDealContent] = useState(null)

  const { children } = props

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    console.log("I OPEN THE MODAL HERE")
  }

  const spitGarbage = () => {
    console.log('oertkheo;krgork')
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        spitGarbage,
        dealContent,
        setDealContent
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext

export { ModalProvider }
