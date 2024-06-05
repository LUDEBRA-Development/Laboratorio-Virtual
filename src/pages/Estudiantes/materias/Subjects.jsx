import { useEffect, useState } from 'react'
import './Subjects.css'
import { useNavigate } from 'react-router-dom'
import { FooterLogin } from '../../../components/login/FooterLogin'
import { NuevaMateria } from '../../../components/materias/NuevaMateria'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { NuevaActividad } from '../../../components/materias/NuevaActividad'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { useInfoTasksStore } from '../../../store/infoTasksStore'
import { useInfoSubjectsStore } from '../../../store/infoSubjectsStore'
import { Preloader } from '../../General/preloader/Preloader'
import axios from 'axios'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'

export function Subjects() {
  const navigate = useNavigate()
  const [dataSuccess, setDataSuccess] = useState([])
  const [taskCourse, setTaskCourse] = useState([])

  // Estado global de Zustand
  const userToken = useInfoUsersStore(state => state.token)

  const { getStructure } = useInfoTasksStore()
  const { getStructureSubjects } = useInfoSubjectsStore()

  const fetchData = () => {
    axios
      .get(`${defaultUrlPath}/users/info/courses`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        const responseData = response.data
        setDataSuccess(responseData.body)
        getStructureSubjects(responseData.body)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const fetchActividades = () => {
    axios
      .get(`${defaultUrlPath}/tasks`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        const responseData = response.data
        setTaskCourse(responseData.body)
        getStructure(responseData.body)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    fetchData()
    fetchActividades()
  }, [])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {localStorage.getItem('site') !== '3' ? (
        (navigate('/login'), alert('Oops! You Cannot Access This Page'))
      ) : loading ? (
        <Preloader />
      ) : (
        <div className='body-subjects'>
          <HeaderSubjects />
          <div className='body-title-subject'>
            <h3>MIS CURSOS</h3>
          </div>
          <main className='main-subject'>
            <section className='section-subject'>
              {dataSuccess.map((course, index) => (
                <NuevaMateria key={index} name={course.Name} id={index} />
              ))}
            </section>
            <aside className='aside-subject'>
              <h2 className='aside-title'>Actividades</h2>
              {taskCourse.map((task, index) => (
                <NuevaActividad
                  key={index}
                  titulo={task.Name}
                  materia={task.Course}
                  expiracion={task.Expiration_date}
                  index={index}
                />
              ))}
            </aside>
          </main>
          <FooterLogin />
        </div>
      )}
    </div>
  )
}
