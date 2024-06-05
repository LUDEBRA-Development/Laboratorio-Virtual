import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PrivateTask.css'

export function PrivateTask(props) {
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

  useEffect(() => {
    formatearFecha()
  }, [])

  return (
    <div className='private-aside-activity' onClick={() => navigate(`/Activitiesoverview/${props.index}`)}>
      <div className='private-activity-description'>
        <p style={{ fontWeight: 'bold' }}>{props.titulo}</p>
        <p>Fecha Entrega: {`${formattedDate}`}</p>
      </div>
    </div>
  )
}
