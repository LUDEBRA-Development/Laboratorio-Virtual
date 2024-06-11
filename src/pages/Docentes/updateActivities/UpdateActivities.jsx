import { useState, useEffect } from 'react'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { useUpdateTask } from '../../../store/infoUpdateTaskStore'
import './UpdateActivities.css'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'
import { Preloader } from '../../General/preloader/Preloader'

export function UpdateActivities() {
  const [taskValuesDoc, setTaskValuesDoc] = useState(null)
  const [taskValuesEst, setTaskValuesEst] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const [inputDoc, setInputDoc] = useState({
    Name: '',
    Descriptions: '',
    Expiration_date: '',
    Feedback_comments: '',
  })

  const [inputEst, setInputEst] = useState({
    Comment: '',
  })

  const userToken = useInfoUsersStore(state => state.token)
  const taskId = useUpdateTask(state => state.idTask)

  const updateTask = async taskValues => {
    try {
      const response = await fetch(`${defaultUrlPath}/tasks/${taskId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(taskValues),
      })

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

  useEffect(() => {
    if (taskValuesDoc || taskValuesEst) {
      const site = localStorage.getItem('site')
      if (site === '2') {
        updateTask(taskValuesDoc)
      } else {
        updateTask(taskValuesEst)
      }
    }
  }, [taskValuesDoc, taskValuesEst, userToken, taskId])

  const handleSubmitDocente = e => {
    e.preventDefault()
    const { Name, Descriptions, Expiration_date, Feedback_comments } = inputDoc
    if (Name && Descriptions && Expiration_date) {
      setTaskValuesDoc({ Name, Descriptions, Expiration_date, Feedback_comments })
    }
  }

  const handleSubmitEstudiante = e => {
    e.preventDefault()
    const { Comment } = inputEst
    if (Comment) {
      setTaskValuesEst({ Comment })
    }
  }

  const handleInputChange = setter => e => {
    const { name, value } = e.target
    setter(prev => ({ ...prev, [name]: value }))
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {localStorage.getItem('site') === '2' ? (
        <div>
          {loading ? (
            <Preloader />
          ) : (
            <div>
              <HeaderSubjects />
              <div className='update-container'>
                <div className='form-update'>
                  <h1>Actualizar Actividad</h1>
                  <form onSubmit={handleSubmitDocente}>
                    <p>Nombre:</p>
                    <input type='text' name='Name' onChange={handleInputChange(setInputDoc)} required />
                    <p>Descripción de la Actividad:</p>
                    <input type='text' name='Descriptions' onChange={handleInputChange(setInputDoc)} required />
                    <p>Fecha de Expiración:</p>
                    <input
                      type='datetime-local'
                      name='Expiration_date'
                      onChange={handleInputChange(setInputDoc)}
                      required
                    />
                    <p>Comentarios:</p>
                    <input type='text' name='Feedback_comments' onChange={handleInputChange(setInputDoc)} />
                    <button type='submit'>Actualizar Actividad</button>
                  </form>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </div>
      ) : (
        <div>
          {loading ? (
            <Preloader />
          ) : (
            <div>
              <HeaderSubjects />
              <div className='update-container'>
                <div className='form-update'>
                  <h1>Agregar Entrega</h1>
                  <form onSubmit={handleSubmitEstudiante}>
                    <p>Comentarios de la Entrega:</p>
                    <input type='text' name='Comment' onChange={handleInputChange(setInputEst)} required />
                    <button type='submit'>Actualizar Actividad</button>
                  </form>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </div>
      )}
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}
