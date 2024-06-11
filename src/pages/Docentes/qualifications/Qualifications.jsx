import { useEffect, useState } from 'react'
import { useUpdateTask } from '../../../store/infoUpdateTaskStore'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import './Qualifications.css'
import { Preloader } from '../../General/preloader/Preloader'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'
import { defaultUrlPath } from '../../../models/GlobalVars'

export function Qualifications() {
  const [taskQuaValues, setTaskQuaValues] = useState(null)
  const [mensaje, setMensaje] = useState('')

  const userToken = useInfoUsersStore(state => state.token)
  const taskId = useUpdateTask(state => state.idTask)
  const [inputQua, setInputQua] = useState({
    Qualification: '',
    Id_task: taskId,
    email_User: 'danna@gmail.com',
  })

  const updateTask = async taskValues => {
    try {
      const response = await fetch(`${defaultUrlPath}/tasks/qualification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(taskValues),
      })
      console.log(inputQua)
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

  useEffect(() => {
    if (taskQuaValues) {
      const site = localStorage.getItem('site')
      if (site === '2') {
        updateTask(taskQuaValues)
      } else {
        updateTask(taskQuaValues)
      }
    }
  }, [taskQuaValues, userToken, taskId])

  const handleSubmit = e => {
    e.preventDefault()
    const { Qualification, Id_task, email_User } = inputQua
    if (Qualification) {
      setTaskQuaValues({ Qualification, Id_task, email_User })
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
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='update-container'>
            <div className='form-update'>
              <h1>Calificar Actividad</h1>
              <form onSubmit={handleSubmit}>
                <p>Calificacion:</p>
                <input type='text' name='Qualification' onChange={handleInputChange(setInputQua)} required />
                <button type='submit'>Calificar Actividad</button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
