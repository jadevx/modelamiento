//import { useState } from "react";
import mathImage from "../../../assets/img/derivadaIC.png";

export const Derivacion = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Descubre el Poder de la Derivación Numérica</h1>
            <p className="lead">
              Aprende a calcular tasas de cambio de manera aproximada cuando las funciones explícitas no están disponibles.
              La derivación numérica es fundamental en ciencia e ingeniería.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mathImage} className="img-fluid" alt="Imagen de derivación numérica" />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">¿Qué es la Derivación Numérica?</h2>
        <p className="lead text-center">
          La derivación numérica es un conjunto de métodos para aproximar la derivada de una función en un punto. Se
          utiliza cuando la derivada es difícil, empleando valores de la función en puntos cercanos para estimar la tasa
          de cambio instantánea. Técnicas como las diferencias finitas (hacia adelante, atrás y central) son
          fundamentales para realizarlas.
        </p>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card p-3">
            <img src="src/assets/img/difhaciadelante.pdf.png" alt="Fórmula hacia adelante" className="img-fluid my-2" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img src="src/assets/img/difhaciatras.pdf.png" alt="Fórmula hacia atrás" className="img-fluid my-2" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <img src="src/assets/img/difcentrada.pdf.png" alt="Fórmula centrada" className="img-fluid my-2" />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Tabla de derivadas más comunes</h2>
        <p>
          A continuación se presenta una tabla con algunas de las funciones más usuales presentadas en los libros de texto y su derivada:
        </p>
        
        <div className="d-flex justify-content-center">
          <img src="src/assets/img/Tablderiva.pdf.png" alt="Tabla de derivadas" className="img-fluid my-2" />
        </div>
      </div>
      <div className="my-5">
          <h2 className="text-center mb-4">Explora Más con Videos</h2>

          <div className="row mb-4">
            {[
              { title: "Introducción a la derivada", videoId: "https://www.youtube.com/watch?v=uK4-s0ojHFg" },
              { title: "Reglas de derivacion", videoId: "https://www.youtube.com/watch?v=aVNa-J8iB5I" },
              { title: "Constante de una función", videoId: "https://www.youtube.com/watch?v=VBCMPgZAYUQ" },
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

          <div className="row">
            {[
              { title: "Derivada de 1 sobre x", videoId: "https://www.youtube.com/watch?v=KluPb75C60M&t=10s" },
              { title: "Derivada de una raiz", videoId: "https://www.youtube.com/watch?v=xr0_7dPW-Iw&t=6s" },
              { title: "Derivada de una suma", videoId: "https://www.youtube.com/watch?v=RBN1HeRmZlc" },
            ].map((video, idx) => (
              <div className="col-md-4 mb-4" key={idx + 3}>
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
        
      <footer className="container mt-5">
        <p className="float-end">

          <a href="#">Volver arriba</a>
        </p>
        <p>© Proyecto Modelamiento. Universidad de la Costa.</p>
      </footer>
    </section>
  );
};
