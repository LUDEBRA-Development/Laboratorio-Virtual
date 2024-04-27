import React from 'react'
import './Login.css'
import { FooterLogin } from '../../components/login/FooterLogin'
import logo from '../../assets/logo without background.png'
import { Link } from 'react-router-dom'

export function Login() {
  class user {
    constructor(user, email, password) {
      this.user = user
      this.email = email
      this.password = password
    }
    set setEmail(email) {
      this.email = email
    }
    set setPassword(password) {
      this.password = password
    }
    set setUser(user) {
      this.user = user
    }
    get getEmail() {
      return this.email
    }
    get getPassword() {
      return this.password
    }
    get getUser() {
      return this.user
    }
  }

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
            <Link to='/'>
              <button className='btn-iniciar-sesion'>Iniciar sesión</button>
            </Link>
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
