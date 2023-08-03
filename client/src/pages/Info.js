import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { SideBar } from '../components/SideBar'

export function Info() {

  const { userLogin } = useAuth()

  if(!userLogin) return (<Navigate to={'/login'} />)

  return (
    <>
      <SideBar/>
      <main>
        <div className="container-fluid vh-100 ">
          <div className="row align-items-center text-white h-100 mx-auto ">
            Info
          </div>
        </div>
      </main>
    </>
  )
}
