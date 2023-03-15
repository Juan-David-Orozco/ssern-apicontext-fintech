import { useAuth } from '../context/authContext'

export function HomePage() {

  const { userLogin } = useAuth()

  console.log(userLogin)

  return (
    <>
      <div className="row bg-light rounded text-dark mx-1 my-3 py-4 justify-content-center">
        HomePage
      </div>
    </>
  )
}
