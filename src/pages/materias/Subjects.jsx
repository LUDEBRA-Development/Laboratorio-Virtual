import React from 'react'
import './Subjects.css'
import { useNavigate } from 'react-router-dom'
import logolabs from '../../assets/logo without background.png'
import electromagnetismo from '../../assets/electromagnetismo.png'
import ondas from '../../assets/ondas.png'
import { FooterLogin } from '../../components/login/FooterLogin'
import { useAuth } from '../login/AuthProvider'

export function Subjects() {
  const navigate = useNavigate()
  const auth = useAuth()
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
              <a href='' onClick={() => navigate('/catalogo')}>Simuladores</a>
            </li>
          </ul>
          <div className='profile-subject'></div>
          <p className='profile-username-subject'>Admin</p>
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
          <div className='materia-subject'>
            <div className='materia-image'>
              <img src={electromagnetismo} />
            </div>
            <hr className='materia-hr' />
            <div className='materia-text'>
              <p>Electromagnetismo</p>
            </div>
          </div>
          <div className='materia-subject'>
            <div className='materia-image'>
              <img src={ondas} />
            </div>
            <hr className='materia-hr' />
            <div className='materia-text'>
              <p>Ondas</p>
            </div>
          </div>
        </section>
        <aside className='aside-subject'>
          <h2 className='aside-title'>Actividades</h2>
          <div className='aside-activity' onClick={() => navigate('/actividades')}>
            <img src={electromagnetismo} className='activity-image' />
            <div className='activity-description'>
              <h4 className='activity-title'>Actividad Simulador 1</h4>
              <p className='activity-text'>Electromagnetismo</p>
            </div>
          </div>
        </aside>
      </main>
      <FooterLogin />
    </div>
  )
}
