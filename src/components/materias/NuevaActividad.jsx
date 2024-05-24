import { useEffect, useState } from 'react'
import '../styles/materias/NuevaActividad.css'
import Ondas from '../../assets/ondas.png'
import Electromagnetismo from '../../assets/electromagnetismo.png'

export function NuevaActividad(props) {
  const nombreCurso = props.materia
  const [imagen, setImagen] = useState('')

  function iconoActividad(nombre) {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoActividad(nombreCurso)
  }, [])

  return (
    <div className='aside-activity'>
      <img src={imagen} className='activity-image' />
      <div className='activity-description'>
        <h4 className='activity-title'>{props.titulo}</h4>
        <p className='activity-text'>{props.materia}</p>
      </div>
    </div>
  )
}
