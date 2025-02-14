import '../App.css';
import backgroundImage from '../assets/backgroundImage.jpg'

function Header() {
    return (
      <header className="header" >
        <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
            <div className="container-fluid">
                <p>logo</p>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Nos randonnées</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#">Mes randos pref</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mon panier</a>
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