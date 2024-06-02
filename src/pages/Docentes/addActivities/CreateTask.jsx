import axios from 'axios'
import { useState } from 'react'
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

  const handleSubmitEvent = e => {
    e.preventDefault()
    if (input.nameTask !== '' && input.descripcionTask !== '' && input.dateTask !== '') {
      try {
        setTaskValues({
          Id_simulador: 1,
          Id_course: `${courseId}`, // Esto da error
          Name: input.nameTask,
          Descriptions: input.descripcionTask,
          Expiration_date: input.dateTask,
        })

        fetch(`${defaultUrlPath}/tasks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(taskValues),
        })
          .then(response => response.json())
          .then(data => console.log(data))
      } catch (error) {
        setMensaje(error.message)
      }
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
      {console.log(mensaje)}
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
    </div>
  )
}
