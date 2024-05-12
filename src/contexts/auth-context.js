import React, { useState } from "react"

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [page, setPage] = useState("home") // home, record, info
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, page, setPage, openMenu, setOpenMenu }}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider
export { AuthContext }