import '../App.css';
import backgroundImage from '../assets/backgroundImage.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header" >
        <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
            <div className="container-fluid">
                <p>logo</p>

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
        </div>
          <h1>Découvrez nos plus belles rando's</h1>
      </header>
    );
  }
  
  export default Header;