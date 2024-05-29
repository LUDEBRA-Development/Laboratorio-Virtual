import { useContext, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultUrlPath } from '../../models/GlobalVars'
import { useInfoUsersStore } from '../../store/infoUsersStore'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuarioValido, setUsuarioValido] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('site') || '')
  const navigate = useNavigate()

  const loginPost = data => {
    const validacion = {
      Email: data.email,
      Password: data.password,
    }

    fetch(`${defaultUrlPath}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido
      },
      body: JSON.stringify(validacion),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(console.log('La respuesta no fue satisfactoria'))
        }
        return response.json()
      })

      .then(responseData => {
        tokenDecodified(responseData.body)
        setUsuarioValido(true)
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

    // Esta parte es de Zustand
    getProfilePicStore(tokenPayload.Imagen)
    getUserNameStore(tokenPayload.First_Name)
    getUserToken(token)

    console.log('Cargando Credenciales de Usuario')
    loginAction(tokenPayload)
    return tokenPayload
  }

  function loginAction(payload) {
    console.log('Usuario validado correctamente')
    if (usuarioValido) {
      switch (payload.rol) {
        case '1':
          setUser(payload.email_User)
          setToken(payload)
          localStorage.setItem('site', payload.rol)
          navigate('/materias')
          break
        case '2':
          setUser(payload.email_User)
          setToken(payload)
          localStorage.setItem('site', payload.rol)
          navigate('/materias')
          break
        case '3':
          setUser(payload.email_User)
          setToken(payload)
          localStorage.setItem('site', payload.rol)
          navigate('/materias')
          break
        case '4':
          setUser(payload.email_User)
          setToken(payload)
          localStorage.setItem('site', payload.rol)
          navigate('/catalogo')
          break
      }
    }
  }

  const logOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('site')
    localStorage.removeItem('cookiesconfirmation')
    navigate('/login')
  }

  return <AuthContext.Provider value={{ token, user, loginPost, logOut }}>{children}</AuthContext.Provider>
}
// Hook Personalizado
export const useAuth = () => {
  return useContext(AuthContext)
}
