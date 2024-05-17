import './styles/Header.css'
import logolabs from '../assets/LABS LOGO.png' 

export function Header() {
  return (
    <div>
      <section>
        <header>
          <img src={logolabs} className='logo' />
          <button className='boton'>Iniciar Sesion</button>
        </header>
      </section>
    </div>
  )
}
