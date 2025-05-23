import { Route, Routes } from "react-router-dom"

import { Integracion } from "../../componentes/menu/Integracion"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { Metodosnumericos } from "../../componentes/menu/Metodosnumericos"
import { Interpolacion } from "../../componentes/menu/Interpolacion"
import { Derivacion } from "../../componentes/contenedor/Derivacion"
import { rutasAplicacion } from "../../../constants/rutas"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"
import { Calculadora } from "../../componentes/menu/Calculadora"

export const Ruteo = () => {
  return (
    <Routes>
      <Route path={rutasAplicacion.inicio} element={<Inicio />} />
      <Route path={rutasAplicacion.metodosNumericos} element={<Metodosnumericos />} />
      <Route path={rutasAplicacion.integracion} element={<Integracion />} />
      <Route path={rutasAplicacion.interpolacion} element={<Interpolacion />} />
      <Route path={rutasAplicacion.derivacion} element={<Derivacion />} />
      <Route path={rutasAplicacion.calculadora} element={<Calculadora />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}
