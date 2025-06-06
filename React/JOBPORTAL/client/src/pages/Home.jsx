import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import UploadCV from '../components/UploadCV'
import FeaturedJob from '../components/FeaturedJob'
import Working from '../components/Working'

const Home = () => {
  return (
    <>
        <Hero/>
        <Services/>
        <UploadCV/>
        <FeaturedJob/>
        <Working/>
    </>
  )
}

export default Home