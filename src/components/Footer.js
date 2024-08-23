import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-[#1E0C06] flex flex-col md:flex-row py-10 justify-between  w-10/12 mx-auto px-5 gap-5 md:ga'>
        <div className=' flex flex-col gap-5'>
        <span className='text-xl text-white font-bold tracking-wide'>
                CofeShop
              </span>

              <p className='text-sm'>
              Privacy Policy
              </p>

        </div>

        <div className='flex gap-2 items-center'>
            <Image src="/phone.svg" width={100} height={100} className='w-5' alt='phone'/>
            <p>+000 000 000 000</p>
        </div>

        <div className='flex items-center gap-2'>
        <Image src="/location.svg" width={100} height={100} className='w-5' alt='location'/>
        <p>Na Plzeňce 1166/0
        150 00</p>
        </div>
    </div>
        
    </>
  )
}

export default Footer