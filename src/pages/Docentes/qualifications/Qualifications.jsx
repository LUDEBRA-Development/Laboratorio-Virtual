import { useEffect, useState } from 'react'
import { useUpdateTask } from '../../../store/infoUpdateTaskStore'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import './Qualifications.css'
import { Preloader } from '../../General/preloader/Preloader'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'
import { defaultUrlPath } from '../../../models/GlobalVars'

export function Qualifications() {
  // Estados
  const [taskQuaValues, setTaskQuaValues] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)

  const userToken = useInfoUsersStore(state => state.token)
  const taskId = useUpdateTask(state => state.idTask)

  const [inputQua, setInputQua] = useState({
    Qualification: '',
    Id_task: taskId,
    Feedback_comments: 'Calificada',
  })

  // Función para actualizar la tarea
  async function updateTask() {
    try {
      const response = await fetch(`${defaultUrlPath}/userTasks/danna@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(taskQuaValues),
      })
      console.log(taskQuaValues)

      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }

      const data = await response.json()
      console.log(data)
      alert('Actividad actualizada con éxito')
    } catch (error) {
      setMensaje(error.message)
    }
  }

  // Efecto para manejar la actualización de la tarea cuando taskQuaValues cambia
  useEffect(() => {
    if (taskQuaValues) {
      updateTask(taskQuaValues)
    }
  }, [taskQuaValues])

  // Manejo de envío de formulario
  const handleSubmit = e => {
    e.preventDefault()
    const { Qualification, Id_task, Feedback_comments } = inputQua

    if (Qualification) {
      setTaskQuaValues({
        Qualification: parseFloat(Qualification),
        Id_task,
        Feedback_comments
      })
    }
  }

  // Manejo de cambio de entrada
  const handleInputChange = setter => e => {
    const { name, value } = e.target
    setter(prev => ({ ...prev, [name]: value }))
  }

  // Efecto para mostrar el preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Renderizado del componente
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
                <input type='text' name='Qualification' onChange={handleInputChange(setInputQua)} required />
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
