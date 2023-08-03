import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export function Navigation() {

  const { userLogin } = useAuth()
  console.log(userLogin)

  if(!userLogin) {
    return (
      <nav className="navbar bg-light justify-content-between fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
            <h3 className="logo my-auto py-0">Logo</h3>
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}