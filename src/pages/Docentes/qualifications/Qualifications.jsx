import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUpdateTask } from '../../../store/infoUpdateTaskStore'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import './Qualifications.css'
import { Preloader } from '../../General/preloader/Preloader'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'
import { defaultUrlPath } from '../../../models/GlobalVars'

export function Qualifications({ data }) {
  const { index } = useParams()
  const itemIndex = index
  const item = data[itemIndex]
  const [email, setEmail] = useState('')
  const [taskQuaValues, setTaskQuaValues] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)
  const userToken = useInfoUsersStore(state => state.token)
  const taskId = useUpdateTask(state => state.idTask)
  const [inputQua, setInputQua] = useState({
    Qualification: 0,
    Id_task: taskId,
    Feedback_comments: 'Calificada',
  })

  const renderFiles = () => {
    if (!item.infoUsers || item.infoUsers.length === 0) {
      return <p>No hay archivos adjuntos</p>
    }

    return (
      <ul>
        {item.infoUsers.map((file, index) => (
          <li key={index}>
            <a onClick={() => setEmail(file.email_User)}>{file.email_User}</a>
          </li>
        ))}
      </ul>
    )
  }

  const updateTask = async () => {
    try {
      const response = await fetch(`${defaultUrlPath}/userTasks/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(taskQuaValues),
      })

      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }

      const data = await response.json()
      alert('Actividad actualizada con éxito')
    } catch (error) {
      setMensaje(error.message)
    }
  }

  useEffect(() => {
    if (taskQuaValues) {
      updateTask()
    }
  }, [taskQuaValues])

  const handleSubmit = e => {
    e.preventDefault()
    const { Qualification, Id_task, Feedback_comments } = inputQua

    if (Qualification) {
      setTaskQuaValues({
        Qualification: parseFloat(Qualification),
        Id_task,
        Feedback_comments,
      })
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setInputQua(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    renderFiles()
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='update-container'>
            <div className='form-update'>
              <h1>Calificar Actividad</h1>
              <form onSubmit={handleSubmit}>
                <p>Calificación:</p>
                <input type='text' name='Qualification' onChange={handleInputChange} required />
                <button type='submit'>Calificar Actividad</button>
              </form>
              {mensaje && <p>{mensaje}</p>}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
