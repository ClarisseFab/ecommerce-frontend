import '../App.css';
import backgroundImage from '../assets/backgroundImage.jpg'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header className="header rounded" >
        <h1 className="header-title "><strong>Découvrez nos plus belles rando's</strong></h1>

        <div>
            <ul className="d-flex justify-content-around bg-light-subtle rounded  py-3 px-5">
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/" activeClassName="active">Toutes les randonnées</NavLink>
                </li>
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/wishlists" activeClassName="active">Mes randos pref</NavLink>
                </li>
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/shopping_carts" activeClassName="active">Mon panier</NavLink>
                </li>
            </ul>
        </div>
        {/* <div className="navbar navbar-expand-sm navbar-light navbar-lewagon rounded">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/products">Toutes les randonnées</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/wishlists">Mes randos pref</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shopping_carts">Mon panier</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
      </header>
    );
  }
  
  export default Header;