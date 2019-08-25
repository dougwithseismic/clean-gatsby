import React from 'react'

const VoucherContext = React.createContext({
    
})

export const UserProvider = VoucherContext.Provider
export const UserConsumer = VoucherContext.Consumer
export default VoucherContext