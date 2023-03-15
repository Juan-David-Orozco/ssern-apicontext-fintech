import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Navigation() {

  const [date, setDate] = useState(Date.now())

  const { userLogin, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setDate('')
    navigate("/")
  }

  if(!userLogin) {
    return(
      <div className="row m-1">
        <nav className="navbar bg-light rounded px-2 justify-content-between">
          <div className="px-1 text-center justify-content-center">
            <Link to="/" className="navbar-brand mx-auto" >
              Logo
            </Link>
          </div>
          <div className="px-1">
            <ul className="nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

  else if(userLogin.UserType === "customer") {
    return (
      <div className="row m-1 justify-content-center text-center">
        <nav className="navbar bg-light rounded px-2 justify-content-between">
          <div className="px-1 text-center my-2">
            <Link to="/" className="navbar-brand mx-auto" >
              Logo
            </Link>
          </div>
          <div className="col-10 mx-auto px-1 text-dark">
            <div className="col-10 mx-auto">
              <i className="fa fa-user px-1 mx-1"></i>
              <b>Username: </b>{userLogin.username}
            </div>
            <div className="col-10 my-1 mx-auto">
              <i className="fa fa-envelope px-1 mx-1"></i>
              <b>Email:</b>  {userLogin.email}
            </div>
            <div className="col-10 my-1 mx-auto">
              <i className="fa fa-calendar px-1 mx-1"></i>
              <b>Date:</b> {date}
            </div>
            <div className="col-12 col-sm-10 my-1 mx-auto">
              <ul className="nav justify-content-center">
                <li className="nav-item active mx-1">
                  <Link className="btn btn-sm btn-primary" to={'/home-admin'}>{userLogin.username}</Link>
                </li>
                <li className="nav-item mx-1">
                  <button type='button' className="btn btn-sm btn-danger" onClick={handleLogout}>Salir</button>
                </li>
                <li className="nav-item mx-1">
                  <Link to="/historico-customer" className="btn btn-sm btn-info">Historico</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  else if(userLogin.UserType === "admin") {
    return (
      <div className="row m-1 justify-content-center text-center">
        <nav className="navbar bg-light rounded px-2 justify-content-between">
          <div className="px-1 text-center my-2">
            <Link to="/" className="navbar-brand mx-auto" >
              Logo
            </Link>
          </div>
          <div className="col-12 col-sm-10 col-md-8 px-1 text-dark mx-auto">
            <div className="col-12 mx-auto">
              <i className="fa fa-user px-1 mx-1"></i>
              <b>ADMIN: </b>{userLogin.username}
            </div>
            <div className="col-12 my-1 mx-auto">
              <i className="fa fa-envelope px-1 mx-1"></i>
              <b>Email:</b>  {userLogin.email}
            </div>
            <div className="col-12 col-md-10 my-1 mx-auto">
              <ul className="nav justify-content-center">
                <li className="nav-item active mx-1">
                  <Link className="btn btn-sm btn-primary" to={'/home-admin'}>ADMIN: {userLogin.username}</Link>
                </li>
                <li className="nav-item mx-1">
                  <button type='button' className="btn btn-sm btn-danger" onClick={handleLogout}>Salir</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }


}