import React from 'react'
import Banner from '../../components/Banner'
import Category from './Category'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Services from './Services'

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <SpecialDishes />
      <Testimonials />
      <Services />
    </div>
  )
}

export default Home