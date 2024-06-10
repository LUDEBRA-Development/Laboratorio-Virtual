import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/materias/NuevaMateria.css'
// import Ondas from '../../assets/ondas.png'
// import Electromagnetismo from '../../assets/electromagnetismo.png'
import Electromagnetismo from '../../assets/Subjects/Gradient1.jpg'
import Ondas from '../../assets/Subjects/Gradient2.jpg'

export function NuevaMateria({ name, id }) {
  const [imagen, setImagen] = useState('')
  const navigate = useNavigate()

  // Asignar la imagen según el nombre del curso
  const iconoMateria = nombre => {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      case 'Ondas':
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoMateria(name)
  }, [name])

  return (
    <div
      className='materia-subject'
      onClick={() => navigate(`/Materiasoverview/${id}`)}
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='materia-image'>{/* <img src={imagen} alt={`${name} icon`} /> */}</div>
      <hr className='materia-hr' />
      <div className='materia-text'>{name}</div>
    </div>
  )
}
