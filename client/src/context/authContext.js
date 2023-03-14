import { useContext, createContext, useEffect, useState } from 'react'
import { loginRequest } from '../api/auth'

const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) throw new Error("There is not auth provider")
  return context
}

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const result = await loginRequest(email, password)
    setUser(result.data.userLogin)
    return result
  }

  const logout = () => {
    setUser(null)
  }

  useEffect(() => {
    console.log("Provider Load")
  }, [])

  return (
    <authContext.Provider 
      value={{ user, login, logout }}
    >
      {children}
    </authContext.Provider>
  )
}