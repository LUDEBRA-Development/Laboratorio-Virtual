import { useEffect, useState } from 'react'
import './Subjects.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { FooterLogin } from '../../../components/login/FooterLogin'
import { Footer } from '../../../components/overview/Footer'
import { NuevaMateria } from '../../../components/materias/NuevaMateria'
import { NuevaActividad } from '../../../components/materias/NuevaActividad'
import { Preloader } from '../../General/preloader/Preloader'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'

import { defaultUrlPath } from '../../../models/GlobalVars'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { useInfoTasksStore } from '../../../store/infoTasksStore'
import { useInfoSubjectsStore } from '../../../store/infoSubjectsStore'

export function Subjects() {
  const navigate = useNavigate()
  const [dataSuccess, setDataSuccess] = useState([])
  const [taskCourse, setTaskCourse] = useState([])
  const [loading, setLoading] = useState(true)

  // Estado global de Zustand
  const userToken = useInfoUsersStore(state => state.token)
  const { getStructure } = useInfoTasksStore()
  const { getStructureSubjects } = useInfoSubjectsStore()

  // Fetch data for courses
  const fetchData = async () => {
    try {
      const response = await axios.get(`${defaultUrlPath}/users/info/courses`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      })
      const responseData = response.data
      setDataSuccess(responseData.body)
      getStructureSubjects(responseData.body)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Fetch data for tasks
  const fetchActividades = async () => {
    try {
      const response = await fetch(`${defaultUrlPath}/users/info/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      })
      const responseData = await response.json()
      setTaskCourse(responseData.body)
      // Cambiar esto
      console.log(responseData.body)
      getStructure(responseData.body)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
    fetchActividades()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (localStorage.getItem('site') !== '3') {
    navigate('/login')
    alert('Oops! You Cannot Access This Page')
    return null
  }

  return (
    <div>
      {loading ? (
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
              {taskCourse.length === 0 ? (
                <p className='aside-title'>No hay actividades</p>
              ) : (
                taskCourse.map((task, index) => (
                  <NuevaActividad
                    key={index}
                    titulo={task.Name}
                    materia={task.Course}
                    expiracion={task.Expiration_date}
                    index={index}
                    idMateria={task.Id_course}
                  />
                ))
              )}
            </aside>
          </main>
          {/* <FooterLogin /> */}
          <Footer />
        </div>
      )}
    </div>
  )
}
