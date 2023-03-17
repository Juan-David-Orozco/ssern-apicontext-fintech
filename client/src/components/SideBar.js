import { useNavigate} from 'react-router-dom'
import { useAuth } from '../context/authContext'
import avatar from '../img/avatar.icon.png'

export function SideBar(props) {

  const { logout } = useAuth()

  const navigate = useNavigate()

  const handleShowComponents = ({target}) => {
    console.log(target.id)
    if(target.id === "user-info") {
      props.handleUserInfo(true)
      props.handleHome(false)
      props.handleHistorico(false)
    }
    else if(target.id === "home") {
      props.handleHome(true)
      props.handleUserInfo(false)
      props.handleHistorico(false)
    }
    else if(target.id === "historico") {
      props.handleHistorico(true)
      props.handleHome(false)
      props.handleUserInfo(false)

    }
    const toggleIcon = document.getElementById('sidebarMenu')
    toggleIcon.classList.remove('show')
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header>
      {/* SideBar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-dark">
        <div className="position-sticky">
          <div className="text-center mt-5">
            <img
              src={avatar}
              className="rounded-circle my-2"
              height="150"
              alt="Avatar"
              loading="lazy"
            />
            <br />
            <button className="btn btn-lg btn-primary my-3 px-4"
            onClick={handleShowComponents} id="user-info">User</button>
          </div>
          <hr className="text-white"/>
          <div className="row mx-auto justify-content-center mt-3">
            <div className='btn-group'>
              <button className="my-2 py-1 btn btn-md bg-secondary d-flex justify-content-evenly align-items-center text-white"
                onClick={handleShowComponents} id="home">
                <i className="fa fa-home"></i><span className="sidebar-customer">Home</span>
              </button>
            </div>
            <div className="btn-group">
              <button className="my-2 py-1 btn btn-md bg-primary d-flex justify-content-evenly align-items-center text-white"
                onClick={handleShowComponents} id="historico">
                <i className="fa fa-bar-chart-o"></i><span className="sidebar-customer">Historico</span>
              </button>
            </div>
            <div className="btn-group">
              <button className="my-2 py-1 btn btn-md bg-danger d-flex justify-content-evenly align-items-center text-white"
                onClick={handleLogout} id="logout">
                <i className="fa fa-sign-out"></i><span className="sidebar-customer">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="#!">
            <h3 className="my-auto py-0">Logo</h3>
            {/* <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt="MDB Logo"
              loading="lazy"
            /> */}
          </a>
          {/* Links */}
          <div className="ms-auto d-flex flex-row align-items-center my-auto">
            {/* Toggle button */}
            <button
              className="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
