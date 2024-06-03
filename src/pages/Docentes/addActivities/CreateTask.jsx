import axios from 'axios'
import { useState, useEffect } from 'react'
import { useInfoNewTask } from '../../../store/infoNewTaskStore'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useInfoUsersStore } from '../../../store/infoUsersStore'

export function CreateTask() {
  const [taskValues, setTaskValues] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const [input, setInput] = useState({
    nameTask: '',
    descripcionTask: '',
    dateTask: '',
  })

  const courseId = useInfoNewTask(state => state.idCourseValue)
  const userToken = useInfoUsersStore(state => state.token)

  useEffect(() => {
    if (taskValues) {
      const createTask = async () => {
        try {
          const response = await fetch(`${defaultUrlPath}/tasks`, {
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
        } catch (error) {
          setMensaje(error.message)
        }
      }

      createTask()
    }
  }, [taskValues, userToken])

  const handleSubmitEvent = e => {
    e.preventDefault()
    if (input.nameTask !== '' && input.descripcionTask !== '' && input.dateTask !== '') {
      setTaskValues({
        Id_simulador: 1,
        Id_course: courseId,
        Name: input.nameTask,
        Descriptions: input.descripcionTask,
        Expiration_date: input.dateTask,
      })
    }
  }

  const handleInput = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form action='' onSubmit={handleSubmitEvent}>
        <p>Name</p>
        <input type='text' name='nameTask' onChange={handleInput} required />
        <p>Descripcion De la Actividad</p>
        <input type='text' name='descripcionTask' onChange={handleInput} required />
        <p>Tiempo de la actividad</p>
        <input type='datetime-local' name='dateTask' onChange={handleInput} required />
        <button type='submit'>Crear</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}
