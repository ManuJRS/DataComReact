import React from 'react'
import { IntroServicios } from '../components/Servicios/IntroServicios'
import { CuerpoServicios } from '../components/Servicios/CuerpoServicios'
import { Disclaimer } from '../components/Servicios/Disclaimer'
import { FooterComponent } from '../components/footer/FooterComponent'

export const Conmmutadores = () => {
  return (
    <div className="body-servicios">
      <IntroServicios />
      <CuerpoServicios />
      <Disclaimer />
      <FooterComponent />
    </div>
  )
}