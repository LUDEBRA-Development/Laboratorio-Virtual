import '../styles/overview/Header.css'
import logolabs from '../../assets/LABS LOGO.png' 

export function Header() {
  return (
    <div>
      <section>
        <header>
          <img src={logolabs} className='logo' />
          <h2 className='ludebra-title'>LUDEBRA LABS</h2>
          <button className='boton'>Iniciar Sesion</button>
        </header>
      </section>
    </div>
  )
}
