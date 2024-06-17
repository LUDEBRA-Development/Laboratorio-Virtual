import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Preloader } from '../../General/preloader/Preloader'
import './ActivitiesOverview.css'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { useUpdateTask } from '../../../store/infoUpdateTaskStore'
import { Footer } from '../../../components/overview/Footer'

export function ActivitiesOverview({ data }) {
  const navigate = useNavigate()
  const { index } = useParams()
  const itemIndex = index
  const item = data[itemIndex]

  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const [formattedDateExp, setFormattedDateExp] = useState('')
  const [formattedTimeExp, setFormattedTimeExp] = useState('')
  const [timeRemaining, setTimeRemaining] = useState('')
  const [statusTask, setStatusTask] = useState('')
  const [nombreMat, setNombreMat] = useState('')
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  const { getIdTask } = useUpdateTask()

  useEffect(() => {
    if (!item) {
      return
    }

    const mysqlDatetime = item.Creation_date
    const mysqlDatetimeExp = item.Expiration_date

    getIdTask(item.Id_task)
    formatDates(mysqlDatetime, mysqlDatetimeExp)
    updateNombreMateria(item.Id_course)
    updateEstadoTarea(item.statu)
    calcularTiempoRestante(mysqlDatetimeExp)

    const timer = setInterval(() => calcularTiempoRestante(mysqlDatetimeExp), 60000)

    setLoading(false)
    return () => clearInterval(timer)
  }, [item])

  const formatDates = (creationDate, expirationDate) => {
    setFormattedDate(formatDate(creationDate))
    setFormattedTime(formatTime(creationDate))
    setFormattedDateExp(formatDate(expirationDate))
    setFormattedTimeExp(formatTime(expirationDate))
  }

  const formatDate = datetime => {
    const date = new Date(datetime)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const formatTime = datetime => {
    const date = new Date(datetime)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const calcularTiempoRestante = expirationDate => {
    const now = new Date()
    const expiration = new Date(expirationDate)
    const difference = expiration - now

    if (difference <= 0) {
      setTimeRemaining('0 días 0 horas')
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    setTimeRemaining(`${days} días ${hours} horas`)
  }

  const updateEstadoTarea = statu => {
    const estados = ['Sin Enviar', 'Asignada', 'Enviada', 'Calificada', 'Vencida']
    setStatusTask(estados[statu] || 'Sin Enviar')
  }

  const updateNombreMateria = idCourse => {
    const materias = {
      1: 'Matemáticas',
      2: 'Ondas',
      3: 'Electromagnetismo',
      4: 'Español',
    }
    setNombreMat(materias[idCourse] || '')
  }

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

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading2(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading2 ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='body-title-taskOver'>
            <h3>{nombreMat}</h3>
          </div>
          <div className='taskpriv-container'>
            <h1>{item?.Name}</h1>
            <p>Apertura: {`${formattedDate} - ${formattedTime}`}</p>
            <p>Vencimiento: {`${formattedDateExp} - ${formattedTimeExp}`}</p>
            <hr />
            <p>{item?.Description}</p>
            <h3>Archivos</h3>
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
                    <td className='info-task-table'>Calificación</td>
                    <td className='status-task-table'>{item.infoUsers.Qualification}</td>
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

              <button onClick={() => navigate('/updateTask')} className='btn-activity'>
                {localStorage.getItem('site') === '2' ? 'Actualizar Actividad' : 'Entregar Actividad'}
              </button>

              {localStorage.getItem('site') === '2' ? (
                <button onClick={() => navigate(`/calificaciones/${index}`)} className='btn-activity2'>
                  Calificar Actividad
                </button>
              ) : ( ''
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
