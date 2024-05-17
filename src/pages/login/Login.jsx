import React from 'react'
import './Login.css'
import { FooterLogin } from '../../components/login/FooterLogin'
import logo from '../../assets/logo without background.png'
import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const [mensaje, setMensaje] = useState('')

  const auth = useAuth()
  const handleSubmitEvent = (e) => {
    e.preventDefault()
    if (input.username !== '' && input.password !== '') {
      try {
        auth.loginAction(input)
      } catch (error) {
        setMensaje(error.message)
        // alert('Oops! Credenciales Invalidas')
      }
      return
    }
    alert('Todos los campos son obligatorios')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='body-login'>
      <header className='header-login'>
        <img onClick={() => navigate('/') } src={logo} alt='#' className='login-logo' />
      </header>
      <form className='main-login' onSubmit={handleSubmitEvent}>
        <div className='login-container'>
          <h2>Inicia sesión</h2>
          <div className='login-inputs'>
            <input
              type='text'
              placeholder='Email'
              id='user-name'
              name='username'
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
            <button className='btn-iniciar-sesion'>Iniciar sesión</button>
            <a href='#'>¿Olvidaste la contraseña?</a>
          </div>

          <div className='recuerdame'>
            <input type='checkbox' name='#' id='#' />
            <p>Recuérdame</p>
          </div>
        </div>
      </form>

      <FooterLogin />
    </div>
  )
}
