import logoludebra from '../../assets/LUDEBRA LOGO.png'
import '../styles/login/FooterLogin.css'

export function FooterLogin() {
  return (
    <div>
      <div className='container-footer-login'>
        <footer className='footer-index-login'>
          <div className='copy-info-login'>
            <p className='copyright-login'>© Copyright LUDEBRA DEVELOPMENT - 2024</p>
            <img src={logoludebra} className='logo2-index-login' />
          </div>

          <div className='information-footer-login'>
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
          <div className='information-footer-login'>
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
