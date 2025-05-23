import { useState } from "react";
import mathImage from "../../../assets/img/INTEGRACIONIC.png";

export const Integracion = () => {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState<string | null>(null);

  const preguntas = [
    {
      id: "p1",
      pregunta: "¿Cuál es la función de la regla trapezoidal?",
      respuesta: (
        <>
          <p>La regla trapezoidal aproxima el área bajo la curva usando trapecios.</p>
          <img src="src/assets/img/regltrpz.png.png" alt="Trapecio" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p2",
      pregunta: "¿Cuál es la función de la regla de Simpson?",
      respuesta: (
        <>
          <p>La regla de Simpson usa parábolas para aproximar áreas.</p>
          <img src="src/assets/img/reglsipm.png.png" alt="Simpson" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p3",
      pregunta: "¿Cuál es la función de la regla del punto medio?",
      respuesta: (
        <>
          <p>Usa el punto medio de cada subintervalo para construir rectángulos de área.</p>
          <img src="src/assets/img/reglpnmd.png.png" alt="Punto medio" className="img-fluid my-3" />
        </>
      ),
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Introducción */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Sumérgete en la Integración Numérica</h1>
            <p className="lead">
              Descubre cómo calcular áreas bajo curvas complejas cuando las soluciones exactas no están disponibles. La
              integración numérica es clave en simulaciones, física, finanzas y más.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mathImage} className="img-fluid" alt="Integración" />
          </div>
        </div>

        {/* ¿Qué es? */}
        <div className="my-5 text-center">
          <h2 className="mb-4">¿Qué es la Integración Numérica?</h2>
          <p className="lead">
            La integración numérica nos brinda la capacidad de estimar áreas bajo curvas complejas mediante la
            aproximación con formas geométricas simples.
          </p>
        </div>

        {/* Métodos */}
        <div className="row text-center mb-5">
          {[
            {
              title: "Suma de Riemann",
              desc: "División del área bajo la curva en rectángulos. Es el método más simple.",
            },
            {
              title: "Método del Trapecio",
              desc: "Utiliza trapecios para aproximar áreas. Más preciso con funciones suaves.",
            },
            { title: "Regla de Simpson", desc: "Usa parábolas para mayor precisión con pocos intervalos." },
          ].map((m, i) => (
            <div className="col-md-4" key={i}>
              <div className="card p-3 shadow-sm">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Videos */}
        <div className="my-5">
          <h2 className="text-center mb-4">Explora Más con Videos</h2>
          <div className="row mb-4">
            {[
              { title: "Introducción a la integral", videoId: "https://www.youtube.com/watch?v=VhRb5A2Gihk" },
              { title: "Integral de una constante", videoId: "https://www.youtube.com/watch?v=iyjjk6TrmbU" },
              { title: "Integral de una raiz", videoId: "https://www.youtube.com/watch?v=WCAn3VRNFAo" },
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
                    <h5 className="card-title">{video.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preguntas */}
        <div className="my-5">
          <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
          <div className="accordion" id="faq">
            {preguntas.map((p) => (
              <div className="accordion-item" key={p.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
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
        </div>
      </div>
    </section>
  );
};
