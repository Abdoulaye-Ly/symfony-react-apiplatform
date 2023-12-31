import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Symfony-React-App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/customers">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/invoices">
                Factures
              </a>
            </li>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Inscription
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="btn btn-success">
                  Connexion!
                </a>
              </li>
              <li className="nav-item">
               <a href="#" className="btn btn-danger">Déconnexion</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
