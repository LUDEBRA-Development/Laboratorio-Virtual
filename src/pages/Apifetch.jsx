import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export function Apifetch() {
   // Estado para el valor del input y el resultado de la validación
   const [email, setEmail] = useState('')
   const [resultado, setResultado] = useState('')
 
   // Función para manejar el cambio en el input
   const handleInputChange = (e) => {
     setEmail(e.target.value)
   }
 
   // Función para validar el usuario
   const validarUsuario = async () => {
     try {
       // URL de la API
       const apiUrl = 'https://laboratorio-virtual-backend.onrender.com/api/users'
 
       // Realizar la petición GET con axios
       const respuesta = await axios.get(apiUrl)
 
       // Obtener los datos de la respuesta
       const usuarios = respuesta.data.body // Ajustado según la estructura de la API
 
       // Verificar si el email existe en los datos obtenidos
       const usuarioValido =
         Array.isArray(usuarios) && usuarios.some((user) => user.Email === email)
 
       // Actualizar el resultado basado en la validación
       if (usuarioValido) {
         setResultado(`El usuario con el email "${email}" es válido.`)
       } else {
         setResultado(`El usuario con el email "${email}" no es válido.`)
       }
     } catch (error) {
       console.error('Error al validar el usuario:', error)
       setResultado('Hubo un error al validar el usuario.')
     }
   }
 
   return (
     <div>
       <input
         type='text'
         value={email}
         onChange={handleInputChange}
         placeholder='Ingrese el email del usuario'
       />
       <button onClick={validarUsuario}>Validar Usuario</button>
       <div>{resultado}</div>
     </div>
   )
}
