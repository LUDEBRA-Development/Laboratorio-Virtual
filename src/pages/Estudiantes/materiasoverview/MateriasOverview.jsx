import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Preloader } from '../../General/preloader/Preloader'
import { useInfoNewTask } from '../../../store/infoNewTaskStore'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { PrivateTask } from '../privateTask/PrivateTask'
import './MateriasOverview.css'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'

export function MateriasOverview({ datos }) {
  const { id } = useParams()
  const itemIndex = id
  const item = datos[itemIndex]
  const navigate = useNavigate()

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  const { getIdCourse } = useInfoNewTask()
  const [loading, setLoading] = useState(true)

  const [privateAct, setPrivateAct] = useState([])

  const userToken = useInfoUsersStore(state => state.token)
  function materiasFetch() {
    fetch(`${defaultUrlPath}/tasks/course/${item.Id_course}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        const responseDat = responseData
        setPrivateAct(responseDat.body)
      })
  }

  useEffect(() => {
    materiasFetch()
    getIdCourse(item?.Id_course)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='body-title-subOver'>
            <h3>{item.Name}</h3>
          </div>

          {localStorage.getItem('site') === '2' ? (
            <>
              <button onClick={() => navigate('/newTask')}>Crear Nueva Tarea</button>
            </>
          ) : (
            ''
          )}

          <div className='private-center'>
            <h2>Actividades Del Curso</h2>
            <div className='private-container'>
              {privateAct.map((task, index) => (
                <PrivateTask key={index} titulo={task.Name} expiracion={task.Expiration_date} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
