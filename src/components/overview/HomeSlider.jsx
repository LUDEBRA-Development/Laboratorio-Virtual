import React from 'react'
import homeImage from '../../assets/Pnk_m1_blur_darked.jpg'
import '../styles/overview/HomeSlider.css'

export function HomeSlider() {
  return (
    <div>
      <div className='text-container'>
        <h2 className='texto-slider'>
          Simulaciones interactivas de Electromagnetismo
        </h2>
        <button className='boton-slider'>Explora Nuestras Simulaciones</button>
      </div>
      <img src={homeImage} alt='#' className='home-slider'></img>
    </div>
  )
}
