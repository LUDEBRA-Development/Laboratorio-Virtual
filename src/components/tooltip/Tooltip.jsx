import './Tooltip.css' // Importa los estilos CSS

export function Tooltip({ children, text }) {
  return (
    <div className='tooltip-container'>
      {children}
      <div className='tooltip-text'>{text}</div>
    </div>
  )
}
