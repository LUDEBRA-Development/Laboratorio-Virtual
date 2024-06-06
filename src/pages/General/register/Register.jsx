import { useState } from 'react'
import './Register.css'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const [email, setEmail] = useState('')
  const [first_Name, setFirstName] = useState('')
  const [last_Name, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [verificationSent, setVerificationSent] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [registered, setRegistered] = useState(false)
  const navigate = useNavigate()

  const dataUser = {
    First_Name: first_Name,
    Second_Name: last_Name,
    Email: email,
    Password: password,
    code: code,
    validationCode: verificationCode,
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`${defaultUrlPath}/users/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: email }),
    })
      .then(response => {
        if (response.ok) {
          alert('Se ha enviado un código de verificación a tu correo electrónico. Por favor, ingrésalo para confirmar.')
          setVerificationSent(true)
          response.json()
        }
      }
      )
      .catch(error => {
        console.error('Error al enviar el código de verificación:', error)
      })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Código de verificación enviado:', data)
      //   setVerificationSent(true)
      //   alert('Se ha enviado un código de verificación a tu  correo electrónico. Por favor, ingrésalo para confirmar.')
      // })
      // .catch(error => {
      //   console.error('Error al enviar el código de verificación:', error)
      // })
  }

  const handleVerification = e => {
    e.preventDefault()
    fetch(`${defaultUrlPath}/users/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser),
    })

      .then(response => {
        if (response.ok) {
          alert('¡Tu cuenta ha sido creada con exito!')
          // setRegistered(true)
          navigate('/login')
          response.json()
        }
      }
      )
      .catch(error => {
        console.error('Error al crear usuario:', error)
      })

      // .then(response => response.json())
      // .then(data => {
      //   alert('Usuario creado con exito', data)
      //   navigate('/login')
      // })
      // .catch(error => {
      //   console.error('Error al crear usuario:', error)
      // })
  }

  if (registered) {
    return <p>¡Registro exitoso!</p>
  }

  if (verificationSent) {
    return (
      <form onSubmit={handleVerification}>
        <label>
          Código de Validación:
          <input type='text' value={verificationCode} onChange={e => setVerificationCode(e.target.value)} required />
        </label>
        <button type='submit'>Verificar</button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo Electrónico:
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Primer Nombre:
        <input type='text' value={first_Name} onChange={e => setFirstName(e.target.value)} required />
      </label>
      <label>
        Primer Apellido:
        <input type='text' value={last_Name} onChange={e => setLastName(e.target.value)} required />
      </label>
      <label>
        contraseña:
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <label>
        Codigo de estudiante:
        <input type="checkbox" /> 
      </label>
      <label>
        Código:
        <input type='text' value={code} onChange={e => setCode(e.target.value)} required />
      </label>
      <button type='submit'>Continuar</button>
    </form>
  )
}
