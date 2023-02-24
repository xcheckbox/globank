import { useEffect, useReducer } from "react"
import { AuthContext } from "./authContext"
import { authReducer } from "./authReducer"

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { isAuthenticated: false }
}

export const AuthProvider = ({ children }) => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
}