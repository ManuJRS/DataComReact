import React from 'react'
import { TwoColumContac } from '../components/Contacto/TwoColumContac'
import { InfoContacto } from '../components/Contacto/InfoContacto'
import { FooterComponent } from '../components/footer/FooterComponent'

export const Contacto = () => {
    return (
        <div>
            <TwoColumContac />
            <InfoContacto />
            <FooterComponent />
        </div>
    )
}