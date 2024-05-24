import '../styles/materias/NuevaMateria.css'

export function NuevaMateria(props) {

  


  return (
    <div className='materia-subject'>
      <div className='materia-subject'>
        <div className='materia-image'>
          {/* <img src={props.img}  /> */}
        </div>
        <hr className='materia-hr' />
        <div className='materia-text'>{props.name}</div>
      </div>
    </div>
  )
}
