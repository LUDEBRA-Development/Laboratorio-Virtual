import { useContext, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuarioValido, setUsuarioValido] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('site') || '')
  const navigate = useNavigate()

  const { getProfilePicStore, getUserNameStore, getUserToken, getUserSecondNameStore } = useInfoUsersStore()

  const loginPost = async data => {
    const validacion = {
      Email: data.email,
      Password: data.password,
    }

    try {
      const response = await axios.post(`${defaultUrlPath}/auth/login`, validacion, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const responseData = response.data
      tokenDecodified(responseData.body)
    } catch (error) {
      alert('Oops! Credenciales Invalidas', error)
    }
  }

  function tokenDecodified(token) {
    const arrayToken = token.split('.')
    const tokenPayload = JSON.parse(atob(arrayToken[1]))

    // Actualizar el estado y ejecutar la acción de login de forma sincrónica
    setUsuarioValido(true)
    getProfilePicStore(tokenPayload.Imagen)
    getUserNameStore(tokenPayload.First_Name)
    getUserSecondNameStore(tokenPayload.Last_Name)
    getUserToken(token)
    loginAction(tokenPayload)
  }

  function loginAction(payload) {
    const { rol, email_User } = payload
    const commonActions = () => {
      setUser(email_User)
      setToken(payload)
      localStorage.setItem('site', rol)
    }

    switch (rol) {
      case '1':
        commonActions()
        navigate('/catalogo')
        break
      case '2':
        commonActions()
        console.log(rol)
        navigate('/docentes')
        break
      case '3':
        commonActions()
        navigate('/materias')
        break
      case '4':
        console.log(rol)
        commonActions()
        navigate('/catalogo')
        break
      default:
        console.error('Rol no reconocido')
        break
    }
  }

  const logOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('site')
    sessionStorage.removeItem('user-storage')
    localStorage.removeItem('cookiesconfirmation')
    navigate('/login')
  }

  return <AuthContext.Provider value={{ token, user, loginPost, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
