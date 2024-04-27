import React from 'react'
import homeImage from '../../assets/Pnk_m1_blur_darked.jpg'
import '../styles/overview/HomeSlider.css'
import { Link } from 'react-router-dom'

export function HomeSlider() {
  return (
    <div>
      <div className='text-container'>
        <h2 className='texto-slider'>
          Simulaciones interactivas de Electromagnetismo
        </h2>
        <Link to='/dielectric'>
          <button className='boton-slider'>
            Explora Nuestras Simulaciones
          </button>
        </Link>
      </div>
      <img src={homeImage} alt='#' className='home-slider'></img>
    </div>
  )
}
