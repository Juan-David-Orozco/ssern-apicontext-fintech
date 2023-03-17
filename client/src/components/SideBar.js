export function SideBar() {




  return (
    <header>
      {/* SideBar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-dark">
        <div className="position-sticky">
          <div className="text-center mt-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              className="rounded-circle my-2"
              height="150"
              alt="Avatar"
              loading="lazy"
            />
            <br />
            <button className="btn btn-lg btn-primary my-3 px-4">User</button>
          </div>
          <hr className="text-white"/>

          {/* <div className="list-group list-group-flush mx-3 my-4 pt-5 px-2">
            <a href="#!" className="list-group-item list-group-item-action py-3 px-auto my-2 ripple">
              <i className="fa fa-bar-chart-o fa-fw me-3"></i><span>Main dashboard</span>
            </a>
            <a href="#!" aria-current="true" className="list-group-item list-group-item-action py-3 ripple active my-2">
              <i className="fa fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
            </a>
          </div> */}

          {/* <div className="row d-flex flex-column align-items-center justify-content-evenly text-white text-center">
            <a href="#!" aria-current="true" className="bg-light list-group-item py-3 my-2 ripple d-flex justify-content-evenly align-items-center">
              <i className="fa fa-home fa-2x"></i><span className="text-lg">Home</span>
            </a>
            <a href="#!" aria-current="true" className="list-group-item py-3 my-2 ripple d-flex justify-content-evenly align-items-center">
              <i className="fa fa-bar-chart-o fa-1.5x"></i><span>Historico</span>
            </a>
            <a href="#!" className="list-group-item py-3 ripple my-2 d-flex justify-content-evenly align-items-center">
              <i className="fa fa-sign-out fa-1.5x mr-2"></i><span>Salir</span>
            </a>
          </div> */}

          <ul className="nav flex-column mt-4 mb-3 pt-3 px-2">
            <li className="nav-item my-2">
              <a className="nav-link active d-flex justify-content-evenly align-items-center" aria-current="page" href="#!">
                <i className="fa fa-home"></i><span className="sidebar-customer">Home</span>
              </a>
            </li>
            <li className="nav-item my-2">
              <a className="nav-link d-flex justify-content-evenly align-items-center" aria-current="page" href="#!">
                <i className="fa fa-bar-chart-o"></i><span className="sidebar-customer">Historico</span>
              </a>
            </li>
            <li className="nav-item my-2">
              <a className="nav-link d-flex justify-content-evenly align-items-center" aria-current="page" href="#!">
                <i className="fa fa-sign-out"></i><span className="sidebar-customer">Salir</span>
              </a>
            </li>
          </ul>

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
            {/* Avatar - User 
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#!"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="20"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#!">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">Logout</a>
                </li>
              </ul>
            </li>*/}
          </div>

        </div>
      </nav>
    </header>
  )
}
