import React from 'react'
import './Login.css'
import { FooterLogin } from '../../components/login/FooterLogin'
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
              placeholder='Email'
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
            <a href='#'>¿Olvidaste la contraseña?</a>
          </div>

          <div className='recuerdame'>
            <input type='checkbox' name='#' id='#' />
            <p>Recuérdame</p>
          </div>
        </div>
      </main>

      <FooterLogin />
    </div>
  )
}
