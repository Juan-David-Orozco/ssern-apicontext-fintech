import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navbar bg-light justify-content-between fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          <h3 className="my-auto py-0">Logo</h3>
        </Link>
        <div className="px-1">
          <ul className="nav justify-content-end">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}