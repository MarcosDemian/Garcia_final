import { useEffect, useState } from "react";
import  { fetchProductos }  from "./Api";
import './ListaProductos.css'
import { Link } from "react-router-dom";
import Menu from "../menu/Menu"
import Footer from "../footer/Footer";


function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await fetchProductos();
        setProductos(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Menu />
    <h2> TP Ecommerse </h2>
    {
      loading ? (<p>Cargando productos...</p>) : (
        <ul className="lista">
          {productos.map((producto) => (
            <li key={producto.id} className="producto-item">
              <h3 className="producto-titulo">{producto.title}</h3>
              <img className="producto-img" src={producto.image} alt={producto.title} />

              <div className="container-botones">
                <Link className="ver-mas" to={`/detalles/${producto.id}`}>  ⭢ Ver detalles ⭠ </Link>
                <button className="comprar">Comprar</button>
              </div>
            </li>
          ))}
        </ul>
      )
    }
    <Footer />
    </>
  )
}

export default ListaProductos;