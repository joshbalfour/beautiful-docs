import React from 'react'

const LangsContext = React.createContext(null)

export const LangsConsumer = LangsContext.Consumer
export const LangsProvider = LangsContext.Provider

export default LangsContext