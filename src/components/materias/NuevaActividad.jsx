import { useEffect, useState } from 'react'
import '../styles/materias/NuevaActividad.css'
import Ondas from '../../assets/ondas.png'
import Electromagnetismo from '../../assets/electromagnetismo.png'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export function NuevaActividad(props) {
  const iconoCurso = props.materia
  const [imagen, setImagen] = useState('')
  const navigate = useNavigate()

  const mysqlDatetime = props.expiracion

  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')


  function formatearFecha() {
    // Convertir la cadena a un objeto Date
    const date = new Date(mysqlDatetime)
    // Extraer solo la parte de la fecha
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // Los meses empiezan desde 0
    const day = String(date.getDate()).padStart(2, '0')
    // Extraer la parte de la hora
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    setFormattedDate(`${day}/${month}/${year}`)
    setFormattedTime(`${hours}:${minutes}:${seconds}`)
  }

  function iconoActividad(nombre) {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      case 'Ondas': // matematicas
        setImagen(Ondas)
        break
      case 'Matematicas':
        setImagen(Electromagnetismo)
        break
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoActividad(iconoCurso)
    formatearFecha()
  }, [])

  return (
    <div className='aside-activity' onClick={() => navigate(`/Activitiesoverview/${props.index}`)}>
      <img src={imagen} className='activity-image' />
      <div className='activity-description'>
        <h4 className='activity-title'>{props.titulo}</h4>
        <p className='activity-text'>{props.materia}</p>
        <p>Fecha Entrega: {`${formattedDate} - ${formattedTime}`}</p>
      </div>
    </div>
  )
}
