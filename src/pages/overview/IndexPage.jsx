import React from 'react'
import './IndexPage.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HomeSlider } from '../../components/HomeSlider'
import { Selectors } from '../../components/Selectors'
import { InformationImage } from '../../components/InformationImage'

export function IndexPage() {
  return (
    <div>
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
  )
}
