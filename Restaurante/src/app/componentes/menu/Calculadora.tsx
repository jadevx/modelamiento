import { useState, ChangeEvent, FormEvent } from "react";

type Punto = {
  x: number;
  y: number;
};

export const Calculadora = () => {
  const [formData, setFormData] = useState({
    funcion: "",
    x0: "",
    y0: "",
    h: "",
    xn: ""
  });

  const [puntos, setPuntos] = useState<Punto[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

  const urls = [
    "http://52.73.205.36:5001",
    "http://modelamiento-backend:5001",
    "http://modelamiento-backend-1:5001",
    "http://localhost:5001",
  ];

  const fetchData = async () => {
    for (const url of urls) {
      console.log('-----')
      console.log(JSON.stringify(formData))
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
         
        console.log(res)

        if (!res.ok) throw new Error(`Servidor respondió con status ${res.status}`);

        const data = await res.json();
        setPuntos(data.puntos || []);
        return;

      } catch (err) {
        if (err instanceof Error) {
          console.warn(`Fallo al conectar con ${url}:`, err.message);
        } else {
          console.warn(`Fallo al conectar con ${url}:`, err);
        }
      }
    }

    console.error("Todas las URLs fallaron");
    setPuntos([]);
  };

  fetchData();

  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Encabezado */}
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-5 fw-bold">Resuelve EDO con el Método de Euler</h1>
            <p className="lead">
              Ingresa una ecuación diferencial de primer orden y obtén una aproximación numérica paso a paso.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Ingresa los datos</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Ecuación dy/dx = f(x,y):</label>
                  <input
                    type="text"
                    name="funcion"
                    className="form-control"
                    value={formData.funcion}
                    onChange={handleChange}
                    placeholder="ej: y - x^2 + 1"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">x₀:</label>
                  <input
                    type="number"
                    step="1"
                    name="x0"
                    className="form-control"
                    value={formData.x0}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">y₀:</label>
                  <input
                    type="number"
                    step="0.5"
                    name="y0"
                    className="form-control"
                    value={formData.y0}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">h (paso):</label>
                  <input
                    type="number"
                    step="0.1"
                    name="h"
                    className="form-control"
                    value={formData.h}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">xₙ (hasta dónde resolver):</label>
                  <input
                    type="number"
                    step="1"
                    name="xn"
                    className="form-control"
                    value={formData.xn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Resolver
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {puntos.length > 0 && (
          <div className="row justify-content-center mt-5">
            <div className="col-md-8">
              <h3 className="text-center mb-3">Resultados del Método de Euler</h3>
              <table className="table table-bordered table-striped">
                <thead className="table-light">
                  <tr>
                    <th>x</th>
                    <th>y</th>
                  </tr>
                </thead>
                <tbody>
                  {puntos.map((p, i) => (
                    <tr key={i}>
                      <td>{p.x}</td>
                      <td>{p.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
