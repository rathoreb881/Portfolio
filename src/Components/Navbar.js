import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-[1536px]'>
        <div className='flex flex-row w-full h-[60px] md:h-[60px] sm:h-[50px] items-center justify-center text-black font-bold lg:text-[18px] sm:text-[15px] cursor-pointer bg-blue-100 shadow-md'>
            <div className='flex ml-5'>
              <a href='/home' className='p-2 hover:scale-105 hover:text-orange-600 '>Home</a>  
              <a href='/about' className='p-2 hover:scale-105  hover:text-orange-600'>About</a>  
              <a href='/skills' className='p-2 hover:scale-105  hover:text-orange-600'>Skills</a>  
              <a href='/portfolio' className='p-2 hover:scale-105  hover:text-orange-600'>Portfolio</a>  
              <a href='/contact' className='p-2 hover:scale-105  hover:text-orange-600'>Contact</a>  
            </div>
        </div>
        
    </div>
  )
}

export default Navbar