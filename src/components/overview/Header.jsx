import '../styles/overview/Header.css'
import logolabs from '../../assets/LABS LOGO.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div>
      <section>
        <header>
          <img src={logolabs} className='logo' />
          <h2 className='ludebra-title'>LUDEBRA LABS</h2>
          <button className='boton' onClick={() => navigate('login')}>Iniciar Sesion</button>
        </header>
      </section>
    </div>
  )
}
