import { Link } from 'react-router-dom';
import "./Registro.css"

function Registro () {
  return(
    <div className='container-formulario'>
      <form className='formulario' action="">
        <h2>¡Bienvenido/a a la FakeStore!</h2>
        <h3>Registrarse</h3>

        <label>Nombre:</label>
        <input type="email" name="" id="" />

        <label>Apellido:</label>
        <input type="email" name="" id="" />

        <label>Correo:</label>
        <input type="email" name="" id="" />

        <label>Contraseña:</label>
        <input type="password" name="" id="" />

        <label>Confirmar contraseña:</label>
        <input type="password" name="" id="" />

        <div className='container-botones'>
          <Link className='botones' to={`/`}>Listo</Link>
        </div>
      </form>
    </div>
  )
}

export default Registro;