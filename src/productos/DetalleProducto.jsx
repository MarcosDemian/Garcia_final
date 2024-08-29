import { useEffect, useState } from "react";
import { fetchProductosById } from "./Api";
import { useParams } from "react-router-dom";
import './DetalleProducto.css'
import Menu from "../menu/Menu"
import Footer from "../footer/Footer";


function DetalleProducto() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductosById(id);
        setProducto(data);
        setLoading(false);
        console.log(data)
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <>
      <Menu />
        <div className="container-detalles">
          <img className="detalle-img" src={producto.image} alt={producto.title} />
          <h3 className="detalle-titulo" >{producto.title}</h3>
          <div className="texto-container">
            <p><b>Codigo:</b> {producto.id}</p>
            <p><b>Precio:</b> ${producto.price}</p>
            <p><b>Vendido:</b> {producto.rating.count}/u</p>
            <p><b>Categoria:</b> {producto.category}</p>
            <p><b>Detalles:</b> <br />{producto.description}</p>
          </div>
          <button className="boton">Comprar</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default DetalleProducto;