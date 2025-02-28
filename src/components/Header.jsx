import '../App.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header className="header rounded" >
        <h1 className="header-title "><strong>Découvrez nos plus belles rando's</strong></h1>

        <div>
            <ul className="d-flex justify-content-around bg-light-subtle rounded  py-3 px-5">
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/" activeclassname="active">Toutes les randonnées</NavLink>
                </li>
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/wishlists" activeClassName="active">Mes randos pref</NavLink>
                </li>
                <li className="nav-item px-2">
                    <NavLink className="nav-link" to="/shopping_carts" activeClassName="active">Mon panier</NavLink>
                </li>
            </ul>
        </div>
      </header>
    );
  }
  
  export default Header;