import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <>
    <div className='w-10/12 mx-auto py-8 lg:py-24'>
        <h1 className='text-[40px] lg:text-[70px]  mx-auto'>POPULAR DESTINATION FOR COFFEE LOVERS</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-24'>
            <div className='mx-auto'>
                <Image src="/video.svg" width={200} className='w-full lg:w-[450px]' height={100} alt='img'/>
            </div>

            <div className='lg:w-6/12 mx-auto flex flex-col mt-16 lg:mt-0 gap-16 my-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
        </div>



        <div className='flex justify-center mt-16'>
        <button className='bg-[#1E0C06] hover:bg-[#5c2715] mx-auto w-full md:w-10/12 lg:w-[200px] py-4 px-8 font-semibold'>Get a booking</button>
        </div>
    </div>
        
    </>
  )
}

export default Section4