import React from 'react'
import './IndexPage.css'
import logolabs from '../../assets/LABS LOGO.png'
import logoludebra from '../../assets/LUDEBRA LOGO.png'
import { Header } from '../../components/Header'

export function IndexPage() {
  return (
    <div>
      <Header />
      <section>
        <main>This is the main</main>
      </section>

      <section>
        <footer>
          <p class='copyright'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
          <img src={logoludebra} className='logo2' />
        </footer>
      </section>
    </div>
  )
}
