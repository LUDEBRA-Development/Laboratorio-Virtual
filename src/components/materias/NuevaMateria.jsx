import '../styles/materias/NuevaMateria.css'
import Ondas from '../../assets/ondas.png'
import Electromagnetismo from '../../assets/electromagnetismo.png'
import { useEffect, useState } from 'react'

export function NuevaMateria(props) {
  const nombreCurso = props.name
  const [imagen, setImagen] = useState('')

  function iconoMateria(nombre) {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoMateria(nombreCurso)
  }, [])

  return (
    <div className='materia-subject'>
      <div className='materia-subject'>
        <div className='materia-image'>
          <img src={imagen} />
        </div>
        <hr className='materia-hr' />
        <div className='materia-text'>{nombreCurso}</div>
      </div>
    </div>
  )
}
