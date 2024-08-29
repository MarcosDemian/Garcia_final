import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductos from "./productos/ListaProductos";
import DetalleProducto from "./productos/DetalleProducto";
import Inicio from "./inicio/inicio";
import Registro from "./registro/Registro"


function App() {
  return (
    <Router>
      <div className="container">
        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='/detalles' element={<ListaProductos />} />
            <Route path='/detalles/:id' element={<DetalleProducto />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;