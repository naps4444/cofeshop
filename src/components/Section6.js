import React from 'react'

const Section6 = () => {
  return (
    <>
    <div className='w-8/12 mx-auto py-24'>
    <div className='mx-auto'>
        <h1 className='text-[25px] text-center lg:text-[70px]  mx-auto'>ANY QUESTIONS?</h1>
        <p className='mt-5 lg:w-9/12 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <form className='flex flex-col mt-10'>
        <div className='w-full lg:w-8/12 h-14 border-2 border-[#807b7b] mx-auto'>  
        <input type='text' className='w-full h-full px-5 bg-black ' placeholder='Your name'/>
        </div>

        <div className='w-full lg:w-8/12 h-14  border-2 border-[#807b7b] mt-5 mx-auto'>
        <input type='text' className='w-full h-full px-5 bg-black' placeholder='Your telephone number'/>
        </div>

        <div className='w-full lg:w-8/12 border-2 border-[#807b7b] mt-5 mx-auto'>
        <textarea type="text" className='w-full px-5 py-5 bg-black' rows={7} cols={20} placeholder='Your question'/>
        </div>

        <button className='bg-[#FF6D1C] hover:bg-[#823d17] mt-5 py-4 w-full lg:w-8/12 mx-auto'>Send</button>
    </form>

    </div>
        
    </>
  )
}

export default Section6