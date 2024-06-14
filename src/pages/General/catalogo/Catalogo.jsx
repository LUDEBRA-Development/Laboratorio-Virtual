import './Catalogo.css'
import DielectricoMiniatura from '../../../assets/Dielectrico-miniatura.png'
import CapacitanciaMiniatura from '../../../assets/Capacitancia-miniatura.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Preloader } from '../preloader/Preloader'
import { HeaderSubjects } from '../../../components/materias/HeaderSubjects'
import { Footer } from '../../../components/overview/Footer'

export function Catalogo() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    // window.open('https://calculadoradecapacitancia.netlify.app/index.html')
    // window.location.href = 'https://calculadoradecapacitancia.netlify.app/index.html' // Esto es una prueba
    console.log('Boton presionado')
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <HeaderSubjects />
          <div className='body-catalogo'>
            <div className='body-title-subOver'>
              <h3>Catalogo de Simuladores</h3>
            </div>
            <div className='catalogo-container'>
              <div className='catalogo-item' onClick={handleButtonClick}>
                <img src={CapacitanciaMiniatura} alt='Capacitancia' className='catalogo-image' />
                <p className='catalogo-title'>Capacitancia</p>
              </div>
              <div className='catalogo-item' onClick={() => navigate('/dielectric')}>
                <img src={DielectricoMiniatura} alt='Dielectrico' className='catalogo-image' />
                <p className='catalogo-title'>Dielectrico</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
