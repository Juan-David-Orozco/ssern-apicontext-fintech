import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import avatar from '../img/avatar.icon.png'
import { Link } from 'react-router-dom'

export function SideBar() {

  const { logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header>
      {/* SideBar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-dark">
        <div className="position-sticky mt-3">

          <div className="nav flex-column justify-content-center text-center">
            <img
              src={avatar}
              className="rounded-circle my-2 py-4 px-3 mx-auto"
              height="180"
              alt="Avatar"
              loading="lazy"
            />
            <Link className="btn btn-primary btn-md" id="user-info" to="/home-customer/user">User</Link>
          </div>

          <hr className="text-white"/>

          <div className="list-group list-group-flush mx-3 md-mx-5 mt-5" id='navMenu'>
            <Link className="list-group-item list-group-item-action active py-2 ripple"
              to="/home-customer"
            ><i className="fa fa-home"></i><span>Home</span></Link>
            <Link className="list-group-item list-group-item-action py-2 ripple"
              to="/home-customer/historico"
            ><i className="fa fa-bar-chart-o"></i><span>Historico</span></Link>
            <Link className="list-group-item list-group-item-action bg-danger py-2 text-white"
              onClick={handleLogout} id="logout"
            ><i className="fa fa-sign-out"></i><span>Salir</span>
            </Link>
          </div>
          {/* <ul class="nav flex-column bg-light mx-3 mt-4">
              <li class="nav-item">
                <Link className="nav-link active py-2"
                to="/home-customer"
                ><i className="fa fa-home"></i><span>Home</span></Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link py-2"
                to="/home-customer/historico"
                ><i className="fa fa-bar-chart-o"></i><span>Historico</span></Link>
              </li>
            </ul> */}

        </div>
      </nav>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <h3 className="my-auto py-0">Logo</h3>
            {/* <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt="MDB Logo"
              loading="lazy"
            /> */}
          </Link>
          {/* Toggle button */}
          <button
            className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          {/* Links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <a
                className="d-flex nav-link dropdown-toggle hidden-arrow align-items-center"
                href="#!" id="navbarDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false"
              ><i class="fa fa-user-circle-o"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/home-customer">Home</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">Register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
