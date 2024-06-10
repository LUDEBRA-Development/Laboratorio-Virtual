import '../styles/overview/Header.css'
import logolabs from '../../assets/logowithoutbackground.png'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div>
      <section>
        <header className='header-index'>
          <img src={logolabs} className='logo-overview' />
          <h2 className='ludebra-title'>LUDEBRA LABS</h2>
          <div className='button-container-header'>
            <button className='btn-index boton-header-index-login' onClick={() => navigate('/login')}>
              Log In
            </button>
            <button className='btn-index boton-header-index-register' onClick={() => navigate('/register')}>
              Sign Up
            </button>
          </div>
        </header>
      </section>
    </div>
  )
}
