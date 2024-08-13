import './App.css'
import { CardIntro } from './components/Card-Intro/CardIntro'
import { CardInverted } from './components/card-inverted-border/cardInverted'
import { CarouselSlider } from './components/Carousel/CarouselSlider'
import { NavBarComp } from './components/NavBarComp'
import { CardInferior } from './components/cardinferior/CardInferior'
import { Map } from './components/Maps/Map'
import { FooterComponent } from './components/footer/FooterComponent'
function App() {
  
  return (
    <div className="Contenedor-app-padre">
      <NavBarComp />
      <CarouselSlider />
      <CardInverted />
      <CardIntro />
      <CardInferior />
      <Map/>
      <FooterComponent />
    </div>
  )
}

export default App
