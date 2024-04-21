import React from 'react'
import './Login.css'
import { Footer } from '../../components/overview/Footer.jsx'
import logo from '../../assets/logo without background.png'

export function Login() {
  return (
    <div>
      <header>
        <img src={logo} alt='#' className='login-logo' />
      </header>
      <main>
        <div className='login-container'>
          <h2>Inicia sesión</h2>
          <div className='login-inputs'>
            <input
              type='text'
              placeholder='Email o número de teléfono'
              id='email-user'
              name='email-user_be'
              required
            />
            <input
              type='password'
              placeholder='Contraseña'
              id='password-user'
              name='password_be'
              required
            />
            <button className='btn-iniciar-sesion'>Iniciar sesión</button>
            <p className='o'>O</p>
            <button className='btn-codigo'>
              Usar un código de inicio de sesión
            </button>
            <a href='#'>¿Olvidaste la contraseña?</a>
          </div>

          <div className='recuerdame'>
            <input type='checkbox' name='#' id='#' />
            <p>Recuérdame</p>
          </div>
          <p className='primeravez'>
            ¿Primera vez en Netflix?
            <a href='' className='pveza'>
              Suscríbete ahora.
            </a>
          </p>
          <p className='captcha'>
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot.{' '}
            <a href='' class='info'>
              Más info.
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
