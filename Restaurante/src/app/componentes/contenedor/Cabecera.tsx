import { NavLink } from "react-router-dom";
import { rutasAplicacion } from "../../../constants/rutas";

export const Cabecera = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{ backgroundColor: "#3c3b5a" }}
    >
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand text-white fw-bold me-5" to="/">
          Mathesis
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-4 justify-content-start">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={rutasAplicacion.derivacion}>
                Derivación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={rutasAplicacion.integracion}>
                Integración
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={rutasAplicacion.interpolacion}>
                Interpolación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={rutasAplicacion.metodosNumericos}>
                Métodos Numéricos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={rutasAplicacion.calculadora}>
                Calculadora
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
