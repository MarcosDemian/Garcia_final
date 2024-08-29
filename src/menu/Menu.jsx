import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="lista-links">
        <li><Link to="/detalles" className="links"> Inicio </Link></li>
      </ul>
        <Link className="logout-icono" to={'/'}><img src="../../public/logout.svg" alt="" /></Link>
    </nav>
  )
}

export default Menu;