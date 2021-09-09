import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


function NavBar(item) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
         <Link to={`/`}><h1>Apple mek</h1></Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  categorias
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={`/category/${item.categoryid}`}><li><button>celulares</button> </li></Link>
                <Link to={`/category/${item.categoryid}`}><li><button>tablets</button></li></Link>
                <Link to={`/category/${item.categoryid}`}><li><button>computadoras</button></li></Link>
                <Link to={`/category/${item.categoryid}`}><li><button>accesorios</button></li></Link>
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
