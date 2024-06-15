import { CardSlider } from '../../pages/OvComponents/CardSlider'
import '../styles/overview/HomeSlider.css'
import { useNavigate } from 'react-router-dom'

export function HomeSlider() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='text-container'>
        <h2 className='texto-slider'>Simulaciones Interactivas de Electromagnetismo</h2>
        <CardSlider />
        <button className='boton-slider' onClick={() => navigate('login')}>
          Explora Las Simulaciones
        </button>
      </div>
      <div className='home-slider'></div>
      {/* <img src={homeImage} alt='#' className='home-slider'></img> */}
    </div>
  )
}
