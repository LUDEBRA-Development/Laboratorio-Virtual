import React, { useState } from 'react'
import './IndexPage.css'
import { Header } from '../../components/overview/Header'
import { Footer } from '../../components/overview/Footer'
import { HomeSlider } from '../../components/overview/HomeSlider'
import { Selectors } from '../../components/overview/Selectors'
import { InformationImage } from '../../components/overview/InformationImage'
import { CookiesPopUp } from '../cookies/CookiesPopUp'

export function IndexPage() {
  return (
    <div className='body-index'>
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
  )
}
