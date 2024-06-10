import { Footer } from '../../components/overview/Footer'
import { Header } from '../../components/overview/Header'
import { HomeSlider } from '../../components/overview/HomeSlider'
import { InformationImage } from '../../components/overview/InformationImage'
import { Selectors } from '../../components/overview/Selectors'
import { CookiesPopUp } from '../General/cookies/CookiesPopUp'
import './Parallax.css'

export function View() {
  return (
    <div className='view-html'>
      <CookiesPopUp />
      <Header />
      <div className='view-body'>
        <div className='view-section1'>
          <div className='view-text'>Labs</div>
        </div>
        <div className='view-section2'>
          <section>
            <main>
              <HomeSlider />
              <InformationImage />
              <Selectors />
            </main>
          </section>
          <div className='view-text'>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}
