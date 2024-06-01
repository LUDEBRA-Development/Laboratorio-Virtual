import { useState } from 'react'
import { defaultUrlPath } from '../../../models/GlobalVars'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div>
      {localStorage.getItem('site') !== '1' ? (
        navigate('/login')
      ) : (
        <form onSubmit={handleSubmitEvent}>
          <input placeholder='Ingresa Primer Nombre' type='text' name='primerNombre' onChange={handleInput} />
          <input placeholder='Ingresa Segundo Nombre' type='text' name='segundoNombre' onChange={handleInput} />
          <input placeholder='Ingresa email' type='email' name='email' onChange={handleInput} />
          <input placeholder='Ingresa Contraseña' type='password' name='contraseña' onChange={handleInput} />
          <button>Ingresar</button>
        </form>
      )}
    </div>
  )
}
