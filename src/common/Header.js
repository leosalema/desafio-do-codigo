import React, {Component} from 'react';

class Header extends Component {
  constructor (props) {
    super (props);

    this.state = {showMenu: false};
  }

  handleClick () {
    this.setState({showMenu: !this.state.showMenu});
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><b>Desafio do Código</b></a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => this.handleClick()}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {this.state.showMenu
          ? <div
              className="navbar-collapse collapse show"
              id="navbarSupportedContent"
            >
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
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Codewars
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/jornada/">Jornadas</a>
                    <a className="dropdown-item" href="/usuario/">Usuários</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/sistema/">Sistema</a>
                  </div>
                </li>
              </ul>
            </div>
          : <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/">
                    Início <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/jornadas/">
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
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Codewars
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/jornadas/">Jornadas</a>
                    <a className="dropdown-item" href="/usuario/">Usuários</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/sistema/">Sistema</a>
                  </div>
                </li>
              </ul>
            </div>}
      </nav>
    );
  }
}

export default Header;
