import { useState, useEffect } from 'react'
import './UpdateUser.css'
import { useInfoUsersStore } from '../../../store/infoUsersStore'
import { defaultUrlPath } from '../../../models/GlobalVars'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'

export function UpdateUser() {
  const userToken = useInfoUsersStore(state => state.token)
  const userNameValue = useInfoUsersStore(state => state.userName)
  const useEmailValue = useInfoUsersStore(state => state.email)
  const useSecondNameValue = useInfoUsersStore(state => state.lastName)

  const [userInfo, setUserInfo] = useState({
    First_Name: '',
    Second_Name: '',
    Email: '',
  })

  const [file, setFile] = useState(null)
  const [originalEmail, setOriginalEmail] = useState('')
  const [isEmailChanged, setIsEmailChanged] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)

  useEffect(() => {
    setUserInfo({
      First_Name: userNameValue,
      Second_Name: useSecondNameValue,
      Email: useEmailValue,
    })
    setOriginalEmail(useEmailValue)
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value,
    })
    if (name === 'Email' && value !== originalEmail) {
      setIsEmailChanged(true)
      setIsCodeSent(false) // Reset isCodeSent if email is changed
    }
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleSendVerificationCode = () => {
    fetch(`${defaultUrlPath}/users/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: userInfo.Email }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Código de verificación enviado:', data)
        setIsCodeSent(true)
        alert(
          'Se ha enviado un código de verificación a tu nuevo correo electrónico. Por favor, ingrésalo para confirmar el cambio.',
        )
      })
      .catch(error => {
        console.error('Error al enviar el código de verificación:', error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isEmailChanged && !isCodeSent) {
      handleSendVerificationCode()
      return
    }

    const formData = new FormData()
    formData.append('First_Name', userInfo.First_Name)
    formData.append('Second_Name', userInfo.Second_Name)
    formData.append('Email', userInfo.Email)
    if (file) {
      formData.append('image', file)
    }
    // If code is sent and verified, include verification code in the request
    if (isCodeSent && verificationCode) {
      formData.append('verificationCode', verificationCode)
    }

    fetch(`${defaultUrlPath}/users/${useEmailValue}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data)
        alert('Información actualizada con éxito.')
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error)
      })
  }

  return (
    <div>
      <HeaderSubjects />
      <div className='allupdate-container'>
        <div className='updateuser-container'>
          <h2 className='updateuser-title'>Actualizar Información de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className='updateuser-form-group'>
              <label className='updateuser-label'>Nombre:</label>
              <input
                type='text'
                name='First_Name'
                value={userInfo.First_Name}
                onChange={handleInputChange}
                className='updateuser-input'
              />
            </div>
            <div className='form-group'>
              <label className='updateuser-label'>Apellido:</label>
              <input
                type='text'
                name='Second_Name'
                value={userInfo.Second_Name}
                onChange={handleInputChange}
                className='updateuser-input'
              />
            </div>
            <div className='form-group'>
              <label className='updateuser-label'>Email:</label>
              <input
                type='email'
                name='Email'
                value={userInfo.Email}
                onChange={handleInputChange}
                className='updateuser-input'
              />
            </div>
            {isEmailChanged && !isCodeSent && (
              <div className='updateuser-form-group'>
                <button className='updateuser-button' type='button' onClick={handleSendVerificationCode}>
                  Enviar Código de Verificación
                </button>
              </div>
            )}
            {isCodeSent && (
              <div className='updateuser-form-group'>
                <label className='updateuser-label'>Código de Verificación:</label>
                <input
                  className='updateuser-input'
                  type='text'
                  name='verificationCode'
                  value={verificationCode}
                  onChange={e => setVerificationCode(e.target.value)}
                />
              </div>
            )}
            <div className='updateuser-form-group'>
              <label className='updateuser-label'>Foto de perfil:</label>
              <input type='file' name='file' onChange={handleFileChange} className='updateuser-input' />
            </div>
            <button className='updateuser-button' type='submit'>
              Actualizar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
