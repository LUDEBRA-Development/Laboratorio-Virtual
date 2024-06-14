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
                <a onClick={() => window.open('https://github.com/LUDEBRA-Development', '_blank')}>Sobre Nosotros</a>
              </li>
              <li>
                <a>Equipo de Desarrollo</a>
              </li>
              <li>
                <a>Docs</a>
              </li>
            </ul>
          </div>
          <div className='information-footer-login'>
            <ul>
              <li>
                <a onClick={() => window.open('https://github.com/LUDEBRA-Development/Laboratorio-Virtual', '_blank')}>
                  Repositorio
                </a>
              </li>
              <li>
                <a>Ayuda</a>
              </li>
              <li>
                <a
                  onClick={() =>
                    window.open('https://github.com/LUDEBRA-Development/Laboratorio-Virtual-Backend', '_blank')
                  }
                >
                  CLI & API
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
