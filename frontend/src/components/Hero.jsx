import React from 'react'
import { Button } from './ui/button'
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from bg-red-600 to-orange-600 text-white py-16 my-2 p'>
        <div className='max-w-7xl mx-auto px-4 pt-10'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl front-bold mb-4'>Latest Electronics at best prices</h1>
                    <p className='text-xl mb-6 text-red-100'>Discover cutting-edge technology with unbeatable deals on smartphones laptops and more</p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Button className="bg-white text-red-600 hover:bg-gray-100">Show now</Button>
                        <Button variant='outline' className="border-white text-white hover: bg-white hover:text-red-600 bg-transparent">View Deals</Button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={hero} alt="" className='shadow-2xl w-[500px] rounded-lg shadow-2xl' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero