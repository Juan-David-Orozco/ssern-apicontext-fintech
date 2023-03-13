import { useContext, createContext, useEffect, useState } from 'react'
import { loginRequest } from '../api/auth'

const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) throw new Error("There is not auth provider")
  return context
}

export function AuthProvider({children}) {

  const [user, setUser] = useState()

  const login = async () => {
    const result = await loginRequest()
    
    setUser(result)
  }

  useEffect(() => {
    console.log("Provider Load")
  }, [])

  return (
    <authContext.Provider 
      value={{ user, login }}
    >
      {children}
    </authContext.Provider>
  )
}