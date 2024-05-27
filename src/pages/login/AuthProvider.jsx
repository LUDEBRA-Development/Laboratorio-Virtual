import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCoursesMapper, getFirstNameMapper, getProfilePictureMapper, defaultUrlPath } from '../materias/GetInfoUser'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuarioValido, setUsuarioValido] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('site') || '')
  const navigate = useNavigate()
  const loginPost = (data) => {
    try {
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
        .then((response) => {
          if (!response.ok) {
            throw new Error(console.log('La respuesta no fue satisfactoria'))
          }
          return response.json()
        })

        .then((responseData) => {
          tokenDecodified(responseData.body)
          setUsuarioValido(true)
        })
        .catch((error) => {
          alert('Oops! Credenciales Invalidas', error)
        })
    } catch (error) {
    }
  }

  function tokenDecodified(token) {
    getCoursesMapper(token)
    const arrayToken = token.split('.')
    const tokenPayload = JSON.parse(atob(arrayToken[1]))
    
    getProfilePictureMapper(tokenPayload.Imagen)
    getFirstNameMapper(tokenPayload.First_Name)

    console.log('Loading User')
    loginAction(tokenPayload)
    return tokenPayload
  }

  function loginAction(payload) {
    // Aqui se podria hacer un switch

    if (usuarioValido && payload.rol == 1) {
      setUser(payload.email_User)
      setToken(payload)
      localStorage.setItem('site', payload.rol)
      navigate('/ingreso')
    } else if (usuarioValido && payload.rol == 2) {
      setUser(payload.email_User)
      setToken(payload)
      localStorage.setItem('site', payload.rol)
      navigate('/materias')
    } else if (usuarioValido && payload.rol == 3) {
      setUser(payload.email_User)
      setToken(payload)
      localStorage.setItem('site', payload.rol)
      navigate('/materias')
    } else if (usuarioValido && payload.rol == 4) {
      setUser(payload.email_User)
      setToken(payload)
      localStorage.setItem('site', payload.rol)
      navigate('/catalogo')
    }
  }

  const logOut = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('site')
    localStorage.removeItem('tokenvalue')
    localStorage.removeItem('emailvalue')
    localStorage.removeItem('cookiesconfirmation')
    localStorage.removeItem('profilepicturevalue')
    localStorage.removeItem('firstnamevalue')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ token, user, loginPost, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
// Hook Personalizado
export const useAuth = () => {
  return useContext(AuthContext)
}
