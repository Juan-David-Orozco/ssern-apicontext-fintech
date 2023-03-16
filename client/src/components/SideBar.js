export function SideBar() {
  return (
    <header>
      {/* SideBar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-dark">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a href="#!" aria-current="true"
              className="list-group-item list-group-item-action py-2 ripple">
              <i className="fa fa-bar-chart-o fa-fw me-3"></i><span>Main dashboard</span>
            </a>
            <a href="#!" className="list-group-item list-group-item-action py-2 ripple active">
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
      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          {/* Brand */}
          <a className="navbar-brand" href="#!">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="25"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Search */}
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autocomplete="off"
              type="search"
              className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)'
            />
            <span className="input-group-text border-0"><i className="fa fa-search"></i></span>
          </form>
          {/* Links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* Notifications */}
            <li className="nav-item dropdown">
              <a
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#!"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#!">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">Something else here</a>
                </li>
              </ul>
            </li>
            {/* Avatar - User */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#!"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="22"
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
            </li>
            


          </ul>
        </div>
      
      </nav>
    </header>
  )
}
