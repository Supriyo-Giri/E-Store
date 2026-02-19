import FeaturesSection from '@/components/Features'
import Hero from '@/components/Hero'
import React from 'react'
import BestSellingSection from '@/components/BestSellingSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturesSection/>
      <BestSellingSection/>

    </div>
  )
}

export default Home