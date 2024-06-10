import './CookiesPopUp.css'

export function CookiesPopUp() {
  const handleClick = () => {
    localStorage.setItem('cookiesconfirmation', 'none')
    document.getElementById('cookiesBody').style.display = 'none'
  }
  return (
    <div className='cookies-body' id='cookiesBody' style={{ display: localStorage.getItem('cookiesconfirmation') }}>
      <div className='cookies-container'>
        <span>By using the <strong>Ludebra Labs</strong> website you agree to our use of cookies. For more details see our cookies policy</span>
        <div className='selector-cookies'>
          <button onClick={handleClick}>I agree</button>
        </div>
      </div>
    </div>
  )
}
