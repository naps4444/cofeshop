import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <>
    <div className='md:w-10/12 bg-[#1E0C06] py-[30px] mx-auto lg:mx-0 lg:grid lg:grid-cols-2'>
        <div className='md:w-full  lg:ml-28 p-5 mx-auto md:right-0'>

            <h1 className='text-center text-[40px] lg:text-[60px]  lg:text-left mt-7 lg:mt-16 mx-auto w-full md:w-10/12  py-3 px-8 font-semibold'>ABOUT US</h1>

            <p className='mt-5 lg:mt-10 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>

        <div className='mx-auto w-8/12 mt-8 lg:mt-0 md:mr-0 relative'>
            <Image src="/rm1.svg" width={200} height={200} className='lg:w-32 mx-auto -z-10'/>

            <Image src="/rm2.svg" width={200} height={200} className='md:w-[230px] absolute top-[100px] lg:top-[80px] -ml-[10px] lg:-ml-[40px] z-20'/>

            <Image src="/rm3.svg" width={200} height={200} className='lg:w-32 mx-auto md:mt-[140px] lg:mt-[205px]'/>

        </div>
    </div>
        
    </>
  )
}

export default Section5