import '../styles/overview/Footer.css'
import logoludebra from '../../assets/LUDEBRA LOGO.png'

export function Footer() {
  return (
    <div>
      <div className='container-footer-over'>
        <footer className='footer-index-over'>
          <div className='copy-info-over'>
            <p className='copyright-over'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
            <img src={logoludebra} className='logo2-index-over' />
          </div>

          <div className='information-footer-over'>
            <ul>
              <li>
                <a href=''>Sobre Nosotros</a>
              </li>
              <li>
                <a href=''>Equipo de Desarrollo</a>
              </li>
              <li>
                <a href=''>Docs</a>
              </li>
            </ul>
          </div>
          <div className='information-footer-over'>
            <ul>
              <li>
                <a href=''>Repositorio</a>
              </li>
              <li>
                <a href=''>Ayuda</a>
              </li>
              <li>
                <a href=''>CLI & API</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
