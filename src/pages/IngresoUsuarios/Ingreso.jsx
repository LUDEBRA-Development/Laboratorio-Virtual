import { useState } from 'react'
import { defaultUrlPath } from '../../pages/materias/GetInfoUser'

export function Ingreso() {
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

        fetch(`${defaultUrlPath}/users/validate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(valores),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(console.log('La respuesta no fue satisfactoria'))
            }
            return response.json()
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
      <form onSubmit={handleSubmitEvent}>
        <input placeholder='Ingresa Primer Nombre' type='text' name='primerNombre' onChange={handleInput} />
        <input placeholder='Ingresa Segundo Nombre' type='text' name='segundoNombre' onChange={handleInput} />
        <input placeholder='Ingresa email' type='email' name='email' onChange={handleInput} />
        <input placeholder='Ingresa Contraseña' type='password' name='contraseña' onChange={handleInput} />
        <button>Ingresar</button>
      </form>
    </div>
  )
}
