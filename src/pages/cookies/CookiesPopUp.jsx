import './CookiesPopUp.css'

export function CookiesPopUp() {
  const handleClick = () => {
    localStorage.setItem('cookiesconfirmation', 'none')
    document.getElementById('cookiesBody').style.display = 'none'
    console.log('Se oculto esa monda')
  }
  return (
    <div className='cookies-body' id='cookiesBody' style={{ display: localStorage.getItem('cookiesconfirmation') }}>
      <div className='cookies-container'>
        <h3>Este sitio utiliza cookies</h3>
        <div className='selector-cookies'>
          <button onClick={handleClick}>Aceptar Cookies</button>
          <button onClick={handleClick}>Rechazar Cookies</button>
        </div>
      </div>
    </div>
  )
}
