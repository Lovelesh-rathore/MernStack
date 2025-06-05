import React from 'react'
import Header from './components/header'
import Slider from './components/Slider'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Slider/>
        <Services/>
      </main>
    </>
  )
}

export default App