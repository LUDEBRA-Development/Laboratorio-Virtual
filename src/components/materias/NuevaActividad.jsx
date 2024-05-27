import { useEffect, useState } from 'react'
import '../styles/materias/NuevaActividad.css'
import Ondas from '../../assets/ondas.png'
import Electromagnetismo from '../../assets/electromagnetismo.png'
import { useNavigate } from 'react-router-dom'

export function NuevaActividad(props) {
  const nombreCurso = props.materia
  const [imagen, setImagen] = useState('')
  const navigate = useNavigate()

  function iconoActividad(nombre) {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      case 'Ondas':
        setImagen(Ondas)
        break
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoActividad(nombreCurso)
  }, [])

  return (
    <div className='aside-activity' onClick={() => navigate('/actividad')}>
      <img src={imagen} className='activity-image' />
      <div className='activity-description'>
        <h4 className='activity-title'>{props.titulo}</h4>
        <p className='activity-text'>{props.materia}</p>
      </div>
    </div>
  )
}
