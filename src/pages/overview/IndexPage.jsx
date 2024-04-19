import React from 'react'
import './IndexPage.css'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HomeSlider } from '../../components/HomeSlider'
import { Selectors } from '../../components/Selectors'

export function IndexPage() {
  return (
    <div>
      <Header />

      <section>
        <main>
          <HomeSlider />
          <Selectors />
        </main>
      </section>

      <Footer />
    </div>
  )
}
