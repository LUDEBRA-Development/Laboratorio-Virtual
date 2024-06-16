import { useState, useEffect } from 'react'
import './IndexPage.css'
import { Header } from '../../../components/overview/Header'
import { Footer } from '../../../components/overview/Footer'
import { HomeSlider } from '../../../components/overview/HomeSlider'
import { Selectors } from '../../../components/overview/Selectors'
import { InformationImage } from '../../../components/overview/InformationImage'
import { CookiesPopUp } from '../../General/cookies/CookiesPopUp'
import { Preloader } from '../../General/preloader/Preloader'
import { View } from '../../OvComponents/View'

export function IndexPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className='view-html'>
          <CookiesPopUp />
          <div className='view-body'>
            <Header />
            <div className='view-section1'>
              <div className='view-text'>Labs</div>
            </div>
            <div className='view-section2'>
              <section>
                <main>
                  <HomeSlider />
                  {/* <InformationImage /> */}
                  <View />
                  {/* <Selectors /> */}
                </main>
              </section>
              <div className='view-text'></div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  )
}
