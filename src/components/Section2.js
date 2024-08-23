import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <>
    <div className='w-10/12 mx-auto mt-11 lg:mt-0 pb-10'>
    <div className='lg:ml-6'>
        <h1 className='text-[40px] lg:text-[70px] md:w-9/12 md:mx-auto lg:mx-0 lg:w-7/12 '>THE COFFEE WE WORK WITH</h1>
    </div>

    <div className='flex flex-col lg:flex-row justify-between mt-16 lg:mt-24 gap-10 lg:gap-0'>
    <div className='lg:w-[300px] mx-auto'>
            <Image src="/s2-1.svg" width={200} height={200} alt='image' className='w-full md:w-[480px] lg:w-[170px]'/>

            <h2 className='font-bold mt-20'>Espresso</h2>

            <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>

        <div className='lg:w-[300px] mx-auto'>
            <Image src="/s2-2.svg" width={200} height={200} alt='image' className='w-full md:w-[480px] lg:w-[170px]'/>

            <h2 className='font-bold mt-20'>Black Coffee</h2>

            <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>


        <div className='lg:w-[300px] mx-auto'>
            <Image src="/s2-3.svg" width={200} height={200} alt='image' className='w-full md:w-[480px] lg:w-[170px]'/>

            <h2 className='font-bold mt-20'>Latte</h2>

            <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>
    </div>
    </div>
        
    </>
  )
}

export default Section2