import React from 'react'

const UserContext = React.createContext("Maha")

const userProvider = UserContext.Provider
const userConsumer = UserContext.Consumer

export {userProvider, userConsumer}
export default UserContext