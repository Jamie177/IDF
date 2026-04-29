import logoImg from '../assets/logo.jpg';
import '../assets/styles/navbar.css';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        
        {/* LOGO → goes to homepage */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logoImg} alt="Logo" className="site-logo me-2" />
        </Link>
        
        {/* Hamburger Menu */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            {/* SCROLL LINKS */}
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#home">
                Home
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#about">About Us</HashLink>
            </li>

            {/* PROJECTS (ROUTED PAGES) */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Projects
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/boreholes">
                    Borehole Drilling
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/qurbaan">
                    Qurbaan Distribution
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/iftar">
                    Food Distribution
                  </Link>
                </li>
              </ul>
            </li>

            {/* SCROLL */}
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#contact">
                Contact
              </HashLink>
            </li>

            {/* CTA */}
            <li className="nav-item ms-lg-3">
              <button className="btn donate-btn">
                Donate Now
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}