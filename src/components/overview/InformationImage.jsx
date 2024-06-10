import info1 from '../../assets/landing/infoimg1.jpg'
import '../styles/overview/InformationImage.css'

export function InformationImage() {
  return (
    <div>
      <section className='container-info'>
        <div className='slider-wrapper-info'>
          <h2>
            LOS MAESTROS TIENEN ACCESO A CONSEJOS ESPECIFICOS SOBRE SIMULACIONES, INCLUYENDO VIDEOS, RECURSOS PARA ENSEÑAR CON SIMULACIONES Y ACTIVIDADES COMPARTIDAS POR NUESTRA COMUNIDAD DE MAESTROS.
          </h2>
          <div className='slider-info'>
            {/* <img id='slide-1' src={info1} alt='' /> */}
            <img id='slide-2' src={info1} alt='' />
          </div>
          {/* <div className='slider-nav-info'>
            <a href='#slide-1'></a>
            <a href='#slide-2'></a>
          </div> */}
        </div>
      </section>

      {/* <div className='infoimg-container'>
        <h1 className='infoimg-title'>Recursos para docentes, actividades y comunidad</h1>
        <span className='infoimg-text'>
          Los maestros tienen acceso a consejos específicos sobre simulaciones, incluyendo videos, recursos para enseñar
          con simulaciones y actividades compartidas por nuestra comunidad de maestros.
        </span>
        <button className='infoimg-boton' onClick={() => navigate('login')}>
          Explora Los Simuladores
        </button>
      </div>
      <img className='infoimg-image' src={information} alt='#' /> */}
    </div>
  )
}
