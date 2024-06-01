import './Login.css'
import { FooterLogin } from '../../../components/login/FooterLogin'
import logo from '../../../assets/logowithoutbackground.png'
import { useEffect, useState } from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { Preloader } from '../preloader/Preloader'

export function Login() {
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)
  const [clic, setClic] = useState(true)
  const [inicioMensaje, setInicioMensaje] = useState('Iniciar Sesion')

  const { getEmailStore } = useInfoUsersStore()
  const auth = useAuth()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handleSubmitEvent = e => {
    e.preventDefault()
    if (input.email !== '' && input.password !== '') {
      try {
        // Prueba Zustand
        getEmailStore(input.email)

        auth.loginPost(input)
      } catch (error) {
        setMensaje(error.message)
      }
      return
    }
    alert('Todos los campos son obligatorios')
  }

  const handleInput = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  function mensajeSesion() {
    if (clic) {
      setClic(false)
      setInicioMensaje('Cargando...')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className='body-login'>
          <header className='header-login'>
            <img onClick={() => navigate('/')} src={logo} alt='#' className='login-logo' />
          </header>
          <form className='main-login' onSubmit={handleSubmitEvent}>
            <div className='login-container'>
              <h2>Inicia sesión</h2>
              <div className='login-inputs'>
                <input
                  type='email'
                  placeholder='Email'
                  id='user-name'
                  name='email'
                  onChange={handleInput}
                  aria-describedby='user-name'
                  aria-invalid='false'
                  required
                />
                <input
                  type='password'
                  placeholder='Contraseña'
                  id='password'
                  name='password'
                  aria-describedby='user-password'
                  aria-invalid='false'
                  onChange={handleInput}
                  required
                />
                <button className='btn-iniciar-sesion' onClick={mensajeSesion}>
                  {inicioMensaje}
                </button>
                <a href='#'>¿Olvidaste la contraseña?</a>
              </div>
            </div>
          </form>
          <FooterLogin />
        </div>
      )}
    </div>
  )
}
