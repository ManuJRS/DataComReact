import React from 'react'
import { IntroNosotros } from '../components/Nosotros/IntroNosotros'
import { TripeCard } from '../components/Nosotros/TripeCard'
import { FooterComponent } from '../components/footer/FooterComponent'

export const Nosotros = () => {
    return (
<div>
        <IntroNosotros />
        <TripeCard />
        <FooterComponent />
</div>
    )
}