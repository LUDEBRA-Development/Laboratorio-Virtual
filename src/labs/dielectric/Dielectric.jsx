import React, { useState, useEffect, useRef } from 'react'
import '../../styles/pages/labs/dielectric/Dielectric.css'

//! Image Imports
import vertical from '../../assets/pages/labs/dielectrico/Linea-Vertical.png'
import horizontal from '../../assets/pages/labs/dielectrico/Linea-Horizontal.png'
import baldoza from '../../assets/pages/labs/dielectrico/BaldosaOG.png'
import bateria from '../../assets/pages/labs/dielectrico/Bateria2-Positivo.png'
import bateriaNegativo from '../../assets/pages/labs/dielectrico/Bateria2-Negativo.png'
import dielectrico from '../../assets/pages/labs/dielectrico/Dielectrico-demo.png'
import dielectricoPapel from '../../assets/pages/labs/dielectrico/Dielectricopapel-demo.png'
import dielectricoAgua from '../../assets/pages/labs/dielectrico/Dielectrico-demo1.png'
import dielectricoVidrio from '../../assets/pages/labs/dielectrico/Dielectrico-demo2.png'


export function Dielectric() {
  // Estado para manejar el valor del slider
  const [sliderValue, setSliderValue] = useState(50)
  const valorSlider1 = parseFloat(sliderValue)
  const [sliderVoltage, setSliderVoltage] = useState(50)

  const [baldosaSuperior, setBaldosaSuperior] = useState(130)
  const [baldosaInferior, setBaldosaInferior] = useState(250)
  const [topLineaVerticalSuperior2, setTopLineaVerticalSuperior2] = useState(50)
  const [toplineaVerticalInferior2, setTopLineaVerticalInferior2] = useState(380)
  const [leftLineaVerticalSuperior2, setLetLineaVerticalSuperior2] = useState(350)
  const [leftLineaVerticalInferior2, setLetLineaVerticalInferior2] = useState(350)
  const [heightLineaVerticalSuperior2, setHeightLineaVerticalSuperior2] = useState(200)
  const [heightLineaVerticalInferior2, setHeightLineaVerticalInferior2] = useState(200)
  
  const [flipBatery, setFlipBatery] = useState(bateria)

  const handleSliderChange = (event) => {
    const newValue = event.target.value
    setSliderValue(newValue)
    changePositionBaldosaSuperior(newValue)
    changePositionBaldosaInferior(newValue)
    changePositionLineaVerticalSuperior2(newValue)
    changePositionBaldosaLineaVerticalInferior2(newValue)
  }

  const handleSliderBatery = (event) => {
    const newValue = event.target.value
    setSliderVoltage(newValue)
    changeBaterryPosition(newValue)
  }

  const convertDistance = (valorSlider) => {
    const slider = 100
    const milimeters = 5
    let distance = (valorSlider * milimeters) / slider
    return distance + milimeters
  }

  const changeBaterryPosition = (value) => {
    if(value < 50){
      setFlipBatery(bateriaNegativo)
    }else{
      setFlipBatery(bateria)
    }
  }

  // Función para cambiar la posición de la baldosa superior según el valor del slider
  function changePositionBaldosaSuperior(value) {
    if(value <= 49){
      setBaldosaSuperior(130)
    }
    else if(value <= 79){
      setBaldosaSuperior(85)
    }else{
        setBaldosaSuperior(63)
    }
  }

  // Función para cambiar la posición de la baldosa inferior según el valor del slider
  function changePositionBaldosaInferior(value){
    if(value <= 49){
      setBaldosaInferior(250)
    }else if(value <= 79){
      setBaldosaInferior(280)
    }
    else{
      setBaldosaInferior(300)
    }
  }

  const changePositionLineaVerticalSuperior2 = (value) => {
    if(value <= 49){
      setTopLineaVerticalSuperior2(50)
      setLetLineaVerticalSuperior2(350)
      setHeightLineaVerticalSuperior2(200)
    }else if(value <= 79){
      setTopLineaVerticalSuperior2(50)
      setLetLineaVerticalSuperior2(350)
      setHeightLineaVerticalSuperior2(150)
    }else{
      setTopLineaVerticalSuperior2(50)
      setLetLineaVerticalSuperior2(350)
      setHeightLineaVerticalSuperior2(125)
    }
  }

  const changePositionBaldosaLineaVerticalInferior2 = (value) => {
    if(value <= 49){
      setTopLineaVerticalInferior2(380)
      setLetLineaVerticalInferior2(355)
      setHeightLineaVerticalInferior2(200)
    }else if(value <= 79){
      setTopLineaVerticalInferior2(428)
      setLetLineaVerticalInferior2(350)
      setHeightLineaVerticalInferior2(150)
    }else{
      setTopLineaVerticalInferior2(453)
      setLetLineaVerticalInferior2(350)
      setHeightLineaVerticalInferior2(125)
    }
  }
  
  // Estado para manejar el tipo de dieléctrico
  const [dielectricSelection, setDielectricSelection] = useState(dielectrico)
  const handleDielectricoChange = (event) => {
    const selection = event.target.value
    switch(selection){
      case '1':
        setDielectricSelection(dielectrico)
        break
      case '2':
        setDielectricSelection(dielectricoPapel)
        break
      case '3':
        setDielectricSelection(dielectricoVidrio)
        break
      case '4':
        setDielectricSelection(dielectricoAgua)
        break
      default:
        setDielectricSelection(dielectrico)
    }
  }

  // Funciones para los cálculos
  // function VoltageCalculate(valorRango) {
  //   const voltageMin = -1.5
  //   const voltageMax = 1.5
  //   const voltageRange = voltageMax - voltageMin
  //   const valorPorPaso = voltageRange / 100
  //   const voltage = voltageMin + valorRango * valorPorPaso
  //   return voltage
  // }

  const subindexNotationFormat = (capacitance) => {
    const [coeficiente, exponente] = capacitance
      .toExponential(2)
      .split(/e|E/)
      .map((str)=> parseFloat(str)) 
    const exponenteUnicode = exponente.toString().replace(/(\d)/g, (_, digit) => {
      const unicodeMap = {
        0: "⁰",
        1: "¹",
        2: "²",
        3: "³",
        4: "⁴",
        5: "⁵",
        6: "⁶",
        7: "⁷",
        8: "⁸",
        9: "⁹",
        "-": "⁻",
        "+": "⁺",
      }
      return unicodeMap[digit]
    })
    return `${coeficiente.toFixed(2)}×10${exponenteUnicode}`
  }
  
  const CalculateCapacitance = (distance, dielectric) => {
    return (dielectric * 8.8541878176e-12 * 0.0002) / distance
  }

  // Esto es lo que hizo Deimis para que los resultados aparecieran con lo del mouse
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event
    const offsetX = clientX - position.x
    const offsetY = clientY - position.y

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        x: clientX - offsetX,
        y: clientY - offsetY,
      })
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const resultados = () => {
    let controlcheckbox = document.getElementById('controles')
    let checkboxcontainer = document.getElementById('capTotal')

    if (controlcheckbox.checked) {
      checkboxcontainer.style.display = 'block'
    } else {
      checkboxcontainer.style.display = 'none'
    }
  }

  // Convertir distancia y calcular capacitancia
  const Distancia = convertDistance(valorSlider1) + ' mm'
  const [capacitance, setCapacitance] = useState(0)
  const capacitanceRef = useRef(null)

  useEffect(() => {
    const dielectricConstant = dielectricSelection === dielectricoPapel
      ? 3.5
      : dielectricSelection === dielectricoVidrio
      ? 2.5
      : dielectricSelection === dielectricoAgua
      ? 80
      : 1

    const distance = convertDistance(valorSlider1) / 1000 // convertir mm a metros
    const calculatedCapacitance = CalculateCapacitance(distance, dielectricConstant)
    setCapacitance(calculatedCapacitance)

    if (capacitanceRef.current) {
      capacitanceRef.current.value = subindexNotationFormat(calculatedCapacitance)
    }
  }, [valorSlider1, dielectricSelection])

  return (
    <div className='container'>
      <section>
        <img src={flipBatery} alt='#' className='bateria'/>
      </section>
      <section>
        <img src={horizontal} alt='#' className='linea-horizontal-superior' />
        <img src={horizontal} alt='#' className='linea-horizontal-inferior' />
        <img src={vertical} alt='#' className='linea-vertical-superior' />
        <img src={vertical} alt='#' className='linea-vertical-inferior' />
        <img 
          src={vertical} alt='#' className='linea-vertical-inferior2' 
          style={
            {
              top:`${toplineaVerticalInferior2}px`, 
              left: `${leftLineaVerticalInferior2}px`, 
              height: `${heightLineaVerticalInferior2}px`, 
              position: 'fixed', width: '210px'
            }
          }
        />
        <img
          src={baldoza}
          alt='#'
          className='baldosa-inferior'
          id='baldosa-inferior'
          style={{top: `${baldosaInferior}px`}}
        />
        <img 
          src={dielectricSelection} 
          alt='#' 
          className='dielectrico-demo wrapper' />{' '}
        {/* Prueba del draggable en el dielectrico */}
        <img
          src={baldoza}
          alt='#'
          className='baldosa-superior'
          id='baldosa-superior'
          style={{ top: `${baldosaSuperior}px`}}
        />
        <img 
          src={vertical} alt='#' 
          className='linea-vertical-superior2' 
          style={
            {
              top:`${topLineaVerticalSuperior2}px`, 
              left: `${leftLineaVerticalSuperior2}px`, 
              height: `${heightLineaVerticalSuperior2}px`, 
              position: 'fixed', width: '210px'
            }
          }
        />
      </section>
    
      <input
        type='range'
        className='voltaje-bateria'
        min={0}
        max={100}
        value={sliderVoltage}
        onChange={handleSliderBatery}
      />

      <input
        type='range'
        className='slider-prueba'
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />

      <input
        id='separacion'
        type='text'
        className='separacion'
        value={Distancia}
        readOnly
      />

      <label htmlFor='materialDielectricoSelector'>
        <div className='material-dielectrico'>
          <span>Material Dielectrico: </span>
          <select 
            name='dielectrico-selector' 
            id='materialDielectricoSelector'
            onChange={handleDielectricoChange}
          >
            <option value='1'>Vacío</option>
            <option value='2'>Papel</option>
            <option value='3'>Vidrio</option>
            <option value='4'>Agua</option>
          </select>
        </div>
      </label>

      <label
        style={{
          position: 'absolute',
          display: 'none',
          top: position.y,
          left: position.x,
          border: '1px solid #000',
          padding: '10px',
          cursor: 'move',
        }}
        onMouseDown={handleMouseDown}
        id='capTotal'
      >
        <div className='label-container'>
          <div className='capacitancia-total'>
            <span>Capacitancia Total: </span>
            <input id='capacitanciaTotal' type='text' ref={capacitanceRef} readOnly />
          </div>
        </div>
      </label>

      <section>
        <div className='check-controles'>
          <label>
            <div>
              <input type='checkbox' id='controles' onChange={resultados} />{' '}
              Resultados
            </div>
          </label>
        </div>
      </section>
      
    </div>
  )
}
