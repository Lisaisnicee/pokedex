import { Link } from 'react-router-dom';
import '../styles/css/weather.css';
import logo from '../assets/img/logo.png';
const Navigation = ({ children }) => {
  return (
    <>
      {/* <header style={{ padding: "2%", backgroundColor: "lightgrey" }}> */}
      {/* Je suis un header */}
      {/* </header> */}

      <header role="banner">
        <img id="logo-main" src={logo} />
        <nav
          id="navbar-primary"
          className="navbar navbar-default"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbar-primary-collapse"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/pokemonList">Pokedex</a>
                </li>
                <li>
                  <a href="/searchMeteo">Météo</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* <ul> */}
      {/* <li> */}
      {/* <Link to="/">Home</Link> */}
      {/* </li> */}
      {/* <li> */}
      {/* <Link to="/pokemonList"><ul>Pokedex</ul></Link> */}
      {/* </li> */}
      {/* <Link to="/searchMeteo"><ul>Météo</ul></Link>  */}
      {/* <li> */}

      {/* </li> */}
      {/* </ul> */}

      {children}

      {/* <footer style={{ padding: "2%", backgroundColor: "lightgrey" }}> */}
      {/* Je suis un footer */}
      {/* </footer> */}
    </>
  );
};

export default Navigation;
