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
  // const [datosUsuario, setDatosUsuario] = useState(null)
  const navigate = useNavigate()

  const loginPost = data => {
    const validacion = {
      Email: data.email,
      Password: data.password,
    }
    axios
      .post(`${defaultUrlPath}/auth/login`, validacion, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const responseData = response.data
        tokenDecodified(responseData.body)
        setUsuarioValido(true)
        // setDatosUsuario(responseData.body);
        // Probar esto <-- Se llama 2 veces la funcion
      })
      .catch(error => {
        alert('Oops! Credenciales Invalidas', error)
      })
  }
  const { getProfilePicStore } = useInfoUsersStore()
  const { getUserNameStore } = useInfoUsersStore()
  const { getUserToken } = useInfoUsersStore()

  function tokenDecodified(token) {
    const arrayToken = token.split('.')
    const tokenPayload = JSON.parse(atob(arrayToken[1]))
    loginAction(tokenPayload)
    // Esta parte es de Zustand
    getProfilePicStore(tokenPayload.Imagen)
    getUserNameStore(tokenPayload.First_Name)
    getUserToken(token)

    if (tokenPayload) {
      console.log('Cargando Credenciales de Usuario')
    }
  }

  function loginAction(payload) {
    if (usuarioValido) {
      console.log('Usuario validado correctamente')
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
  }

  const logOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('site')
    // Probar este user Storage
    sessionStorage.removeItem('user-storage')
    localStorage.removeItem('cookiesconfirmation')
    navigate('/login')
  }

  return <AuthContext.Provider value={{ token, user, loginPost, logOut }}>{children}</AuthContext.Provider>
}
// Hook Personalizado
export const useAuth = () => {
  return useContext(AuthContext)
}
