import React from 'react'
import './IndexPage.css'
import logolabs from '../../assets/LABS LOGO.png'
import logoludebra from '../../assets/LUDEBRA LOGO.png'

export function IndexPage() {
  return (
    <div>
      <section>
        <header>
          <img src={logolabs} className='logo' />
          <button className='boton'>Iniciar Sesion</button>
        </header>
      </section>

      <section>
        <main>This is the main</main>
      </section>

      <section>
        <footer>
          <p class='copyright'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
          <img src={logoludebra} className='logo2'/>
        </footer>
      </section>
    </div>
  )
}
