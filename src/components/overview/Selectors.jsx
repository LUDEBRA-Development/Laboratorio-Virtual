import React from 'react'
import '../styles/overview/Selector.css'
import { Link } from 'react-router-dom'

export function Selectors() {
  return (
    <div className='container'>
      <div className='selector'>
        <p>Fisica</p>
      </div>
      <div className='selector'>
        <p>Matematica</p>
      </div>
      <div className='selector'>
        <p>Ingenieria</p>
      </div>
      <div className='selector'>
        <p>Quimica</p>
      </div>
    </div>
  )
}
