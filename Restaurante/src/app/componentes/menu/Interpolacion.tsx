import { useState } from "react";
import mathImage from "../../../assets/img/INTERPOLACIONIC.png";

export const Interpolacion = () => {
  const [mostrarPreguntas, setMostrarPreguntas] = useState(false);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState<string | null>(null);

  const preguntas = [
    {
      id: "p1",
      pregunta: "¿Cuál es la diferencia entre Interpolacion lineal y interpolacion de lagrange? ",
      respuesta: (
        <>
          <p>Interpolacion lineal y interpolacion de lagrange.</p>
          <a>
            {" "}
            La interpolación lineal conecta puntos con líneas rectas, mientras que la interpolación de Lagrange utiliza
            polinomios de grado superior para pasar exactamente por múltiples puntos, ofreciendo potencialmente mayor
            precisión pero con el riesgo de oscilaciones si se usan demasiados puntos.
          </a>
          <img src="src/assets/img/INTERPOLACIOLienalPR.png" alt="Lineal" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p2",
      pregunta: "¿Qué diferencia hay entre interpolar y extrapolar?",
      respuesta: (
        <>
          <p>
            La interpolación se utiliza para estimar valores dentro del rango de un conjunto de datos conocidos. Imagina
            que tienes una serie de puntos en una gráfica y quieres saber el valor en un punto intermedio entre dos de
            los que ya tienes. La interpolación te ayuda a encontrar ese valor basándote en los puntos vecinos. La
            extrapolación, por otro lado, se utiliza para estimar valores fuera del rango de los datos conocidos. Usando
            la misma analogía de la gráfica, si quieres saber el valor en un punto que está más allá del último punto
            que tienes, la extrapolación intenta predecir ese valor basándose en la tendencia de los puntos que sí
            conoces..
          </p>
          <img src="src/assets/img/diferenciaINTER-EXTRA.png" alt="Inter-Extra" className="img-fluid my-3" />
        </>
      ),
    },
    {
      id: "p3",
      pregunta: "¿Qué ventajas tiene la forma de Newton sobre la forma de Polinomial?",
      respuesta: (
        <>
          <ol>
            <li>
              Adición eficiente de puntos: Permite incorporar nuevos datos al polinomio interpolante añadiendo solo un
              término, sin necesidad de recalcular todo.
            </li>
            <li>
              Cálculo sencillo de coeficientes: Los coeficientes se obtienen mediante un proceso algorítmico de
              diferencias divididas, más fácil que resolver sistemas de ecuaciones.
            </li>
            <li>
              Interpretación: Los coeficientes (diferencias divididas) tienen una conexión directa con las tasas de
              cambio de la función subyacente.
            </li>
            <li>
              Flexibilidad en la elección de nodos: La forma de Newton no impone restricciones estrictas en la ubicación
              de los puntos de interpolación.
            </li>
            <li>
              Menor propensión a errores: En ciertos casos, puede ser numéricamente más estable que la forma polinomial
              estándar, reduciendo la acumulación de errores de redondeo.
            </li>
          </ol>
          <img src="src/assets/img/Newton-Lagrange.jpeg" alt="Newton" className="img-fluid my-3" />
        </>
      ),
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Aprende usando la Interpolación Numérica</h1>
            <p className="lead">
              Descubre cómo evaluar valores intermedios y aproximar el comportamiento de datos cuando una fórmula
              explícita es desconocida. La interpolación numérica se convierte en una herramienta esencial en ciencia e
              ingeniería para comprender tendencias a partir de puntos discretos.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mathImage} className="img-fluid" alt="Imagen de interpolación numérica" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">¿Qué es la Interpolación Numérica?</h2>
        <p className="lead text-center">
          La interpolación numérica es un conjunto de métodos para estimar valores de una función en puntos intermedios,
          basándose en un conjunto discreto de valores conocidos. Se utiliza cuando la función explícita es difícil de
          obtener. Técnicas como la interpolación lineal, polinomial e interpolación de Lagrange son comunes.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/formulaINTlineal.png"
              alt="Interpolación Lineal"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Interpolación Lineal</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/formulaINTpolino.png"
              alt="Interpolación Polinomial"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Interpolación Polinomial</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img
              src="src/assets/img/formulaINTlagrangel.png"
              alt="Interpolación de Lagrange"
              className="img-fluid my-2"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <h6 className="mt-2">Interpolación de Lagrange</h6>
          </div>
        </div>
      </div>

      <div className="my-5">  
        <h2 className="text-center mb-4">Explora Más con Videos</h2>
        <div className="row">
          {[
            {
              title: "Interpolación Integral",
              videoId: "https://www.youtube.com/watch?v=zNaepj0O2tM",
            },
            {
              title: "Interpolación Polinomial",
              videoId: "https://www.youtube.com/watch?v=WsdfTwgTIng",
            },
            {
              title: "Interpolación Lagrange",
              videoId: "https://www.youtube.com/watch?v=FcU6op_qNj4",
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
