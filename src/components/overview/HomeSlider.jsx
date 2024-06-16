import { CardSlider } from '../../pages/OvComponents/CardSlider'
import '../styles/overview/HomeSlider.css'
import { useNavigate } from 'react-router-dom'

export function HomeSlider() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='text-container'>
      <div className='text-slider-format'>

        <h2 className='texto-slider'>Simulaciones Interactivas de Electromagnetismo</h2>
        <button className='boton-slider' onClick={() => navigate('login')}>
          Explora Las Simulaciones
        </button>
      </div>
        <CardSlider />
      </div>
      <div className='home-slider'></div>
      {/* <img src={homeImage} alt='#' className='home-slider'></img> */}
    </div>
  )
}
