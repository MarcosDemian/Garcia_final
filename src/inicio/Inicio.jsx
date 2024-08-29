import { Link } from 'react-router-dom';
import './Inicio.css'

function Inicio () {
  return (
    <div className='container-formulario'>
      <form className='formulario' action="">
        <h2>¡Bienvenido/a a la FakeStore!</h2>
        <h3>Iniciar sesión</h3>

        <label>Correo:</label>
        <input type="email" name="" id="" />

        <label>Contraseña:</label>
        <input type="password" name="" id="" />

        <div className='container-botones'>
          <Link className='botones' to={`/detalles`}>Acceder</Link>
          <Link className='botones' to={`/registro`}>Registrarse</Link>
        </div>
      </form>
    </div>
  )
}

export default Inicio;