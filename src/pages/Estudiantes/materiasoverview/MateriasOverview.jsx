import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Preloader } from '../../General/preloader/Preloader'
import { useInfoNewTask } from '../../../store/infoNewTaskStore'

export function MateriasOverview({ datos }) {
  const { id } = useParams()
  const itemIndex = id
  const item = datos[itemIndex]
  const navigate = useNavigate()
  const idCourse = parseInt(id) + 1

  const { getIdCourse } = useInfoNewTask()

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getIdCourse(idCourse)
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
          {console.log(idCourse)}
          <h2>Detalles del Item {itemIndex}</h2>
          <pre>{JSON.stringify(item, null, 2)}</pre>
          <p>{item?.Name}</p>
          <button onClick={() => navigate('/newTask')}>Crear Nueva Tarea</button>
        </div>
      )}
    </div>
  )
}
