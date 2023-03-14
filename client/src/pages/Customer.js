import { useAuth } from '../context/authContext'
import { Navigate, useNavigate } from 'react-router-dom'

export function Customer() {

  const { user, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  if(!user) return <Navigate to={'/login'} />

  return (
    <div>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <button type='button' onClick={handleLogout} className='btn btn-danger'>Cerrar Sesión</button>
    </div>
  )
}
