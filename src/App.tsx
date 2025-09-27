import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiciosDestacados from './components/ServiciosDestacados'
import Servicios from './components/Servicios'
import YegoPremium from './components/YegoPremium'
import PlanesFinanciamiento from './components/PlanesFinanciamiento'
import Nosotros from './components/Nosotros'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingIcons from './components/FloatingIcons'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiciosDestacados />
        <Servicios />
        <YegoPremium />
        <PlanesFinanciamiento />
        <Nosotros />
        <CTA />
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  )
}

export default App

