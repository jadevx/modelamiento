import mathImage from "../../../assets/img/2084541.png";
import { FaWaveSquare, FaInfinity, FaCalculator, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

export const Inicio = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Encabezado principal */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Bienvenido al Mundo de las Matemáticas</h1>
            <p className="lead">
              Explora conceptos fundamentales y avanzados con nosotros. Este sitio está diseñado para ayudarte a
              entender mejor temas como ecuaciones diferenciales, derivadas, integrales e interpolación.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mathImage} className="img-fluid" alt="Imagen de matemáticas" />
          </div>
        </div>
      </div>

      {/* Secciones con tarjetas */}
      <div className="container mt-5">
        <div className="row g-4">
          {/* Derivadas */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaCalculator size={30} className="text-success mb-2" />
                <h4 className="card-title">Derivadas</h4>
                <p className="card-text">
                  la derivada de una función es la razón de cambio instantánea con la que varía el valor de dicha
                  función matemática, según se modifique el valor de su variable independiente. La derivada de una
                  función es un concepto local, es decir, se calcula como el límite de la rapidez de cambio media de la
                  función en cierto intervalo, cuando el intervalo considerado para la variable independiente se torna
                  cada vez más pequeño. Por eso se habla del valor de la derivada de una función en un punto dado.
                </p>
                <img
                  src="/src/assets/img/Recta_tangente_y_derivada.svg.png"
                  alt="Representación de una Derivada"
                  className="img-fluid"
                />
                <p className="card-text">
                  La derivada de la función en el punto marcado es equivalente a la pendiente de la recta tangente.
                </p>
              </div>
            </div>
          </div>

          {/* Integrales */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaInfinity size={30} className="text-danger mb-2" />
                <h4 className="card-title">Integrales</h4>
                <p className="card-text">
                  La integración es un concepto fundamental del cálculo y del análisis matemático. Básicamente, una
                  integral es una generalización de la suma de infinitos sumandos, infinitesimalmente pequeños: una suma
                  continua. La integral es la operación inversa al diferencial de una función. El cálculo integral,
                  encuadrado en el cálculo infinitesimal, es una rama de las matemáticas en el proceso de integración o
                  antiderivación. Es muy común en la ingeniería y en la ciencia; se utiliza principalmente para el
                  cálculo de áreas y volúmenes de regiones y sólidos de revolución.
                </p>
                <img
                  src="/src/assets/img/250px-Integral_example.png"
                  alt="Representación de una Derivada"
                  className="img-fluid"
                />
                <p className="card-text">
                  La integral definida de una función representa el área limitada por la gráfica de la función, en un
                  sistema de coordenadas cartesianas con signo positivo cuando la función toma valores positivos y signo
                  negativo cuando toma valores negativos.
                </p>
              </div>
            </div>
          </div>
          {/* Metodos numericos */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaLaptopCode size={30} className="text-danger mb-2" />
                <h4 className="card-title">Metodos numericos</h4>
                <p className="card-text">
                  El análisis numérico o cálculo numérico es la rama de las matemáticas encargada de diseñar algoritmos
                  para simular aproximaciones de solución a problemas en análisis matemático. Se distingue del cómputo
                  simbólico en que no manipula expresiones algebraicas, sino números. El análisis numérico cobra
                  especial importancia con la llegada de los ordenadores. Los ordenadores son útiles para cálculos
                  matemáticos extremadamente complejos, pero en última instancia operan con números binarios y
                  operaciones matemáticas simples.
                </p>
                <img src="/src/assets/img/Numerical_integration_illustration,_step=1.svg.png" className="img-fluid" />
                <p className="card-text">
                  Ilustración de la integración numérica para la ecuación diferencial y'= y,y(0) = 1. Azul: el Método de
                  Euler, verde: el método del punto medio, rojo: la solución exacta, y = e^t. El tamaño del paso es h =
                  1.0
                </p>
              </div>
            </div>
          </div>

          {/* Interpolación */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <FaProjectDiagram size={30} className="text-warning mb-2" />
                <h4 className="card-title">Interpolación</h4>
                <p className="card-text">
                  En ingeniería y algunas ciencias es frecuente disponer de un cierto número de puntos obtenidos por
                  muestreo o a partir de un experimento y pretender construir una función que los ajuste. Otro problema
                  estrechamente ligado con el de la interpolación es la aproximación de una función complicada por una
                  más simple. Si tenemos una función cuyo cálculo resulta costoso, podemos partir de un cierto número de
                  sus valores e interpolar dichos datos construyendo una función más simple. En general, por supuesto,
                  no obtendremos los mismos valores evaluando la función obtenida que si evaluamos la función original,
                  si bien dependiendo de las características del problema y del método de interpolación usado la
                  ganancia en eficiencia puede compensar el error cometido.
                </p>
                <img src="/src/assets/img/Lagrange_polynomial.svg.png" className="img-fluid" />
                <p className="card-text">
                  Ilustración de la integración numérica para la ecuación diferencial y'= y,y(0) = 1. Azul: el Método de
                  Euler, verde: el método del punto medio, rojo: la solución exacta, y = e^. El tamaño del paso es h =
                  1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="container-fluid py-5"
        style={{
          backgroundColor: "#212121", // gris muy oscuro casi negro
          color: "#ccc", // gris claro para el texto
          textShadow: "none",
          margin: "0",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <div className="row">
          <div className="col-12 col-md">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
              style={{ color: "#ccc" }}
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
            </svg>
            <small className="d-block mb-3" style={{ color: "#777" }}>
              2025
            </small>
          </div>

          {/** Repetir las columnas, con links en gris claro y hover más claro **/}

          <div className="col-6 col-md">
            <h5 style={{ color: "#eee" }}>Derivacion</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Derivadas de funciones básicas.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}></a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Reglas de derivación (producto, cociente, cadena).
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Derivadas de funciones trigonométricas.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Derivadas implícitas.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Derivadas de funciones exponenciales y logarítmicas.
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5 style={{ color: "#eee" }}>Integracion</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Integración por sustitución.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Integración por partes.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Integración de fracciones parciales.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Integración de funciones trigonométricas.
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5 style={{ color: "#eee" }}>Metodos numericos</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Método de Newton-Raphson.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Método de Euler.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Método de bisección.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Método de Runge-Kutta.
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5 style={{ color: "#eee" }}>Interpolación</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Interpolación polinómica.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Interpolación por splines.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Interpolación de Lagrange.
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" style={{ color: "#bbb" }}>
                  Interpolación de Newton.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <style>{`
    a.link-secondary:hover {
      color: #fff !important;
      text-decoration: underline;
    }
  `}</style>
      </footer>
    </section>
  );
};
