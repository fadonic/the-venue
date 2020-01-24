import React from 'react'
import { Element } from 'react-scroll'
import Header from './components/header_footer/Header'
import './resources/styles.css'
import Featured from './components/featured'
import VenueNFO from './components/venueNFO'
import Highlight from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/footer'

function App () {
  return (
    <div
      className='App'
      style={{
        height: '2000px',
        background: '#fff'
      }}
    >
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      <Element name='venue NFO'>
        <VenueNFO />
      </Element>
      <Element name='highlights'>
        <Highlight />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </div>
  )
}

export default App
