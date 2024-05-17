import React from 'react'
import information from '../../assets/img2.jpg'
import '../styles/overview/InformationImage.css'
import { useNavigate } from 'react-router-dom'

export function InformationImage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='infoimg-container'>
        <h1 className='infoimg-title'>
          Recursos para docentes, actividades y comunidad
        </h1>
        <span className='infoimg-text'>
          Los maestros tienen acceso a consejos específicos sobre simulaciones,
          incluyendo videos, recursos para enseñar con simulaciones y
          actividades compartidas por nuestra comunidad de maestros.
        </span>
        <button className='infoimg-boton' onClick={() => navigate('login')}>Explora Los Simuladores</button>
      </div>
      <img className='infoimg-image' src={information} alt='#' />
    </div>
  )
}
