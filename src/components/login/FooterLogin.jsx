import React from 'react'
import logoludebra from '../../assets/LUDEBRA LOGO.png'
import '../styles/login/FooterLogin.css'

export function FooterLogin() {
  return (
    <div>
      <section>
        <footer>
          <p class='copyright'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
          <img src={logoludebra} className='logo2' />
        </footer>
      </section>
    </div>
  )
}
