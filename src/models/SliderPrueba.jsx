import React from 'react'
import { useState } from 'react'
import './SliderPrueba.css'

export function SliderPrueba() {
  const [value, setValue] = useState(50)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className='slider-container'>
      <input
        type='range'
        min='0'
        max='100'
        value={value}
        onChange={handleChange}
        className='slider'
      />

      <p> Valor: {value} </p>
    </div>
  )
}
