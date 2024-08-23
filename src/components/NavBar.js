// import React from 'react'
// import Link from 'next/link'
// import { useState } from 'react';

// const NavBar = () => {

//     const [navbarOpen, setNavbarOpen] = useState(false);


//   return (
//     <>
//     <div className='lg:flex w-10/12 justify-between mx-auto  py-16 bg-transparent  '>
//     <div>
//         <Link href="/">CofeShop</Link>
//     </div>
//     <div>
//         <ul className='flex flex-col lg:flex-row gap-16 text-white'>
//             <li>Gallery</li>
//             <li>Prices for services</li>
//             <li>About us</li>
//             <li>Contact</li>
//         </ul>
//     </div>
// </div>


// </>


//   )
// }

// export default NavBar

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';



const NavBar = () => {

const [navbar, setNavbar] = useState(false);
const handleClick = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };
    return (
      <>
        <nav className='flex items-center flex-wrap bg-transparent py-10 w-10/12 mx-auto'>
          <Link href='/'>
            <div className='inline-flex items-center p-2 mr-4 '>
              <span className='text-xl text-white font-bold tracking-wide'>
                CofeShop
              </span>
            </div>
          </Link>
          <button className=' inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className={` ${
            navbar ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto lg:gap-20 gap-5 ml-2 mt-2'>
              <Link href='/' className='hover:text-[#ab9999]'>
                
                  Gallery
                
              </Link>
              <Link href='/' className='hover:text-[#ab9999]'>
                
                  Prices for services
               
              </Link>
              <Link href='/about' className='hover:text-[#ab9999]'>
               
                  About us
               
              </Link>
              
              <Link href='/' className='hover:text-[#ab9999]'>
                
                  Contact 
                
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
}
  
    export default NavBar;