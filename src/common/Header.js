import React from 'react';

export default props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><b>Desafio do Código</b></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/">
              Início <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/jornada/">
              Jornadas
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/usuario/">
              Usuários
            </a>
          </li>

          <div className="vertical-divider">&nbsp;</div>
          <li className="nav-item ">
            <a className="nav-link" href="/sistema/">
              Sistema
            </a>
          </li>
          <div className="vertical-divider">&nbsp;</div>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Codewars
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a
                className="dropdown-item"
                href="/usuario/"
              >
                Usuários
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
