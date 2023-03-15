import { useAuth } from '../context/authContext'
import { useNavigate, Navigate } from 'react-router-dom'

export function Admin() {

  const { userLogin, logout } = useAuth()

  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  if(!userLogin) return (<Navigate to={'/login'} />)

  return (
    <div>
      <h3>Bienvenido Admin</h3>
      <div>{userLogin.username}</div>
      <div>{userLogin.email}</div>
      <button type='button' onClick={handleLogout} className='btn btn-danger'>Cerrar Sesión</button>
    </div>
  )
}
