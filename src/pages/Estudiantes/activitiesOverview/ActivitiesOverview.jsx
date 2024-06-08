import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Preloader } from '../../General/preloader/Preloader'
import './ActivitiesOverview.css'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'

export function ActivitiesOverview({ data }) {
  const navigate = useNavigate()
  const { index } = useParams()
  const itemIndex = index
  const item = data[itemIndex]

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  const mysqlDatetime = item.Creation_date
  const mysqlDatetimeExp = item.Expiration_date

  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const [formattedDateExp, setFormattedDateExp] = useState('')
  const [formattedTimeExp, setFormattedTimeExp] = useState('')
  const [timeRemaining, setTimeRemaining] = useState('')

  function formatearFecha() {
    const date = new Date(mysqlDatetime)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setFormattedDate(`${day}/${month}/${year}`)
    setFormattedTime(`${hours}:${minutes}`)
  }

  function formatearFechaExp() {
    const date = new Date(mysqlDatetimeExp)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setFormattedDateExp(`${day}/${month}/${year}`)
    setFormattedTimeExp(`${hours}:${minutes}`)
  }

  function calcularTiempoRestante() {
    const now = new Date()
    const expirationDate = new Date(mysqlDatetimeExp)
    const difference = expirationDate - now

    if (difference <= 0) {
      setTimeRemaining('0 días 0 horas')
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    setTimeRemaining(`${days} días ${hours} horas`)
  }

  const [statusTask, setStatusTask] = useState('')
  function estadoTarea() {
    switch (item.statu) {
      case 1:
        setStatusTask('Asignada')
        break
      case 2:
        setStatusTask('Enviada')
        break
      case 3:
        setStatusTask('Calificada')
        break
      case 4:
        setStatusTask('Vencida')
        break
      default:
        setStatusTask('Sin Enviar')
        break
    }
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    formatearFecha()
    formatearFechaExp()
    estadoTarea()
    calcularTiempoRestante()
    const timer = setInterval(calcularTiempoRestante, 60000)
    setLoading(false)
    return () => clearInterval(timer)
  }, [])

  const renderFiles = () => {
    if (!item.files || item.files.length === 0) {
      return <p>No hay archivos adjuntos</p>
    }

    return (
      <ul>
        {item.files.map((file, index) => (
          <li key={index}>
            <a href={file.Url_file} target='_blank' rel='noopener noreferrer'>
              {file.Url_file}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='body-title-taskOver'>
            <h3>{item.Course}</h3>
          </div>
          {/* <h1>{item?.Course}</h1> */}
          <h2>{item?.Name}</h2>
          <p>Apertura: {`${formattedDate} - ${formattedTime}`}</p>
          <p>Vencimiento: {`${formattedDateExp} - ${formattedTimeExp}`}</p>
          <hr />
          <p>{item?.Description}</p>
          <h4>Archivos</h4>
          <div className='files-list'>{renderFiles()}</div>

          <h3>Estado de la Entrega</h3>
          <div className='task-table-container'>
            <table className='task-table'>
              <tbody>
                <tr>
                  <td className='info-task-table'>Estado de la Entrega</td>
                  <td className='status-task-table'>{statusTask}</td>
                </tr>
                <tr>
                  <td className='info-task-table'>Calificacion</td>
                  <td className='status-task-table'>{item?.Qualification_date}</td>
                </tr>
                <tr>
                  <td className='info-task-table'>Tiempo Restante</td>
                  <td className='status-task-table'>{timeRemaining}</td>
                </tr>
                <tr>
                  <td className='info-task-table'>Simulador</td>
                  <td className='status-task-table'>{item?.Simulator}</td>
                </tr>
                <tr>
                  <td className='info-task-table'>Comentarios</td>
                  <td className='status-task-table'>{item?.Feedback_comments}</td>
                </tr>
              </tbody>
            </table>

            {localStorage.getItem('site') === '2' ? (
              <>
                <button onClick={() => navigate('/updateTask')}>Actualizar Tarea</button>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </div>
  )
}
