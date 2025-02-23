import '../App.css';
import backgroundImage from '../assets/backgroundImage.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header rounded" >
        <h1 className="header-title ">Découvrez nos plus belles rando's</h1>

        <div>
            <ul className="d-flex justify-content-around bg-light-subtle rounded  py-3 px-5">
                <li className="nav-item px-2 active">
                    <Link className="nav-link" to="/products">Toutes les randonnées</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/wishlists">Mes randos pref</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/shopping_carts">Mon panier</Link>
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