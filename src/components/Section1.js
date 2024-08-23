import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#1E0C06] lg:h-[650px]'>
            <div className='p-2 md:p-10'>
            <div className='bg-[#1E0C06] flex flex-col gap-10 p-10 mt-14 md:mt-0 h-[455px] md:h-[500px]  lg:border-r-[#ffffffa0] lg:border-r-[1px]'>
                <h1 className='font-bold text-[30px] md:text-[55px] lg:mt-4 mx-auto'>Your Coffee. Your Way.</h1>

                <p className='mx-auto text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                <button className='bg-[#FF6D1C] text-xl hover:bg-[#823d17] w-full lg:w-[170px] py-4 mx-auto md:mx-0'>Order</button>
            </div>
            </div>




            <div className='grid grid-cols-1 lg:grid-cols-2 py-10 lg:pr-20 lg:mt-0 mx-auto lg:mx-0'>
                <div className='flex flex-col'>
                    <div className='hidden lg:block h-48 w-44'>

                    </div>

                    <div>
                        <Image src="/h2.svg" width={200} height={100} alt='image'
                        className='w-[290px] md:w-[480px] lg:w-[170px]'/>
                    </div>

                    <div className='hidden lg:block h-48 w-44'>

                    </div>
                </div>

                <div>
                    <div className='mt-10 lg:mt-0'>
                        <Image src="/h1.svg" width={200} height={100} alt='image' className='w-[290px] md:w-[480px] lg:w-[170px]'/>
                    </div>

                    <div className='hidden lg:block h-48 w-44'>

                    </div>

                    <div className='mt-10 lg:mt-0'>
                        <Image src="/h3.svg" width={200} height={100} alt='image' className='w-[290px] md:w-[480px] lg:w-[170px]'/>
                    </div>
                </div>


            </div>

        </div>
    </>
  )
}

export default Section1