//* Props Imports
import React from "react";
import { useState } from "react";
import "../../components/styles/dielectric/Dielectric.css";

//! Image Imports
import vertical from "../../assets/pages/labs/dielectrico/Linea-Vertical.png";
import horizontal from "../../assets/pages/labs/dielectrico/Linea-Horizontal.png";
import baldoza from "../../assets/pages/labs/dielectrico/BaldosaOG.png";
import bateria from "../../assets/pages/labs/dielectrico/Bateria2-Positivo.png";
import dielectrico from "../../assets/pages/labs/dielectrico/Dielectrico-demo.png";

export function Dielectric() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    const offsetX = clientX - position.x;
    const offsetY = clientY - position.y;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX - offsetX,
        y: clientY - offsetY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  function resultados() {
    let controlcheckbox = document.getElementById("controles");
    let checkboxcontainer = document.getElementById("capTotal");

    if (controlcheckbox.checked) {
      checkboxcontainer.style.display = "block";
    } else {
      checkboxcontainer.style.display = "none";
    }
  }

  return (
    <div className="container">
      <section>
        <img src={bateria} alt="#" className="bateria" />
      </section>
      <section>
        <img src={horizontal} alt="#" className="linea-horizontal-superior" />
        <img src={horizontal} alt="#" className="linea-horizontal-inferior" />
        <img src={vertical} alt="#" className="linea-vertical-superior" />
        <img src={vertical} alt="#" className="linea-vertical-inferior" />
        <img src={vertical} alt="#" className="linea-vertical-inferior2" />
        <img src={baldoza} alt="#" className="baldosa-inferior" />
        <img
          src={dielectrico}
          alt="#"
          className="dielectrico-demo wrapper"
        />{" "}
        {/* Prueba del draggable en el dielectrico */}
        <img src={baldoza} alt="#" className="baldosa-superior" />
        <img src={vertical} alt="#" className="linea-vertical-superior2" />
      </section>

      <input type="range" className="voltaje-bateria" min={0} max={100} />

      <input type="range" className="slider-prueba" min={0} max={100} />

      <input
        id="separacion"
        type="text"
        className="separacion"
        value="7.5 mm"
        readOnly
      />

      <label>
        <div className="material-dielectrico">
          <span>Material Dielectrico: </span>
          <select name="dielectrico-selector" id="materialDielectricoSelector">
            <option value="1">Papel</option>
            <option value="2">Carton</option>
            <option value="3">Agua</option>
          </select>
        </div>
      </label>

      <label
        style={{
          position: "absolute",
          display: "none",
          top: position.y,
          left: position.x,
          border: "1px solid #000",
          padding: "10px",
          cursor: "move",
        }}
        onMouseDown={handleMouseDown}
        id="capTotal"
      >
        <div className="label-container">
          <div className="capacitancia-total">
            <span>Capacitancia Total: </span>
            <input id="capacitanciaTotal" type="text" />
          </div>
        </div>
      </label>

      <section>
        <div className="check-controles">
          <label>
            <div>
              <input type="checkbox" id="controles" onChange={resultados} />{" "}
              Resultados
            </div>
          </label>
        </div>
      </section>
    </div>
  );
}
