import { useEffect } from 'react'
import { receivedEmail, receivedToken } from '../../pages/materias/GetCoursesInfo'
import '../styles/materias/NuevaMateria.css'

export function NuevaMateria() {

  const emailInfo = receivedEmail
  const tokenInfo = receivedToken

  const fetchData = async () => {
    try {
      const response = await fetch(`https://laboratorio-virtual-backend.onrender.com/api/users/info/courses/${emailInfo}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${tokenInfo}`, 404 not found
        },
        // body: tokenInfo, 400 bad request
      })
      if (!response.ok) {
        throw new Error(console.log('La respuesta no fue satisfactoria'))
      }
      return console.log(response.json())
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);





  return (
    <div className='materia-subject'>
      <div className='materia-subject'>
        <div className='materia-image'>
          {/* <img src={props.img}  /> */}
        </div>
        <hr className='materia-hr' />
        <div className='materia-text'>{tokenInfo}</div>
      </div>
    </div>
  )
}
