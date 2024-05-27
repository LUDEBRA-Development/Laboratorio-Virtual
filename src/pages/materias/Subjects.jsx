import { useEffect, useState } from 'react'
import './Subjects.css'
import { useNavigate } from 'react-router-dom'
import logolabs from '../../assets/logo without background.png'
import { FooterLogin } from '../../components/login/FooterLogin'
import { useAuth } from '../login/AuthProvider'
import { NuevaMateria } from '../../components/materias/NuevaMateria'
import { defaultUrlPath } from './GetInfoUser'
import { NuevaActividad } from '../../components/materias/NuevaActividad'

export function Subjects() {
  const navigate = useNavigate()
  const auth = useAuth()
  const [dataSuccess, setDataSuccess] = useState([])
  const [taskCourse, setTaskCourse] = useState([])
  let usernameData = localStorage.getItem('firstnamevalue')
  let userProfilePic = localStorage.getItem('profilepicturevalue')

  const fetchData = () => {
    fetch(`${defaultUrlPath}/users/info/courses/${localStorage.getItem('emailvalue')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('tokenvalue')}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(console.log('La respuesta no fue satisfactoria'))
        }
        return response.json()
      })
      .then(responseData => {
        setDataSuccess(responseData.body)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const fetchActividades = () => {
    fetch(`${defaultUrlPath}/users/info/task/${localStorage.getItem('emailvalue')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('tokenvalue')}`,
      },
    })
      .then(response => response.json())
      .then(responseData => {
        setTaskCourse(responseData.body)
      })
  }

  useEffect(() => {
    fetchData()
    fetchActividades()
  }, [])

  return (
    <div className='body-subjects'>
      <header className='header-subject'>
        <img src={logolabs} className='logo-subject' />
        <h2 className='subject-title'>LUDEBRA LABS</h2>
        <div className='ul-container-subjects'>
          <ul>
            <li>
              <a href=''>Mis Cursos</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='' onClick={() => navigate('/catalogo')}>
                Simuladores
              </a>
            </li>
          </ul>
          <div className='profile-subject' style={{ backgroundImage: `url(${userProfilePic})` }}>
          </div>
          <p className='profile-username-subject'>{usernameData}</p>
        </div>
        <button className='boton-subject' onClick={() => auth.logOut()}>
          Logout
        </button>
      </header>
      <div className='body-title-subject'>
        <h3>MIS CURSOS</h3>
      </div>
      <main className='main-subject'>
        <section className='section-subject'>
          {dataSuccess.map((course, index) => (
            <NuevaMateria key={index} name={course.Name} />
          ))}
        </section>
        <aside className='aside-subject'>
          <h2 className='aside-title'>Actividades</h2>
          {taskCourse.map((task, index) => (
            <NuevaActividad key={index} titulo={task.Task} materia={task.Course} />
          ))}
        </aside>
      </main>
      <FooterLogin />
    </div>
  )
}
