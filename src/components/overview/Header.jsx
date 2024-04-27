import '../styles/overview/Header.css'
import logolabs from '../../assets/LABS LOGO.png'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <section>
        <header>
          <img src={logolabs} className='logo' />
          <h2 className='ludebra-title'>LUDEBRA LABS</h2>
          <Link to='/login'>
            <button className='boton'>Iniciar Sesion</button>
          </Link>
        </header>
      </section>
    </div>
  )
}
