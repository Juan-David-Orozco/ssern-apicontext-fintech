import { useAuth } from '../context/authContext'
import { Navigate, useNavigate } from 'react-router-dom'

export function Customer() {

  const { userLogin, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  if(!userLogin) return <Navigate to={'/login'} />

  if(userLogin.UserType === "customer") return <Navigate to={'/'} />

  if(userLogin.UserType === "admin") return <Navigate to={'/home-admin'} />

  return (
    <div>
      <div>{userLogin.username}</div>
      <div>{userLogin.email}</div>
      <button type='button' onClick={handleLogout} className='btn btn-danger'>Cerrar Sesión</button>
    </div>
  )
}
