export function SideBar() {
  return (
    <header>
      {/* SideBar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-dark">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a href="#!" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-bar-chart-o fa-fw me-3"></i><span>Main dashboard</span>
            </a>
            <a href="#!" aria-current="true" className="list-group-item list-group-item-action py-2 ripple active">
              <i className="fa fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
            </a>
            <a href="#!" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-lock fa-fw me-3"></i><span>Password</span>
            </a>
            <a href="#!" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-folder-open fa-fw me-3"></i><span>Analytics</span>
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="#!">
            <h3 className="my-auto">Logo</h3>
            {/* <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt="MDB Logo"
              loading="lazy"
            /> */}
          </a>

          
          {/* Links */}
          <div className="ms-auto d-flex flex-row align-items-center">
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
