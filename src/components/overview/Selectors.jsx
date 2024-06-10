import '../styles/overview/Selector.css'
import fisicaIcon from '../../assets/icons/fisica-icon.png'
import matematicaIcon from '../../assets/icons/matematicas-icon.png'
import ingenieriaIcon from '../../assets/icons/ingenieria-icon.png'
import quimicaIcon from '../../assets/icons/quimica-icon.png'

export function Selectors() {
  return (
    <div className='container-selectors'>
      <div className='selector'>
        <p>Fisica</p>
        <i>
          <img className='selector-icon' src={fisicaIcon} alt='#' />
        </i>
      </div>
      <div className='selector'>
        <p>Matematica</p>
        <i>
          <img className='selector-icon' src={matematicaIcon} alt='#' />
        </i>
      </div>
      <div className='selector'>
        <p>Ingenieria</p>
        <i>
          <img className='selector-icon' src={ingenieriaIcon} alt='#' />
        </i>
      </div>
      <div className='selector'>
        <p>Quimica</p>
        <i>
          <img className='selector-icon' src={quimicaIcon} alt='#' />
        </i>
      </div>
    </div>
  )
}
