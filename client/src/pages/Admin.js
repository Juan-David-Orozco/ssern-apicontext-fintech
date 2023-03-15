import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import { AdminTabs } from '../components/AdminTabs'

export function Admin() {

  const { userLogin } = useAuth()

  if(!userLogin) return (<Navigate to={'/login'} />)

  const tabs = [
    {
      nombre: 'dashboard',
      icono: 'fa-bar-chart',
      contenido: 'login'
    },
    {
      nombre: 'customers',
      icono: 'fa-group',
      contenido: 'customers'
    },
    {
      nombre: 'anticipos',
      icono: 'fa-building',
      contenido: 'anticipos'
    },
    {
      nombre: 'archivo',
      icono: 'fa-file',
      contenido: 'archivo'
    },
  ]

  return (
    <AdminTabs tabIndexActive={0} tabs={tabs} />
  )
}
