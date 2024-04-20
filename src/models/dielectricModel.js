document.addEventListener("DOMContentLoaded", function () {
    // DOM Variables
    let separacion = document.getElementById("separacion")
    let baldosa1 = document.querySelector(".baldosa-superior")
    let baldosa2 = document.querySelector(".baldosa-inferior")
    let circuitovertical1 = document.querySelector(".linea-vertical-superior2")
    let circuitovertical2 = document.querySelector(".linea-vertical-inferior2")
  
    // Modify the capacitance
    const rango = document.querySelector(".slider-prueba")
    rango.addEventListener("input", function () {
      const valorSlider = parseFloat(rango.value)
      separacion.value = convertirDistancia(valorSlider) + " mm"
      if (valorSlider <= 49) {
        circuitovertical1.style.height = "200px"
        circuitovertical1.style.width = "200px"
        circuitovertical1.style.left = "355px"
        circuitovertical1.style.top = "50px"
        circuitovertical2.style.height = "200px"
        circuitovertical2.style.width = "200px"
        circuitovertical2.style.left = "355px"
        circuitovertical2.style.top = "380px"
        baldosa1.style.width = "250px"
        baldosa1.style.left = "310px"
        baldosa1.style.top = "130px"
        baldosa2.style.width = "250px"
        baldosa2.style.left = "310px"
        baldosa2.style.top = "250px"
      } else if (valorSlider <= 79) {
        circuitovertical1.style.height = "150px"
        circuitovertical1.style.width = "210px"
        circuitovertical1.style.left = "350px"
        circuitovertical1.style.top = "53.5px"
        circuitovertical2.style.height = "150px"
        circuitovertical2.style.width = "210px"
        circuitovertical2.style.left = "350px"
        circuitovertical2.style.top = "428px"
        baldosa1.style.width = "250px"
        baldosa1.style.left = "310px"
        baldosa1.style.top = "85px"
        baldosa2.style.width = "250px"
        baldosa2.style.left = "310px"
        baldosa2.style.top = "280px"
      } else {
        circuitovertical1.style.height = "125px"
        circuitovertical1.style.width = "210px"
        circuitovertical1.style.left = "350px"
        circuitovertical1.style.top = "55px"
        circuitovertical2.style.height = "125px"
        circuitovertical2.style.width = "210px"
        circuitovertical2.style.left = "350px"
        circuitovertical2.style.top = "453px"
        baldosa1.style.width = "250px"
        baldosa1.style.left = "310px"
        baldosa1.style.top = "63px"
        baldosa2.style.width = "250px"
        baldosa2.style.left = "310px"
        baldosa2.style.top = "300px"
      }
    })
  
    function convertirDistancia(valor) {
      const slider = 100
      const milimetro = 5
      let distancia = (valor * milimetro) / slider
      return distancia + milimetro
    }
  })
  
  //Functions:
  function CalculateCapacitance(distance, dielectric) {
    return (dielectric * 8.8541878176e-12 * 0.0002) / distance
  }
  
  function convertDistance(valor) {
    const slider = 100
    const milimetro = 5
    let distancia = (valor * milimetro) / slider
    return distancia + milimetro
  }
  
  function subindexNotationFormat(capacitance) {
    const [coeficiente, exponente] = capacitance
      .toExponential(2)
      .split(/e|E/)
      .map((str) => parseFloat(str))
  
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
  
  // Prueba del draggable
  const wrapper = document.querySelector(".wrapper")
  
  
  function onDrag(movementX) {
    let getStyle = window.getComputedStyle(wrapper)
    let leftVal = parseInt(getStyle.left)
    wrapper.style.left = `${leftVal + movementX}px`
  }
  
  wrapper.addEventListener("mousedown", ()=> {
    wrapper.classList.add("active")
    wrapper.addEventListener("mousemove", onDrag)
  })
  
  document.addEventListener("mouseup", ()=> {
    wrapper.classList.remove("active")
    wrapper.removeEventListener("mousemove", onDrag)
  })
  