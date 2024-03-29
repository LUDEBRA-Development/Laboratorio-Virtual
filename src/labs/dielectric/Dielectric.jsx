//* Props Imports
import React from 'react'
import '../../styles/pages/labs/dielectric/Dielectric.css'

//! Image Imports
import vertical from '../../assets/pages/labs/dielectrico/Linea-Vertical.png'
import horizontal from '../../assets/pages/labs/dielectrico/Linea-Horizontal.png'
import baldoza from '../../assets/pages/labs/dielectrico/BaldosaOG.png'
import bateria from '../../assets/pages/labs/dielectrico/Bateria2-Positivo.png'
import dielectrico from '../../assets/pages/labs/dielectrico/Dielectrico-demo.png'

//? Models Imports
// import { dielectricModel } from '../../models/pages/labs/dielectric/dielectricModel.js'

export function Dielectric() {
  return (
    <div className='container'>
      <section>
        <img src={bateria} alt='#' className='bateria' />
      </section>
      <section>
        <img src={horizontal} alt='#' className='linea-horizontal-superior' />
        <img src={horizontal} alt='#' className='linea-horizontal-inferior' />
        <img src={vertical} alt='#' className='linea-vertical-superior' />
        <img src={vertical} alt='#' className='linea-vertical-inferior' />
        <img src={vertical} alt='#' className='linea-vertical-inferior2' />
        <img src={baldoza} alt='#' className='baldosa-inferior' />
        <img
          src={dielectrico}
          alt='#'
          className='dielectrico-demo wrapper'
        />{' '}
        {/* Prueba del draggable en el dielectrico */}
        <img src={baldoza} alt='#' className='baldosa-superior' />
        <img src={vertical} alt='#' className='linea-vertical-superior2' />
      </section>

      <input
        type='range'
        class='voltaje-bateria'
        min='0'
        max='100'
        value='50'
      />

      <input type='range' class='slider-prueba' min='0' max='100' value='50' />
      <input
        id='separacion'
        type='text'
        class='separacion'
        value='7.5 mm'
        readonly
      />

      <label for=''>
        <div class='material-dielectrico'>
          <span>Material Dielectrico: </span>
          <select name='dielectrico-selector' id='materialDielectricoSelector'>
            <option value='1'>Papel</option>
            <option value='2'>Carton</option>
            <option value='3'>Agua</option>
          </select>
        </div>
      </label>
    </div>
  )
}
