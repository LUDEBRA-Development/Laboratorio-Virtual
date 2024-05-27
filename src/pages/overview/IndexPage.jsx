import React, { useState, useEffect } from "react"
import "./IndexPage.css"
import { Header } from "../../components/overview/Header"
import { Footer } from "../../components/overview/Footer"
import { HomeSlider } from "../../components/overview/HomeSlider"
import { Selectors } from "../../components/overview/Selectors"
import { InformationImage } from "../../components/overview/InformationImage"
import { CookiesPopUp } from "../cookies/CookiesPopUp"
import { Preloader } from "../../pages/preloader/Preloader"

export function IndexPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Configura el tiempo que quieres que el loader se muestre (en milisegundos)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Ejemplo: 3 segundos

    // Limpiar el timer si el componente se desmonta antes de que el timer termine
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="body-index">
          <CookiesPopUp />
          <Header />

          <section>
            <main>
              <HomeSlider />
              <Selectors />
              <InformationImage />
            </main>
          </section>

          <Footer />
        </div>
      )}
    </div>
  )
}
