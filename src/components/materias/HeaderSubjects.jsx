import { useNavigate } from 'react-router-dom'
import { useInfoUsersStore } from '../../store/infoUsersStore'
import logolabs from '../../assets/logowithoutbackground.png'
import { useAuth } from '../../pages/General/login/AuthProvider'
import '../styles/materias/HeaderSubjects.css'
import { TooltipWrapper } from '../tooltip/TooltipWrapper'

export function HeaderSubjects() {
  const auth = useAuth()
  const navigate = useNavigate()
  const profilePicValue = useInfoUsersStore(state => state.profilePic)
  const userNameValue = useInfoUsersStore(state => state.userName)

  return (
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
        <div className='profile-subject' style={{ backgroundImage: `url(${profilePicValue})` }}></div>

        <TooltipWrapper text={'Personaliza tu perfil'}>
          <p className='profile-username-subject' onClick={() => navigate('/updateUser')}>
            {userNameValue}
          </p>
        </TooltipWrapper>
      </div>
      <button className='btn-sub boton-subject' onClick={() => auth.logOut()}>
        Logout
      </button>
    </header>
  )
}
