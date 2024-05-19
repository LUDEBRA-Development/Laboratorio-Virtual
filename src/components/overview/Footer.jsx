import '../styles/overview/Footer.css'
import logoludebra from '../../assets/LUDEBRA LOGO.png'

export function Footer() {
  return (
    <div>
      <section>
        <footer className='footer-index'>
          <p className='copyright'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
          <img src={logoludebra} className='logo2' />
        </footer>
      </section>
    </div>
  )
}
