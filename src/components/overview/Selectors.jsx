import React from 'react'
import '../styles/overview/Selector.css'
import { Link } from 'react-router-dom'
import fisicaIcon from '../../assets/icons/fisica-icon.png'
import matematicaIcon from '../../assets/icons/matematicas-icon.png'
import ingenieriaIcon from '../../assets/icons/ingenieria-icon.png'
import quimicaIcon from '../../assets/icons/quimica-icon.png'

export function Selectors() {
  return (
    <div className='container'>
      <div className='selector' style={{ backgroundColor: '#F7CDDD' }}>
        <p>Fisica</p>
        <i><img className='selector-icon' src={fisicaIcon} alt='#' /></i>
      </div>
      <div className='selector' style={{ backgroundColor: '#D5F3FC' }}>
        <p>Matematica</p>
        <i><img className='selector-icon' src={matematicaIcon} alt='#' /></i>
      </div>
      <div className='selector' style={{ backgroundColor: '#D9C8DE' }}>
        <p>Ingenieria</p>
        <i><img className='selector-icon' src={ingenieriaIcon} alt='#' /></i>
      </div>
      <div className='selector' style={{ backgroundColor: '#FFFED1' }}>
        <p>Quimica</p>
        <i><img className='selector-icon' src={quimicaIcon} alt='#' /></i>
      </div>
    </div>
  )
}
