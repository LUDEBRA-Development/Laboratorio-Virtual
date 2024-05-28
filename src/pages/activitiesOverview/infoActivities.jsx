import { useParams } from 'react-router-dom'
import './InfoActivities.css'

/*
Esto es lo que contiene la api en las actividades

Course
Task
Descriptions
Simulatoe
*/

export function InfoActivities() {
  const { taskId } = useParams()
  const activities = JSON.parse(localStorage.getItem('actividad'))
  const activity = activities.find(activity => activity.id === parseInt(taskId))

  return (
    <div className='info-activities'>
      <h2 className='info-activities-title'>{activity.Task}</h2>
      <p className='info-activities-course'><strong>Course:</strong> {activity.Course}</p>
      <p className='info-activities-description'><strong>Description:</strong> {activity.Description}</p>
      <p className='info-activities-simulator'><strong>Simulator:</strong> {activity.Simulator}</p>
    </div>
  )
}
