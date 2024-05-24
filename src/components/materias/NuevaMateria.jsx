import '../styles/materias/NuevaMateria.css'

export function NuevaMateria({materiaName, materiaImage}) {
  return (
    <div className='materia-subject'>
      <div className='materia-subject'>
        <div className='materia-image'>
          <img src={materiaImage}  />
        </div>
        <hr className='materia-hr' />
        <div className='materia-text'>{materiaName}</div>
      </div>
    </div>
  )
}
