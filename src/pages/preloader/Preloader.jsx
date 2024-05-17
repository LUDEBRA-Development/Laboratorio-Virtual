import React from 'react'
import './Preloader.css'

export function Preloader() {
  return (
    <div className='preloader'>
      <div className='kabobloader'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    </div>
  )
}
