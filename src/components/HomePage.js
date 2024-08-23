import React from 'react'
import Section1 from './Section1'
import NavBar from './NavBar'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <div className='container mx-auto bg-home-bg bg-left lg:h-[1300px] bg-contain lg:bg-cover bg-no-repeat'>
        
      <NavBar/>


    <div className='flex lg:justify-end justify-center'>
    <div className='w-full md:w-10/12 lg:mt-12'>
        <Section1/>
    </div>
    </div>

    </div>

    <div className='container mx-auto bg-black'>
      <Section2/>
    </div>

    <div className='container mx-auto bg-black'>
      <Section3/>
    </div>

    <div className='container mx-auto bg-black'>
      <Section4/>
    </div>

    <div className='container mx-auto bg-black'>
      <Section5/>
    </div>

    <div className='container mx-auto bg-black'>
      <Section6/>
    </div>

    <div className='container mx-auto  bg-[#1E0C06]'>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage