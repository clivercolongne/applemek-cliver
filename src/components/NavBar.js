import CartWidget from "./CartWidget"


function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h1>Apple mek</h1>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">celulares</a></li>
                  <li><a class="dropdown-item" href="#">tablets</a></li>
                  <li><a class="dropdown-item" href="#">computadoras</a></li>
                  <li><a class="dropdown-item" href="#">accesorios</a></li>
                </ul>
              </li>
            </ul>
            <div> 
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavBar
