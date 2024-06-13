import '../styles/overview/Selector.css'
import fisicaIcon from '../../assets/icons/fisica-icon.png'
import matematicaIcon from '../../assets/icons/matematicas-icon.png'
import ingenieriaIcon from '../../assets/icons/ingenieria-icon.png'
import quimicaIcon from '../../assets/icons/quimica-icon.png'

export function Selectors() {
  return (
    <div className='container-selectors'>
      <div className='selector' id='selector1'>
        <p>Fisica</p>
        <i>
          <img className='selector-icon' src={fisicaIcon} alt='#' />
        </i>
      </div>
      <div className='selector' id='selector2'>
        <p>Matematica</p>
        <i>
          <img className='selector-icon' src={matematicaIcon} alt='#' />
        </i>
      </div>
      <div className='selector' id='selector3'>
        <p>Ingenieria</p>
        <i>
          <img className='selector-icon' src={ingenieriaIcon} alt='#' />
        </i>
      </div>
      <div className='selector' id='selector4'>
        <p>Quimica</p>
        <i>
          <img className='selector-icon' src={quimicaIcon} alt='#' />
        </i>
      </div>
    </div>
  )
}
