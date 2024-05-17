import './styles/Footer.css'
import logoludebra from '../assets/LUDEBRA LOGO.png'

export function Footer() {
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
