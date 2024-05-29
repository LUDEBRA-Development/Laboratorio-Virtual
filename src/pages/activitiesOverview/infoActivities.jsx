import { useNavigate } from 'react-router-dom'
import { useAuth } from '../login/AuthProvider'
import { useInfoUsersStore } from '../../store/infoUsersStore'
// import './InfoActivities.css'

/*
Esto es lo que contiene la api en las actividades

Course
Task
Descriptions
Simulatoe
*/

export function InfoActivities() {
  const navigate = useNavigate()
  const auth = useAuth()


  //Esto es del Zustand
  const taskCourseValue = useInfoUsersStore(state => state.Course)
  const taskDescriptionValue = useInfoUsersStore(state => state.Descriptions)
  const taskSimulatorValue = useInfoUsersStore(state => state.Simulator)
  const taskValue = useInfoUsersStore(state => state.Task)
  // const taskTokenValue = useInfoUsersStore(state => state.token)

  return (
    <div className='info-activities'>
      <h2 className='info-activities-title'>{taskValue}</h2>
      <p className='info-activities-course'><strong>Course:</strong> {taskCourseValue}</p>
      <p className='info-activities-description'><strong>Description:</strong> {taskDescriptionValue}</p>
      <p className='info-activities-simulator'><strong>Simulator:</strong> {taskSimulatorValue}</p>
    </div>
  )
}
