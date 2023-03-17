import { useAuth } from '../context/authContext'
import { Navigation } from '../components/Navigation'

export function HomePage() {

  const { userLogin } = useAuth()

  console.log(userLogin)

  return (
    <>
      <Navigation/>
      <div className="container-fluid rounded text-dark my-5 py-4 justify-content-center vh-100">
        <div className="row mx-auto align-items-center text-center">
          <p>HomePage</p>
        </div>
      </div>
    </>
  )
}
