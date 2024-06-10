import './CardSlider.css'

export function CardSlider() {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <input type='radio' name='slide' id='c1' checked className='card-input' />
        <label htmlFor='c1' className='card-card'>
          <div className='card-row'>
            <div className='card-icon'>1</div>
            <div className='card-description'>
              <h4>Capacitancia en Paralelo</h4>
              <p>Calculadora de Capacitancia en Paralelo</p>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c2' className='card-input' />
        <label htmlFor='c2' className='card-card'>
          <div className='card-row'>
            <div className='card-icon'>2</div>
            <div className='card-description'>
              <h4>Capacitancia en Serie</h4>
              <p>Calculadora de Capacitancia en Serie</p>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c3' className='card-input' />
        <label htmlFor='c3' className='card-card'>
          <div className='card-row'>
            <div className='card-icon'>3</div>
            <div className='card-description'>
              <h4>Capacitancia de Dielectrico</h4>
              <p>Calculadora de Capacitancia de Dielectrico</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  )
}
