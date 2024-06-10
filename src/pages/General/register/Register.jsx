import { useEffect, useState } from 'react'
import './Register.css'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { useNavigate } from 'react-router-dom'
import { TooltipWrapper } from '../../../components/tooltip/TooltipWrapper'
import { Preloader } from '../preloader/Preloader'

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
      })
      .catch(error => {
        console.error('Error al enviar el código de verificación:', error)
      })

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
      })
      .catch(error => {
        console.error('Error al crear usuario:', error)
      })

  }

  if (registered) {
    return <p>¡Registro exitoso!</p>
  }

  if (verificationSent) {
    return (
      <div className='register-container'>
        <div className='register-box'>
          <form onSubmit={handleVerification}>
            <label>
              Código de Validación:
              <input
                type='text'
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
                required
              />
            </label>
            <button type='submit'>Verificar</button>
          </form>
        </div>
      </div>
    )
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
      {loading ? (
        <Preloader />
      ) : (
        <div className='register-container'>
          <div className='register-box'>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
              <label>Correo Electronico</label>
              <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
              <label>Primer Nombre:</label>
              <input type='text' value={first_Name} onChange={e => setFirstName(e.target.value)} required />
              <label>Primer Apellido:</label>
              <input type='text' value={last_Name} onChange={e => setLastName(e.target.value)} required />
              <label>Contraseña:</label>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
              <TooltipWrapper text={'Si Cuentas con un Codigo de Materia, ingresalo'}>
                <label>*Código de Materia:</label>
              </TooltipWrapper>
              <input type='text' value={code} onChange={e => setCode(e.target.value)} />
              <button type='submit'>Continuar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
