import { useEffect, useState } from 'react'
import { defaultUrlPath } from '../../../models/GlobalVars'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Ingreso.css'
import { AdminHeader } from '../../../components/Admin/AdminHeader'
import { Footer } from '../../../components/overview/Footer'
import { Preloader } from '../../General/preloader/Preloader'

export function Ingreso() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    primerNombre: '',
    segundoNombre: '',
    email: '',
    contraseña: '',
  })
  const handleSubmitEvent = e => {
    e.preventDefault()
    if (input.primerNombre !== '' && input.segundoNombre !== '' && input.email !== '' && input.contraseña !== '') {
      try {
        const valores = {
          First_Name: input.primerNombre,
          Second_Name: input.segundoNombre,
          Email: input.email,
          Password: input.contraseña,
        }

        axios
          .post(`${defaultUrlPath}/users/validate`, valores, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            if (response.status !== 200) {
              throw new Error('La respuesta no fue satisfactoria')
            }
            return response.data
          })
          .then(responseData => {
            console.log('Success:', responseData)
          })
          .catch(error => {
            console.error('Error:', error)
          })
      } catch (error) {
        console.log(error)
      }
      return
    }
    alert('Todos los campos son obligatorios')
  }

  const handleInput = e => {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {localStorage.getItem('site') !== '1' ? (
        navigate('/login')
      ) : (
        <div>
          {loading ? (
            <Preloader />
          ) : (
            <div>
              <AdminHeader />
              <div className='ingreso-container'>
                <div className='ingreso-form'>
                  <form onSubmit={handleSubmitEvent}>
                    <h2>Registro de Usuarios</h2>
                    <label>Primer Nombre: </label>
                    <input placeholder='John' type='text' name='primerNombre' onChange={handleInput} />
                    <label>Apellido: </label>
                    <input placeholder='Doe' type='text' name='segundoNombre' onChange={handleInput} />
                    <label>Email: </label>
                    <input placeholder='JohnDoe@acme.com' type='email' name='email' onChange={handleInput} />
                    <label>Contraseña: </label>
                    <input placeholder='*********' type='password' name='contraseña' onChange={handleInput} />
                    <button>Ingresar</button>
                  </form>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
