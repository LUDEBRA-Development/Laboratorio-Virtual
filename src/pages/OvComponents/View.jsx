import './View.css'
import img1 from '../../assets/bg-view/1.jpg'
import img2 from '../../assets/bg-view/2.jpg'
import img3 from '../../assets/bg-view/3.jpg'

export function View() {
  return (
    <div className='body-view'>
      <div id='card-area-view'>
        <div className='wrapper-view'>
          <div className='box-area-view'>
            <div className='box-view'>
              <img src={img1} />
              <div className='overlay-view'>
                <h3>Experimentacion</h3>
                <p>
                  Las simulaciones de Labs permiten a los estudiantes experimentar con fenómenos científicos en un
                  entorno seguro y controlado, fomentando la exploración y el descubrimiento sin riesgos.
                </p>
              </div>
            </div>
            <div className='box-view'>
              <img src={img2} />
              <div className='overlay-view'>
                <h3>Comprension</h3>
                <p>
                  Los simuladores de Labs facilitan la comprensión de conceptos científicos complejos a través de una
                  interacción visual y práctica, mejorando así el aprendizaje de los estudiantes.
                </p>
              </div>
            </div>
            <div className='box-view'>
              <img src={img3} />
              <div className='overlay-view'>
                <h3>Participacion</h3>
                <p>
                  Utilizar simuladores de Labs en el aula puede incrementar la participación y el interés de los
                  estudiantes en las ciencias, gracias a su enfoque interactivo y atractivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
