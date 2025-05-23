import { useState } from "react";
import mathImage from "../../../assets/img/MetodonumericosICO.png";

export const Metodosnumericos = () => {
  const [mostrarPreguntas, setMostrarPreguntas] = useState(false);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState<string | null>(null);

  const preguntas = [
    {
      id: "p1",
      pregunta: "¿Cuál es la diferencia entre el método de Euler y el de Runge-Kutta?",
      respuesta: (
        <>
          <p>Comparación entre los dos métodos:</p>
          <a>
            El método de Euler es simple pero menos preciso; calcula la siguiente posición basándose únicamente en la pendiente inicial. El método de Runge-Kutta (RK4), en cambio, utiliza múltiples evaluaciones dentro del mismo paso para obtener una mejor estimación, logrando mayor precisión.
          </a>
          <img src="src/assets/img/" alt="Euler vs RK4" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p2",
      pregunta: "¿Cuándo es mejor usar Runge-Kutta sobre Euler?",
      respuesta: (
        <>
          <p>
            El método de Runge-Kutta es preferido cuando se requiere una mayor precisión en los cálculos, especialmente en problemas donde las pendientes cambian rápidamente. Aunque es más costoso computacionalmente que Euler, su precisión compensa ese costo en la mayoría de los casos prácticos.
          </p>
          <img src="src/assets/img/" alt="Uso de RK4" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p3",
      pregunta: "¿Por qué son importantes los métodos numéricos?",
      respuesta: (
        <>
          <ol>
            <li>Permiten resolver ecuaciones diferenciales que no tienen solución analítica.</li>
            <li>Son aplicables a problemas reales en física, ingeniería, economía y más.</li>
            <li>Proveen soluciones aproximadas controlando el error.</li>
            <li>Adaptables a modelos complejos de múltiples variables.</li>
            <li>Son la base de muchos simuladores y software científico.</li>
          </ol>
          <img src="src/assets/img/importanciaMetodoEC.jpg" alt="Importancia" className="img-fluid my-3" />
        </>
      ),
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Aprende Métodos Numéricos</h1>
            <p className="lead">
              Los métodos numéricos permiten encontrar soluciones aproximadas a problemas matemáticos complejos,
              especialmente útiles cuando no es posible obtener soluciones exactas de manera analítica.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mathImage} className="img-fluid" alt="Métodos numéricos" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">¿Qué son los Métodos Numéricos?</h2>
        <p className="lead text-center">
          Son técnicas que aproximan soluciones numéricas a ecuaciones matemáticas. Se aplican en diversos campos para
          resolver problemas donde las soluciones exactas son imposibles o imprácticas.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/MetodoEulerEcuacion.png"
              alt="Euler"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Método de Euler</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/RungeKuttaEcuaciones.png"
              alt="RK4"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Runge-Kutta Orden 4</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/MetodonumericosEC.png"
              alt="Importancia"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Metodos numericos</h6>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-center mb-4">Videos Recomendados</h2>
        <div className="row">
          {[
            {
              title: "Método de Euler",
              videoId: "https://www.youtube.com/watch?v=trlBFQXGS7A",
            },
            {
              title: "Runge-Kutta Orden 4",
              videoId: "https://www.youtube.com/watch?v=-1aNhFO1TcQ",
            },
            {
              title: "Aplicaciones de Métodos Numéricos",
              videoId: "https://www.youtube.com/watch?v=L1YOAi8ozJ4",
            },
          ].map((video, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId.split("v=")[1]}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{video.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="container mt-5">
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMostrarPreguntas(!mostrarPreguntas);
            }}
          >
            Preguntas frecuentes
          </a>
        </p>
        {mostrarPreguntas && (
          <div className="accordion" id="faqAccordion">
            {preguntas.map((p) => (
              <div className="accordion-item" key={p.id}>
                <h2 className="accordion-header" id={`heading-${p.id}`}>
                  <button
                    className={`accordion-button ${preguntaSeleccionada === p.id ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => setPreguntaSeleccionada(preguntaSeleccionada === p.id ? null : p.id)}
                  >
                    {p.pregunta}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${preguntaSeleccionada === p.id ? "show" : ""}`}>
                  <div className="accordion-body">{p.respuesta}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="container mt-5">
        <p className="float-end">
          <a href="#">Volver arriba</a>
        </p>
        <p>© Proyecto Modelamiento. Universidad de la Costa.</p>
      </footer>
    </section>
  );
};
